import { useEffect, useMemo, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import {
  Activity,
  CalendarDays,
  ChevronDown,
  Flag,
  MapPin,
  RefreshCw,
  Trophy,
} from "lucide-react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import {
  getSession,
  getSessionResults,
  getSessionDrivers,
  getRaceSessions,
} from "../../services/openF1";

import "./Stats.css";

function Stats() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const sessionKey = searchParams.get("session_key");

  // =====================================================
  // STATE
  // =====================================================

  const [session, setSession] = useState(null);
  const [results, setResults] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [raceSessions, setRaceSessions] = useState([]);

  const [loadedSessionKey, setLoadedSessionKey] = useState(null);
  const [error, setError] = useState("");

  // =====================================================
  // LOADING STATE
  // =====================================================

  const loading =
    Boolean(sessionKey) &&
    loadedSessionKey !== sessionKey &&
    !error;

  // =====================================================
  // LOAD RACE LIST + CURRENT RACE DATA
  // =====================================================

  useEffect(() => {
    let cancelled = false;

    async function loadData() {
      if (!sessionKey) {
        return;
      }

      try {
        setError("");

        const [
          sessionData,
          sessionResults,
          sessionDrivers,
          allRaceSessions,
        ] = await Promise.all([
          getSession(sessionKey),
          getSessionResults(sessionKey),
          getSessionDrivers(sessionKey),
          getRaceSessions(2026),
        ]);

        if (cancelled) return;

        const currentSession = Array.isArray(sessionData)
          ? sessionData[0]
          : sessionData;

        setSession(currentSession || null);

        setResults(
          Array.isArray(sessionResults)
            ? sessionResults
            : []
        );

        setDrivers(
          Array.isArray(sessionDrivers)
            ? sessionDrivers
            : []
        );

        /*
          Keep only actual Race sessions and sort
          them chronologically for the dropdown.
        */
        const sortedRaceSessions = (
          Array.isArray(allRaceSessions)
            ? allRaceSessions
            : []
        )
          .filter(
            (race) =>
              race.session_name === "Race" ||
              race.session_type === "Race"
          )
          .sort((a, b) => {
            const dateA = new Date(
              a.date_start ||
                a.date_end ||
                0
            );

            const dateB = new Date(
              b.date_start ||
                b.date_end ||
                0
            );

            return dateA - dateB;
          });

        setRaceSessions(sortedRaceSessions);

        setLoadedSessionKey(sessionKey);
      } catch (err) {
        console.error(
          "Failed to load Grand Prix statistics:",
          err
        );

        if (!cancelled) {
          setError(
            "Unable to load statistics for this Grand Prix."
          );

          setSession(null);
          setResults([]);
          setDrivers([]);
          setRaceSessions([]);
          setLoadedSessionKey(sessionKey);
        }
      }
    }

    loadData();

    return () => {
      cancelled = true;
    };
  }, [sessionKey]);

  // =====================================================
  // FORMAT DATE
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
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  }

  // =====================================================
  // FORMAT TIME
  // =====================================================

  function formatTime(dateString) {
    if (!dateString) {
      return "TBA";
    }

    const date = new Date(dateString);

    if (Number.isNaN(date.getTime())) {
      return "TBA";
    }

    return date.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  // =====================================================
  // GRAND PRIX DROPDOWN
  // =====================================================

  function handleGrandPrixChange(event) {
    const selectedSessionKey = event.target.value;

    if (!selectedSessionKey) {
      return;
    }

    navigate(
      `/stats?session_key=${encodeURIComponent(
        selectedSessionKey
      )}`
    );
  }

  // =====================================================
  // DRIVER LOOKUP
  // =====================================================

  function getDriver(driverNumber) {
    return drivers.find(
      (driver) =>
        Number(driver.driver_number) ===
        Number(driverNumber)
    );
  }

  // =====================================================
  // DRIVER NAME
  // =====================================================

  function getDriverName(driverNumber) {
    const driver = getDriver(driverNumber);

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
    const driver = getDriver(driverNumber);

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
    const driver = getDriver(driverNumber);

    return driver?.name_acronym || "—";
  }

  // =====================================================
  // RESULT STATUS
  // =====================================================

  function getResultStatus(result) {
    if (result.dsq) {
      return "DSQ";
    }

    if (result.dns) {
      return "DNS";
    }

    if (result.dnf) {
      return "DNF";
    }

    return "CLASSIFIED";
  }

  // =====================================================
  // RESULT STATUS RANK
  // =====================================================

  function getStatusRank(result) {
    if (result.dsq) {
      return 3;
    }

    if (result.dns) {
      return 2;
    }

    if (result.dnf) {
      return 1;
    }

    return 0;
  }

  // =====================================================
  // SORT RESULTS
  // =====================================================

  const sortedResults = useMemo(() => {
    return [...results].sort((a, b) => {
      const statusA = getStatusRank(a);
      const statusB = getStatusRank(b);

      /*
        Classified drivers ALWAYS come before
        DNF / DNS / DSQ drivers.
      */
      if (statusA !== statusB) {
        return statusA - statusB;
      }

      const positionA = Number(a.position);
      const positionB = Number(b.position);

      const validA = Number.isFinite(positionA);
      const validB = Number.isFinite(positionB);

      if (validA && validB) {
        return positionA - positionB;
      }

      if (validA) {
        return -1;
      }

      if (validB) {
        return 1;
      }

      return 0;
    });
  }, [results]);

  // =====================================================
  // CLASSIFIED DRIVERS
  // =====================================================

  const classifiedDrivers = useMemo(() => {
    return sortedResults.filter(
      (result) =>
        getStatusRank(result) === 0 &&
        Number.isFinite(Number(result.position))
    );
  }, [sortedResults]);

  // =====================================================
  // DNF
  // =====================================================

  const dnfDrivers = useMemo(() => {
    return sortedResults.filter(
      (result) => result.dnf
    );
  }, [sortedResults]);

  // =====================================================
  // DNS
  // =====================================================

  const dnsDrivers = useMemo(() => {
    return sortedResults.filter(
      (result) => result.dns
    );
  }, [sortedResults]);

  // =====================================================
  // DSQ
  // =====================================================

  const dsqDrivers = useMemo(() => {
    return sortedResults.filter(
      (result) => result.dsq
    );
  }, [sortedResults]);

  // =====================================================
  // GRAND PRIX NAME
  // =====================================================

  const grandPrixName =
    session?.country_name ||
    session?.meeting_name ||
    session?.location ||
    "Formula 1 Grand Prix";

  // =====================================================
  // CIRCUIT
  // =====================================================

  const circuitLocation =
    session?.location ||
    "Circuit location unavailable";

  // =====================================================
  // PODIUM
  // =====================================================

  const podiumDrivers = useMemo(() => {
    return classifiedDrivers
      .filter((result) => {
        const position = Number(result.position);

        return (
          position >= 1 &&
          position <= 3
        );
      })
      .sort(
        (a, b) =>
          Number(a.position) -
          Number(b.position)
      )
      .slice(0, 3);
  }, [classifiedDrivers]);

  // =====================================================
  // RENDER
  // =====================================================

  return (
    <>
      <Navbar />

      <main className="stats-page">

        {/* =================================================
            HERO
        ================================================= */}

        <section className="stats-hero">

          <div className="stats-hero-grid"></div>

          <div className="stats-red-glow"></div>

          <div className="stats-hero-inner">

            <div className="stats-hero-content">

              <div className="stats-kicker">
                <span></span>

                APEXONE / RACE STATISTICS
              </div>

              <h1>
                {grandPrixName}
                <strong>
                  {" "}statistics.
                </strong>
              </h1>

              <p>
                Explore driver performance,
                classification and race results
                from this Grand Prix.
              </p>

            </div>

            <div className="stats-session-card">

              <div className="stats-session-icon">
                <Flag size={22} />
              </div>

              <div>

                <span>
                  SESSION
                </span>

                <strong>
                  {session?.session_name ||
                    "Race"}
                </strong>

                <small>
                  2026 FIA FORMULA 1
                </small>

              </div>

            </div>

          </div>

        </section>


        {/* =================================================
            LOADING
        ================================================= */}

        {loading && (

          <section className="stats-container">

            <div className="stats-state">

              <RefreshCw
                size={24}
                className="stats-spinner"
              />

              <strong>
                Loading race statistics...
              </strong>

              <span>
                Getting the latest driver data
                from OpenF1.
              </span>

            </div>

          </section>

        )}


        {/* =================================================
            ERROR
        ================================================= */}

        {!loading && error && (

          <section className="stats-container">

            <div className="stats-state stats-error">

              <Activity size={30} />

              <strong>
                Statistics unavailable
              </strong>

              <span>
                {error}
              </span>

            </div>

          </section>

        )}


        {/* =================================================
            CONTENT
        ================================================= */}

        {!loading && !error && (

          <>

            {/* =============================================
                GRAND PRIX SELECTOR
            ============================================= */}

            <section className="stats-container">

              <div className="stats-race-selector">

                <div className="stats-selector-heading">

                  <span className="stats-section-kicker">
                    2026 FIA FORMULA 1
                  </span>

                  <h2>
                    Grand Prix
                  </h2>

                </div>

                <div className="stats-select-wrapper">

                  <Flag size={17} />

                  <select
                    value={sessionKey || ""}
                    onChange={
                      handleGrandPrixChange
                    }
                    aria-label="Select Grand Prix"
                  >

                    <option value="">
                      Select Grand Prix
                    </option>

                    {raceSessions.map(
                      (race) => (
                        <option
                          key={
                            race.session_key
                          }
                          value={
                            race.session_key
                          }
                        >
                          {race.country_name ||
                            race.meeting_name ||
                            race.location ||
                            "Grand Prix"}
                        </option>
                      )
                    )}

                  </select>

                  <ChevronDown
                    size={17}
                    className="stats-select-arrow"
                  />

                </div>

              </div>

            </section>


            {/* =============================================
                RACE INFORMATION
            ============================================= */}

            <section className="stats-container">

              <div className="stats-race-header">

                <div>

                  <span className="stats-section-kicker">
                    GRAND PRIX
                  </span>

                  <h2>
                    {grandPrixName}
                  </h2>

                  <div className="stats-location">

                    <MapPin size={15} />

                    {circuitLocation}

                  </div>

                </div>

                <div className="stats-race-meta">

                  <div>

                    <CalendarDays size={17} />

                    <span>
                      {formatDate(
                        session?.date_start
                      )}
                    </span>

                  </div>

                  {/* ONLY TIME — NO "START" LABEL */}

                  <div>

                    <strong>
                      {formatTime(
                        session?.date_start
                      )}
                    </strong>

                  </div>

                </div>

              </div>

            </section>


            {/* =============================================
                PODIUM
            ============================================= */}

            {podiumDrivers.length > 0 && (

              <section className="stats-container">

                <div className="stats-section-heading">

                  <div>

                    <span>
                      RACE CLASSIFICATION
                    </span>

                    <h2>
                      The podium
                    </h2>

                  </div>

                  <Trophy size={24} />

                </div>


                <div className="podium">

                  {podiumDrivers.map(
                    (result) => {

                      const position =
                        Number(
                          result.position
                        );

                      const driverNumber =
                        result.driver_number;

                      return (

                        <div
                          key={
                            `${driverNumber}-${position}`
                          }
                          className={`podium-card podium-${position}`}
                        >

                          <div className="podium-position">

                            {position === 1 ? (
                              <Trophy size={20} />
                            ) : (
                              `P${position}`
                            )}

                          </div>

                          <div className="podium-acronym">

                            {getDriverAcronym(
                              driverNumber
                            )}

                          </div>

                          <h3>

                            {getDriverName(
                              driverNumber
                            )}

                          </h3>

                          <span>

                            {getDriverTeam(
                              driverNumber
                            )}

                          </span>

                        </div>

                      );
                    }
                  )}

                </div>

              </section>

            )}


            {/* =============================================
                DRIVER CLASSIFICATION
            ============================================= */}

            <section className="stats-container stats-leaderboard-section">

              <div className="stats-section-heading">

                <div>

                  <span>
                    FULL CLASSIFICATION
                  </span>

                  <h2>
                    Driver ranking
                  </h2>

                  <p>
                    Classified drivers are ranked
                    first. DNF, DNS and DSQ drivers
                    appear below them.
                  </p>

                </div>

              </div>


              {sortedResults.length === 0 ? (

                <div className="stats-empty">

                  <Activity size={30} />

                  <strong>
                    No results available
                  </strong>

                  <span>
                    OpenF1 has not returned race
                    results for this session.
                  </span>

                </div>

              ) : (

                <div className="stats-table">

                  {/* TABLE HEADER */}

                  <div className="stats-table-header">

                    <span>
                      POS
                    </span>

                    <span>
                      DRIVER
                    </span>

                    <span>
                      TEAM
                    </span>

                    <span>
                      TIME
                    </span>

                    <span>
                      STATUS
                    </span>

                  </div>


                  {/* RESULTS */}

                  {sortedResults.map(
                    (result, index) => {

                      const driverNumber =
                        result.driver_number;

                      const status =
                        getResultStatus(
                          result
                        );

                      const isClassified =
                        status ===
                        "CLASSIFIED";

                      const displayPosition =
                        isClassified &&
                        result.position
                          ? result.position
                          : null;

                      /*
                        OpenF1 can return duration
                        as a number of seconds,
                        or a duration string.
                      */
                      let finishingTime = "—";

                      if (
                        isClassified &&
                        result.duration
                      ) {
                        if (
                          typeof result.duration ===
                          "number"
                        ) {
                          const totalSeconds =
                            result.duration;

                          const hours =
                            Math.floor(
                              totalSeconds / 3600
                            );

                          const minutes =
                            Math.floor(
                              (totalSeconds % 3600) /
                                60
                            );

                          const seconds =
                            totalSeconds % 60;

                          if (hours > 0) {
                            finishingTime =
                              `${String(
                                hours
                              ).padStart(
                                2,
                                "0"
                              )}:${String(
                                minutes
                              ).padStart(
                                2,
                                "0"
                              )}:${seconds
                                .toFixed(3)
                                .padStart(
                                  6,
                                  "0"
                                )}`;
                          } else {
                            finishingTime =
                              `${String(
                                minutes
                              ).padStart(
                                2,
                                "0"
                              )}:${seconds
                                .toFixed(3)
                                .padStart(
                                  6,
                                  "0"
                                )}`;
                          }
                        } else {
                          finishingTime =
                            String(
                              result.duration
                            );
                        }
                      }

                      return (

                        <div
                          key={`${driverNumber}-${index}`}
                          className={`stats-table-row ${
                            status !==
                            "CLASSIFIED"
                              ? "is-non-classified"
                              : ""
                          }`}
                        >

                          {/* POSITION */}

                          <div className="stats-position">

                            {displayPosition ? (

                              Number(
                                displayPosition
                              ) === 1 ? (

                                <Trophy
                                  size={18}
                                />

                              ) : (

                                String(
                                  displayPosition
                                ).padStart(
                                  2,
                                  "0"
                                )

                              )

                            ) : (

                              <span className="non-classified-position">
                                —
                              </span>

                            )}

                          </div>


                          {/* DRIVER */}

                          <div className="stats-driver">

                            <div className="stats-driver-avatar">

                              {getDriverAcronym(
                                driverNumber
                              )}

                            </div>

                            <div>

                              <strong>

                                {getDriverName(
                                  driverNumber
                                )}

                              </strong>

                              <span>
                                #{driverNumber}
                              </span>

                            </div>

                          </div>


                          {/* TEAM */}

                          <div className="stats-team">

                            {getDriverTeam(
                              driverNumber
                            )}

                          </div>


                          {/* FINISHING TIME */}

                          <div className="stats-finishing-time">

                            {finishingTime}

                          </div>


                          {/* STATUS */}

                          <div>

                            <span
                              className={`stats-result-status status-${status.toLowerCase()}`}
                            >

                              {status}

                            </span>

                          </div>

                        </div>

                      );
                    }
                  )}

                </div>

              )}

            </section>


            {/* =============================================
                RESULT SUMMARY
            ============================================= */}

            <section className="stats-container stats-summary-section">

              <div className="stats-summary-grid">

                <div className="stats-summary-card">

                  <span>
                    CLASSIFIED
                  </span>

                  <strong>
                    {classifiedDrivers.length}
                  </strong>

                  <small>
                    Drivers classified
                  </small>

                </div>


                <div className="stats-summary-card">

                  <span>
                    DNF
                  </span>

                  <strong>
                    {dnfDrivers.length}
                  </strong>

                  <small>
                    Did not finish
                  </small>

                </div>


                <div className="stats-summary-card">

                  <span>
                    DNS
                  </span>

                  <strong>
                    {dnsDrivers.length}
                  </strong>

                  <small>
                    Did not start
                  </small>

                </div>


                <div className="stats-summary-card">

                  <span>
                    DSQ
                  </span>

                  <strong>
                    {dsqDrivers.length}
                  </strong>

                  <small>
                    Disqualified
                  </small>

                </div>

              </div>

            </section>

          </>

        )}

      </main>

      <Footer />
    </>
  );
}

export default Stats;