import { useEffect, useState } from "react";

import {
  Trophy,
  Flag,
  Car,
  RefreshCw,
} from "lucide-react";

import {
  getRaceSessions,
  getDriverStandings,
  getTeamStandings,
  getSessionDrivers,
} from "../../services/openF1";

import "./DashboardPreview.css";

function DashboardPreview() {
  const [leader, setLeader] = useState(null);
  const [constructorLeader, setConstructorLeader] =
    useState(null);
  const [nextRace, setNextRace] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadDashboardData() {
      try {
        setLoading(true);
        setError("");

        // =================================================
        // GET ALL 2026 RACE SESSIONS
        // =================================================

        const sessions = await getRaceSessions(2026);

        if (cancelled) return;

        const sortedSessions = [...sessions].sort(
          (a, b) => {
            const dateA = new Date(
              a.date_start || 0
            );

            const dateB = new Date(
              b.date_start || 0
            );

            return dateA - dateB;
          }
        );

        // =================================================
        // CURRENT DATE
        // =================================================

        const now = new Date();

        // =================================================
        // COMPLETED RACES
        // =================================================

        const completedRaces =
          sortedSessions.filter((session) => {
            if (!session.date_end) {
              return false;
            }

            return (
              new Date(session.date_end) < now
            );
          });

        // =================================================
        // NEXT RACE
        // =================================================

        const upcomingRaces =
          sortedSessions.filter((session) => {
            if (!session.date_start) {
              return false;
            }

            return (
              new Date(session.date_start) > now
            );
          });

        if (upcomingRaces.length > 0) {
          setNextRace(upcomingRaces[0]);
        }

        // =================================================
        // MOST RECENT COMPLETED RACE
        // =================================================

        const latestRace =
          completedRaces.length > 0
            ? completedRaces[
                completedRaces.length - 1
              ]
            : null;

        if (!latestRace?.session_key) {
          setLoading(false);
          return;
        }

        console.log(
          "Latest completed race:",
          latestRace
        );

        // =================================================
        // GET ALL REQUIRED DATA
        // =================================================

        const [
          driverStandings,
          teamStandings,
          sessionDrivers,
        ] = await Promise.all([
          getDriverStandings(
            latestRace.session_key
          ),

          getTeamStandings(
            latestRace.session_key
          ),

          getSessionDrivers(
            latestRace.session_key
          ),
        ]);

        if (cancelled) return;

        console.log(
          "Driver standings:",
          driverStandings
        );

        console.log(
          "Team standings:",
          teamStandings
        );

        console.log(
          "Session drivers:",
          sessionDrivers
        );

        // =================================================
        // DRIVER CHAMPIONSHIP
        // =================================================

        if (
          Array.isArray(driverStandings) &&
          driverStandings.length > 0
        ) {
          // Sort by championship position.
          const sortedDrivers = [
            ...driverStandings,
          ].sort(
            (a, b) =>
              Number(a.position_current) -
              Number(b.position_current)
          );

          const championshipLeader =
            sortedDrivers[0];

          if (championshipLeader) {
            // ---------------------------------------------
            // MATCH DRIVER NUMBER
            // ---------------------------------------------

            const driverInfo =
              Array.isArray(sessionDrivers)
                ? sessionDrivers.find(
                    (driver) =>
                      Number(
                        driver.driver_number
                      ) ===
                      Number(
                        championshipLeader.driver_number
                      )
                  )
                : null;

            console.log(
              "Championship leader:",
              championshipLeader
            );

            console.log(
              "Matched driver:",
              driverInfo
            );

            // ---------------------------------------------
            // DRIVER NAME
            // ---------------------------------------------

            let driverName =
              driverInfo?.full_name;

            if (!driverName) {
              driverName =
                `${driverInfo?.first_name || ""} ${
                  driverInfo?.last_name || ""
                }`.trim();
            }

            if (!driverName) {
              driverName = `Driver #${championshipLeader.driver_number}`;
            }

            // ---------------------------------------------
            // SAVE LEADER
            // ---------------------------------------------

            setLeader({
              name: driverName,

              number:
                championshipLeader.driver_number,

              position:
                championshipLeader.position_current,

              points:
                championshipLeader.points_current,

              team:
                driverInfo?.team_name ||
                "Team unavailable",

              acronym:
                driverInfo?.name_acronym ||
                "",
            });
          }
        }

        // =================================================
        // CONSTRUCTOR CHAMPIONSHIP
        // =================================================

        if (
          Array.isArray(teamStandings) &&
          teamStandings.length > 0
        ) {
          const sortedTeams = [
            ...teamStandings,
          ].sort(
            (a, b) =>
              Number(a.position_current) -
              Number(b.position_current)
          );

          const teamLeader =
            sortedTeams[0];

          if (teamLeader) {
            setConstructorLeader({
              name:
                teamLeader.team_name,

              position:
                teamLeader.position_current,

              points:
                teamLeader.points_current,
            });
          }
        }
      } catch (err) {
        console.error(
          "Dashboard data error:",
          err
        );

        if (!cancelled) {
          setError(
            "Unable to load the latest Formula 1 data."
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadDashboardData();

    return () => {
      cancelled = true;
    };
  }, []);

  // =====================================================
  // FORMAT DATE
  // =====================================================

  function formatRaceDate(date) {
    if (!date) {
      return "Date TBA";
    }

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      return "Date TBA";
    }

    return parsedDate.toLocaleDateString(
      "en-GB",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    );
  }

  // =====================================================
  // LOADING
  // =====================================================

  if (loading) {
    return (
      <section className="dashboard">

        <div className="dashboard-header">

          <span className="dashboard-kicker">
            2026 SEASON
          </span>

          <h2>
            Live Season Dashboard
          </h2>

          <p>
            Follow the latest championship
            standings and race information.
          </p>

        </div>

        <div className="dashboard-loading">

          <RefreshCw
            size={22}
            className="dashboard-spinner"
          />

          Loading latest F1 data...

        </div>

      </section>
    );
  }

  // =====================================================
  // ERROR
  // =====================================================

  if (error) {
    return (
      <section className="dashboard">

        <div className="dashboard-header">

          <span className="dashboard-kicker">
            2026 SEASON
          </span>

          <h2>
            Live Season Dashboard
          </h2>

          <p>
            {error}
          </p>

        </div>

      </section>
    );
  }

  // =====================================================
  // DASHBOARD
  // =====================================================

  return (
    <section className="dashboard">

      {/* =================================================
          HEADER
      ================================================= */}

      <div className="dashboard-header">

        <span className="dashboard-kicker">
          2026 SEASON
        </span>

        <h2>
          Live Season Dashboard
        </h2>

        <p>
          Follow the latest championship
          standings and race information.
        </p>

      </div>


      {/* =================================================
          CARDS
      ================================================= */}

      <div className="dashboard-grid">

        {/* =================================================
            CHAMPIONSHIP LEADER
        ================================================= */}

        <div className="dashboard-card">

          <div className="dashboard-card-top">

            <div className="card-icon">
              <Trophy size={24} />
            </div>

            <span className="card-label">
              CHAMPIONSHIP
            </span>

          </div>


          <h3>
            Championship Leader
          </h3>


          <h4>
            {leader?.name ||
              "Data unavailable"}
          </h4>


          <p>
            {leader ? (
              <>
                P{leader.position}

                <span> • </span>

                {leader.points} Points
              </>
            ) : (
              "No data available"
            )}
          </p>

        </div>


        {/* =================================================
            NEXT GRAND PRIX
        ================================================= */}

        <div className="dashboard-card dashboard-card-featured">

          <div className="dashboard-card-top">

            <div className="card-icon">
              <Flag size={24} />
            </div>

            <span className="card-label">
              NEXT RACE
            </span>

          </div>


          <h3>
            Next Grand Prix
          </h3>


          <h4>
            {nextRace?.country_name ||
              nextRace?.location ||
              "TBA"}
          </h4>


          <p>
            {formatRaceDate(
              nextRace?.date_start
            )}
          </p>

        </div>


        {/* =================================================
            CONSTRUCTORS LEADER
        ================================================= */}

        <div className="dashboard-card">

          <div className="dashboard-card-top">

            <div className="card-icon">
              <Car size={24} />
            </div>

            <span className="card-label">
              CONSTRUCTORS
            </span>

          </div>


          <h3>
            Constructors Leader
          </h3>


          <h4>
            {constructorLeader?.name ||
              "Data unavailable"}
          </h4>


          <p>
            {constructorLeader
              ? `${constructorLeader.points} Points`
              : "No data available"}
          </p>

        </div>

      </div>

    </section>
  );
}

export default DashboardPreview;