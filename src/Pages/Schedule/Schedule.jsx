import { useEffect, useState } from "react";

import {
  Activity,
  CalendarDays,
  Flag,
  Gauge,
  Radio,
  RefreshCw,
  Timer,
} from "lucide-react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import {
  getRaceSessions,
  getSessionResults,
  getSessionDrivers,
} from "../../services/openF1";

import "./Schedule.css";

function Schedule() {
  // =====================================================
  // STATE
  // =====================================================

  const [sessions, setSessions] = useState([]);
  const [selectedSession, setSelectedSession] = useState(null);

  const [results, setResults] = useState([]);
  const [sessionDrivers, setSessionDrivers] = useState([]);

  const [loadingSessions, setLoadingSessions] = useState(true);
  const [loadingResults, setLoadingResults] = useState(false);

  const [error, setError] = useState("");

  // =====================================================
  // LOAD 2026 RACE SESSIONS
  // =====================================================

  useEffect(() => {
    let cancelled = false;

    async function loadSessions() {
      try {
        setLoadingSessions(true);
        setError("");

        const raceSessions = await getRaceSessions(2026);

        if (cancelled) {
          return;
        }

        const sortedSessions = [...raceSessions].sort(
          (a, b) => {
            const dateA = new Date(
              a.date_start || a.date_end || 0
            );

            const dateB = new Date(
              b.date_start || b.date_end || 0
            );

            return dateA - dateB;
          }
        );

        setSessions(sortedSessions);

        /*
         * Select the most appropriate session.
         *
         * If a race is currently happening, select it.
         * Otherwise select the latest completed race.
         * If there are no completed races, select the first race.
         */

        const now = new Date();

        const liveSession = sortedSessions.find(
          (session) => {
            const start = session.date_start
              ? new Date(session.date_start)
              : null;

            const end = session.date_end
              ? new Date(session.date_end)
              : null;

            return (
              start &&
              end &&
              now >= start &&
              now <= end
            );
          }
        );

        const completedSessions =
          sortedSessions.filter((session) => {
            const end = session.date_end
              ? new Date(session.date_end)
              : null;

            return end && end < now;
          });

        if (liveSession) {
          setSelectedSession(liveSession);
        } else if (completedSessions.length > 0) {
          setSelectedSession(
            completedSessions[
              completedSessions.length - 1
            ]
          );
        } else if (sortedSessions.length > 0) {
          setSelectedSession(sortedSessions[0]);
        }
      } catch (err) {
        if (!cancelled) {
          console.error(
            "Failed to load race sessions:",
            err
          );

          setError(
            "Unable to load the Formula 1 sessions."
          );
        }
      } finally {
        if (!cancelled) {
          setLoadingSessions(false);
        }
      }
    }

    loadSessions();

    return () => {
      cancelled = true;
    };
  }, []);

  // =====================================================
  // LOAD SELECTED SESSION DATA
  // =====================================================

  useEffect(() => {
    if (!selectedSession?.session_key) {
      return;
    }

    let cancelled = false;

    async function loadSessionData() {
      try {
        setLoadingResults(true);
        setError("");

        const [
          sessionResults,
          drivers,
        ] = await Promise.all([
          getSessionResults(
            selectedSession.session_key
          ),

          getSessionDrivers(
            selectedSession.session_key
          ),
        ]);

        if (cancelled) {
          return;
        }

        setResults(
          Array.isArray(sessionResults)
            ? sessionResults
            : []
        );

        setSessionDrivers(
          Array.isArray(drivers)
            ? drivers
            : []
        );
      } catch (err) {
        if (!cancelled) {
          console.error(
            "Failed to load session data:",
            err
          );

          setResults([]);
          setSessionDrivers([]);

          setError(
            "Unable to load data for this session."
          );
        }
      } finally {
        if (!cancelled) {
          setLoadingResults(false);
        }
      }
    }

    loadSessionData();

    return () => {
      cancelled = true;
    };
  }, [selectedSession]);

  // =====================================================
  // HELPERS
  // =====================================================

  function formatDate(dateString) {
    if (!dateString) {
      return "TBA";
    }

    const date = new Date(dateString);

    if (Number.isNaN(date.getTime())) {
      return "TBA";
    }

    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }

  // =====================================================
  // DRIVER NAME
  // =====================================================

  function getDriverName(driverNumber) {
    const driver = sessionDrivers.find(
      (item) =>
        Number(item.driver_number) ===
        Number(driverNumber)
    );

    if (!driver) {
      return `Driver #${driverNumber}`;
    }

    return (
      driver.full_name ||
      `${driver.first_name || ""} ${
        driver.last_name || ""
      }`.trim() ||
      driver.name_acronym ||
      `Driver #${driverNumber}`
    );
  }

  // =====================================================
  // DRIVER TEAM
  // =====================================================

  function getDriverTeam(driverNumber) {
    const driver = sessionDrivers.find(
      (item) =>
        Number(item.driver_number) ===
        Number(driverNumber)
    );

    return (
      driver?.team_name ||
      driver?.team ||
      "Team unavailable"
    );
  }

  // =====================================================
  // DRIVER ACRONYM
  // =====================================================

  function getDriverAcronym(driverNumber) {
    const driver = sessionDrivers.find(
      (item) =>
        Number(item.driver_number) ===
        Number(driverNumber)
    );

    return driver?.name_acronym || "—";
  }

  // =====================================================
  // SESSION STATUS
  // =====================================================

  function getSessionStatus() {
    if (!selectedSession) {
      return "NO SESSION";
    }

    const now = new Date();

    const start = selectedSession.date_start
      ? new Date(selectedSession.date_start)
      : null;

    const end = selectedSession.date_end
      ? new Date(selectedSession.date_end)
      : null;

    if (start && now < start) {
      return "UPCOMING";
    }

    if (
      start &&
      end &&
      now >= start &&
      now <= end
    ) {
      return "LIVE";
    }

    if (end && now > end) {
      return "COMPLETED";
    }

    return "SCHEDULED";
  }

  // =====================================================
  // SORT RESULTS
  // =====================================================

  const sortedResults = [...results].sort(
    (a, b) => {
      const positionA = Number(a.position);
      const positionB = Number(b.position);

      if (Number.isNaN(positionA)) {
        return 1;
      }

      if (Number.isNaN(positionB)) {
        return -1;
      }

      return positionA - positionB;
    }
  );

  const sessionStatus = getSessionStatus();

  // =====================================================
  // RENDER
  // =====================================================

  return (
    <>
      <Navbar />

      <main className="live-page">

        {/* =================================================
            HERO
        ================================================= */}

        <section className="live-hero">

          <div className="live-hero-grid"></div>

          <div className="live-container">

            <div className="live-hero-content">

              <span className="live-kicker">
                APEXONE LIVE
              </span>

              <h1>
                Follow the
                <span> Action.</span>
              </h1>

              <p>
                Track Formula 1 sessions, drivers and
                race results using live session data.
              </p>

            </div>

            <div className="live-status-card">

              <div className="live-status-indicator">

                <span
                  className={
                    sessionStatus === "LIVE"
                      ? "is-live"
                      : ""
                  }
                ></span>

                {sessionStatus}

              </div>

              <strong>
                {selectedSession?.session_name ||
                  "—"}
              </strong>

              <small>
                2026 FORMULA 1
              </small>

            </div>

          </div>

        </section>


        {/* =================================================
            SESSION SELECTOR
        ================================================= */}

        <section className="live-container live-selector-section">

          <div className="live-section-heading">

            <span>
              SESSION EXPLORER
            </span>

            <h2>
              Select a Grand Prix
            </h2>

            <p>
              Choose a race session to view the
              latest available driver information.
            </p>

          </div>


          {loadingSessions ? (

            <div className="live-loading">

              <RefreshCw
                size={20}
                className="spin"
              />

              Loading 2026 sessions...

            </div>

          ) : sessions.length === 0 ? (

            <div className="live-empty">

              No race sessions are currently available.

            </div>

          ) : (

            <div className="live-session-select">

              <Flag size={19} />

              <select
                value={
                  selectedSession?.session_key || ""
                }
                onChange={(event) => {

                  const session =
                    sessions.find(
                      (item) =>
                        String(
                          item.session_key
                        ) === event.target.value
                    );

                  setSelectedSession(
                    session || null
                  );

                }}
              >

                {sessions.map((session) => (

                  <option
                    key={session.session_key}
                    value={session.session_key}
                  >
                    {session.country_name ||
                      session.location ||
                      "Grand Prix"}{" "}
                    —{" "}
                    {session.session_name ||
                      "Race"}
                  </option>

                ))}

              </select>

            </div>

          )}

        </section>


        {/* =================================================
            SESSION INFORMATION
        ================================================= */}

        {selectedSession && (

          <section className="live-container">

            <div className="live-session-header">

              <div>

                <span className="live-section-label">
                  CURRENT SESSION
                </span>

                <h2>
                  {selectedSession.session_name ||
                    "Race"}
                </h2>

                <p>
                  {selectedSession.country_name ||
                    selectedSession.location ||
                    "Formula 1 Grand Prix"}
                </p>

              </div>


              <div className="live-session-meta">

                <div>

                  <CalendarDays size={17} />

                  <span>
                    {formatDate(
                      selectedSession.date_start
                    )}
                  </span>

                </div>


                <div>

                  <Radio size={17} />

                  <span>
                    {sessionStatus}
                  </span>

                </div>

              </div>

            </div>

          </section>

        )}


        {/* =================================================
            ERROR
        ================================================= */}

        {error && (

          <section className="live-container">

            <div className="live-error">

              <strong>
                Something went wrong
              </strong>

              <p>
                {error}
              </p>

            </div>

          </section>

        )}


        {/* =================================================
            LEADERBOARD
        ================================================= */}

        <section className="live-container live-leaderboard-section">

          <div className="live-section-heading">

            <span>
              DRIVER TIMING
            </span>

            <h2>
              Session Leaderboard
            </h2>

            <p>
              Driver results from the selected
              Formula 1 session.
            </p>

          </div>


          {loadingResults ? (

            <div className="live-loading">

              <RefreshCw
                size={20}
                className="spin"
              />

              Loading session data...

            </div>

          ) : sortedResults.length === 0 ? (

            <div className="live-empty">

              <Activity size={28} />

              <h3>
                No timing data available
              </h3>

              <p>
                Timing information for this session
                is not currently available.
              </p>

            </div>

          ) : (

            <div className="live-table-wrapper">

              <table className="live-table">

                <thead>

                  <tr>

                    <th>
                      POS
                    </th>

                    <th>
                      DRIVER
                    </th>

                    <th>
                      TEAM
                    </th>

                    <th>
                      STATUS
                    </th>

                  </tr>

                </thead>


                <tbody>

                  {sortedResults.map(
                    (result, index) => {

                      const position =
                        result.position;

                      const driverNumber =
                        result.driver_number;

                      return (

                        <tr
                          key={`${driverNumber}-${index}`}
                        >

                          {/* POSITION */}

                          <td className="live-position">

                            {position ||
                              index + 1}

                          </td>


                          {/* DRIVER */}

                          <td>

                            <div className="live-driver">

                              <strong>
                                {getDriverName(
                                  driverNumber
                                )}
                              </strong>

                              <span>
                                {getDriverAcronym(
                                  driverNumber
                                )}{" "}
                                · #
                                {driverNumber}
                              </span>

                            </div>

                          </td>


                          {/* TEAM */}

                          <td className="live-team">

                            {getDriverTeam(
                              driverNumber
                            )}

                          </td>


                          {/* STATUS */}

                          <td>

                            <span className="live-result-status">

                              {result.dnf
                                ? "DNF"
                                : result.dns
                                ? "DNS"
                                : result.dsq
                                ? "DSQ"
                                : "CLASSIFIED"}

                            </span>

                          </td>

                        </tr>

                      );

                    }
                  )}

                </tbody>

              </table>

            </div>

          )}

        </section>


        {/* =================================================
            LIVE FEATURES
        ================================================= */}

        <section className="live-container live-features">

          <div className="live-feature-card">

            <Gauge size={23} />

            <span>
              TIMING
            </span>

            <h3>
              Driver Performance
            </h3>

            <p>
              Track driver positions and session
              performance as data becomes available.
            </p>

          </div>


          <div className="live-feature-card">

            <Timer size={23} />

            <span>
              SESSIONS
            </span>

            <h3>
              Every Grand Prix
            </h3>

            <p>
              Move between the available 2026 race
              sessions from one place.
            </p>

          </div>


          <div className="live-feature-card">

            <Activity size={23} />

            <span>
              OPENF1
            </span>

            <h3>
              Live Data
            </h3>

            <p>
              ApexOne uses OpenF1 session data rather
              than manually entered race information.
            </p>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default Schedule;