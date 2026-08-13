import { useEffect, useMemo, useState } from "react";

import {
  Flag,
  ChevronDown,
  CalendarDays,
  Trophy,
  LoaderCircle,
  AlertCircle,
} from "lucide-react";

import "./RaceResults.css";

import drivers from "../../data/drivers";

import {
  getSessions,
  getSessionResults,
  getSessionDrivers,
} from "../../services/openF1";

function RaceResults() {
  // =====================================================
  // STATE
  // =====================================================

  const [sessions, setSessions] = useState([]);

  const [selectedRace, setSelectedRace] = useState("all");

  const [results, setResults] = useState([]);

  const [loadingSessions, setLoadingSessions] =
    useState(true);

  const [loadingResults, setLoadingResults] =
    useState(false);

  const [error, setError] = useState("");

  const [resultsError, setResultsError] =
    useState("");


  // =====================================================
  // LOAD 2026 SESSIONS
  // =====================================================

  useEffect(() => {
    let cancelled = false;

    async function loadSessions() {
      try {
        setLoadingSessions(true);
        setError("");

        const data = await getSessions(2026);

        if (cancelled) {
          return;
        }

        // -------------------------------------------------
        // Only keep actual RACE sessions.
        // OpenF1 also returns Practice, Qualifying,
        // Sprint, etc.
        // -------------------------------------------------

        const raceSessions = data
          .filter(
            (session) =>
              session.session_name === "Race" ||
              session.session_type === "Race"
          )
          .sort((a, b) => {
            const dateA = new Date(
              a.date_start || 0
            );

            const dateB = new Date(
              b.date_start || 0
            );

            return dateA - dateB;
          });

        setSessions(raceSessions);

      } catch (err) {
        if (!cancelled) {
          console.error(
            "Failed to load OpenF1 sessions:",
            err
          );

          setError(
            "Unable to load the 2026 Grand Prix calendar."
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
  // LOAD SELECTED RACE
  // =====================================================

  useEffect(() => {
    // -------------------------------------------------
    // IMPORTANT:
    // Do NOT call setResults([]) here.
    //
    // When "all" is selected, the component simply
    // doesn't need race results.
    // -------------------------------------------------

    if (selectedRace === "all") {
      return;
    }

    let cancelled = false;

    async function loadResults() {
      try {
        setLoadingResults(true);
        setResultsError("");

        // -------------------------------------------------
        // selectedRace contains the actual OpenF1
        // session_key.
        // -------------------------------------------------

        const sessionKey = Number(
          selectedRace
        );

        // -------------------------------------------------
        // Get final race results
        // -------------------------------------------------

        const raceResults =
          await getSessionResults(sessionKey);


        // -------------------------------------------------
        // Get drivers who participated in the session.
        // -------------------------------------------------

        let sessionDrivers = [];

        try {
          sessionDrivers =
            await getSessionDrivers(
              sessionKey
            );
        } catch (driverError) {
          console.warn(
            "Could not load session drivers:",
            driverError
          );
        }


        if (cancelled) {
          return;
        }


        // =================================================
        // CREATE RESULT LOOKUP
        // =================================================

        const resultMap = new Map();

        raceResults.forEach((result) => {
          resultMap.set(
            Number(result.driver_number),
            result
          );
        });


        // =================================================
        // CREATE SESSION DRIVER LOOKUP
        // =================================================

        const sessionDriverMap = new Map();

        sessionDrivers.forEach((driver) => {
          sessionDriverMap.set(
            Number(driver.driver_number),
            driver
          );
        });


        // =================================================
        // MERGE WITH OUR 22 DRIVER DATA
        //
        // This makes sure all 22 drivers are displayed,
        // even if OpenF1 doesn't return a result for one.
        // =================================================

        const mergedResults = drivers.map(
          (driver) => {

            const driverNumber = Number(
              driver.number
            );

            const apiResult =
              resultMap.get(driverNumber);

            const apiDriver =
              sessionDriverMap.get(
                driverNumber
              );


            // ---------------------------------------------
            // DRIVER DID NOT APPEAR IN RESULT DATA
            // ---------------------------------------------

            if (!apiResult) {
              return {
                ...driver,

                result: "DNS",

                position: null,

                dnf: false,

                dns: true,

                dsq: false,

                numberOfLaps: 0,

                gapToLeader: null,

                sessionDriver:
                  apiDriver || null,
              };
            }


            // ---------------------------------------------
            // DETERMINE STATUS
            // ---------------------------------------------

            let status = "FINISHED";

            if (apiResult.dsq) {
              status = "DSQ";
            } else if (apiResult.dnf) {
              status = "DNF";
            } else if (apiResult.dns) {
              status = "DNS";
            }


            return {
              ...driver,

              position:
                apiResult.position ?? null,

              result:
                apiResult.position ??
                status,

              status,

              dnf:
                Boolean(apiResult.dnf),

              dns:
                Boolean(apiResult.dns),

              dsq:
                Boolean(apiResult.dsq),

              numberOfLaps:
                apiResult.number_of_laps ?? 0,

              gapToLeader:
                apiResult.gap_to_leader ?? null,

              duration:
                apiResult.duration ?? null,

              sessionDriver:
                apiDriver || null,
            };
          }
        );


        // =================================================
        // SORT RESULTS
        // =================================================

        mergedResults.sort((a, b) => {

          const aPosition =
            typeof a.position === "number"
              ? a.position
              : Infinity;

          const bPosition =
            typeof b.position === "number"
              ? b.position
              : Infinity;


          if (
            aPosition !== bPosition
          ) {
            return (
              aPosition - bPosition
            );
          }


          // ------------------------------------------------
          // STATUS ORDER
          // ------------------------------------------------

          const statusOrder = {
            DNF: 1,
            DSQ: 2,
            DNS: 3,
          };


          const aStatus =
            statusOrder[a.status] || 99;

          const bStatus =
            statusOrder[b.status] || 99;


          return (
            aStatus - bStatus
          );
        });


        setResults(mergedResults);

      } catch (err) {
        if (!cancelled) {
          console.error(
            "Failed to load race results:",
            err
          );

          setResultsError(
            "Unable to load results for this Grand Prix."
          );
        }
      } finally {
        if (!cancelled) {
          setLoadingResults(false);
        }
      }
    }

    loadResults();

    return () => {
      cancelled = true;
    };

  }, [selectedRace]);


  // =====================================================
  // SELECTED RACE
  // =====================================================

  const selectedRaceData = useMemo(() => {

    if (selectedRace === "all") {
      return null;
    }

    return sessions.find(
      (session) =>
        String(session.session_key) ===
        String(selectedRace)
    );

  }, [
    sessions,
    selectedRace,
  ]);


  // =====================================================
  // COMPLETED RACES
  // =====================================================

  const completedRaces = useMemo(() => {

    const now = new Date();

    return sessions.filter((session) => {

      if (!session.date_end) {
        return false;
      }

      return (
        new Date(session.date_end) <= now
      );

    }).length;

  }, [sessions]);


  // =====================================================
  // RACE STATUS
  // =====================================================

  function getRaceStatus(race) {

    const now = new Date();

    if (!race.date_start) {
      return "SCHEDULED";
    }

    if (
      race.date_end &&
      new Date(race.date_end) <= now
    ) {
      return "COMPLETED";
    }

    if (
      new Date(race.date_start) <= now
    ) {
      return "LIVE";
    }

    return "UPCOMING";
  }


  // =====================================================
  // FORMAT DATE
  // =====================================================

  function formatDate(date) {

    if (!date) {
      return "Date unavailable";
    }

    const parsedDate =
      new Date(date);

    if (
      Number.isNaN(
        parsedDate.getTime()
      )
    ) {
      return date;
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
  // HERO / LOADING
  // =====================================================

  if (loadingSessions) {
    return (
      <main className="race-results-page">

        <section className="race-results-loading">

          <LoaderCircle
            size={32}
            className="loading-spinner"
          />

          <h2>
            Loading 2026 Race Calendar
          </h2>

          <p>
            Connecting to OpenF1...
          </p>

        </section>

      </main>
    );
  }


  // =====================================================
  // PAGE
  // =====================================================

  return (
    <main className="race-results-page">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="race-results-hero">

        <div className="race-results-hero-grid"></div>

        <div className="race-results-hero-content">

          <span className="race-results-kicker">
            2026 FORMULA 1 SEASON
          </span>

          <h1>
            Race <span>Results</span>
          </h1>

          <p>
            Explore the finishing positions of all
            22 drivers throughout the 2026 Formula 1
            season using live OpenF1 race data.
          </p>

        </div>


        <div className="race-results-status">

          <div className="status-indicator">

            <span></span>

            SEASON STATUS

          </div>

          <strong>
            {completedRaces}
          </strong>

          <small>
            GRAND PRIX COMPLETED
          </small>

        </div>

      </section>


      {/* =========================================
          ERROR
      ========================================= */}

      {error && (

        <section className="race-results-error">

          <AlertCircle size={22} />

          <div>

            <strong>
              Calendar unavailable
            </strong>

            <p>
              {error}
            </p>

          </div>

        </section>

      )}


      {/* =========================================
          OVERVIEW
      ========================================= */}

      <section className="race-results-overview">

        <div className="results-overview-card">

          <Flag size={22} />

          <div>

            <span>
              SEASON
            </span>

            <strong>
              2026
            </strong>

          </div>

        </div>


        <div className="results-overview-card">

          <Trophy size={22} />

          <div>

            <span>
              GRAND PRIX
            </span>

            <strong>
              {sessions.length}
            </strong>

          </div>

        </div>


        <div className="results-overview-card">

          <CalendarDays size={22} />

          <div>

            <span>
              DRIVERS
            </span>

            <strong>
              {drivers.length}
            </strong>

          </div>

        </div>


        <div className="results-overview-card">

          <Trophy size={22} />

          <div>

            <span>
              VIEW
            </span>

            <strong>
              {selectedRace === "all"
                ? "ALL"
                : "RACE"}
            </strong>

          </div>

        </div>

      </section>


      {/* =========================================
          RACE SELECTOR
      ========================================= */}

      <section className="race-selector-section">

        <div className="race-selector-copy">

          <span className="section-kicker">
            RACE EXPLORER
          </span>

          <h2>
            Select a Grand Prix
          </h2>

          <p>
            Choose a Grand Prix to see the official
            finishing position of every driver.
          </p>

        </div>


        <div className="race-select-wrapper">

          <Flag size={18} />

          <select
            value={selectedRace}
            onChange={(event) =>
              setSelectedRace(
                event.target.value
              )
            }
          >

            <option value="all">
              All Grand Prix
            </option>


            {sessions.map((race) => (

              <option
                key={race.session_key}
                value={race.session_key}
              >
                {race.country_name
                  ? `${race.country_name} — `
                  : ""}
                {race.meeting_name ||
                  race.location ||
                  "Grand Prix"}
              </option>

            ))}

          </select>


          <ChevronDown
            size={18}
            className="select-arrow"
          />

        </div>

      </section>


      {/* =========================================
          ALL GRAND PRIX
      ========================================= */}

      {selectedRace === "all" ? (

        <section className="results-table-section">

          <div className="results-section-heading">

            <div>

              <span className="section-kicker">
                2026 CHAMPIONSHIP
              </span>

              <h2>
                Grand Prix Results
              </h2>

              <p>
                Select a Grand Prix to see all
                22 driver positions.
              </p>

            </div>

          </div>


          {sessions.length === 0 ? (

            <div className="results-placeholder">

              <AlertCircle size={28} />

              <div>

                <h3>
                  No race sessions available
                </h3>

                <p>
                  OpenF1 has not returned any
                  2026 race sessions.
                </p>

              </div>

            </div>

          ) : (

            <div className="all-races-grid">

              {sessions.map((race) => {

                const status =
                  getRaceStatus(race);

                return (

                  <button
                    type="button"
                    className="race-summary-card"
                    key={race.session_key}
                    onClick={() =>
                      setSelectedRace(
                        String(
                          race.session_key
                        )
                      )
                    }
                  >

                    <div className="race-summary-top">

                      <span>
                        {race.country_name ||
                          "F1"}
                      </span>

                      <span>
                        {formatDate(
                          race.date_start
                        )}
                      </span>

                    </div>


                    <h3>
                      {race.meeting_name ||
                        race.location ||
                        "Grand Prix"}
                    </h3>


                    <p>
                      {race.circuit_short_name ||
                        race.location ||
                        "Circuit"}
                    </p>


                    <div className="race-summary-bottom">

                      <span
                        className={
                          status
                            .toLowerCase()
                            .replace(
                              " ",
                              "-"
                            )
                        }
                      >
                        {status}
                      </span>

                      <strong>
                        View Results →
                      </strong>

                    </div>

                  </button>

                );
              })}

            </div>

          )}

        </section>

      ) : (

        /* =========================================
           SELECTED GRAND PRIX
        ========================================= */

        <section className="results-table-section">

          {selectedRaceData && (

            <>

              {/* =====================================
                  SELECTED RACE HEADER
              ===================================== */}

              <div className="selected-race-heading">

                <div>

                  <span className="section-kicker">

                    {selectedRaceData.country_name ||
                      "FORMULA 1"}

                  </span>


                  <h2>
                    {selectedRaceData.meeting_name ||
                      selectedRaceData.location ||
                      "Grand Prix"}
                  </h2>


                  <p>
                    {selectedRaceData.circuit_short_name ||
                      selectedRaceData.location ||
                      "Circuit"}
                  </p>

                </div>


                <div className="selected-race-date">

                  <CalendarDays size={16} />

                  {formatDate(
                    selectedRaceData.date_start
                  )}

                </div>

              </div>


              {/* =====================================
                  LOADING
              ===================================== */}

              {loadingResults ? (

                <div className="race-results-loading">

                  <LoaderCircle
                    size={30}
                    className="loading-spinner"
                  />

                  <h3>
                    Loading race results
                  </h3>

                  <p>
                    Getting the official results
                    from OpenF1...
                  </p>

                </div>

              ) : resultsError ? (

                <div className="results-placeholder">

                  <AlertCircle size={28} />

                  <div>

                    <h3>
                      Results unavailable
                    </h3>

                    <p>
                      {resultsError}
                    </p>

                  </div>

                </div>

              ) : (

                /* =====================================
                   DRIVER RESULTS
                ===================================== */

                <div className="results-table-wrapper">

                  <table className="results-table">

                    <thead>

                      <tr>

                        <th>
                          POS
                        </th>

                        <th>
                          DRIVER
                        </th>

                        <th>
                          NUMBER
                        </th>

                        <th>
                          TEAM
                        </th>

                        <th>
                          LAPS
                        </th>

                        <th>
                          RESULT
                        </th>

                      </tr>

                    </thead>


                    <tbody>

                      {results.map(
                        (driver) => {

                          const isFinished =
                            driver.status ===
                            "FINISHED";

                          const isDNF =
                            driver.status ===
                            "DNF";

                          const isDNS =
                            driver.status ===
                            "DNS";

                          const isDSQ =
                            driver.status ===
                            "DSQ";


                          return (

                            <tr
                              key={
                                driver.number
                              }
                              className={
                                !isFinished
                                  ? "non-classified-row"
                                  : ""
                              }
                            >

                              {/* POSITION */}

                              <td className="result-position">

                                {typeof driver.position ===
                                "number"
                                  ? driver.position
                                  : "—"}

                              </td>


                              {/* DRIVER */}

                              <td>

                                <div className="result-driver">

                                  {driver.image ? (

                                    <img
                                      src={
                                        driver.image
                                      }
                                      alt={
                                        driver.fullName
                                      }
                                    />

                                  ) : (

                                    <div className="result-driver-placeholder">
                                      {driver.shortName}
                                    </div>

                                  )}


                                  <div>

                                    <strong>
                                      {
                                        driver.fullName
                                      }
                                    </strong>

                                    <span>
                                      {
                                        driver.shortName
                                      }
                                    </span>

                                  </div>

                                </div>

                              </td>


                              {/* NUMBER */}

                              <td className="driver-number-cell">

                                #
                                {
                                  driver.number
                                }

                              </td>


                              {/* TEAM */}

                              <td className="result-team">

                                {
                                  driver.team
                                }

                              </td>


                              {/* LAPS */}

                              <td>

                                {
                                  driver.numberOfLaps ??
                                  "—"
                                }

                              </td>


                              {/* RESULT */}

                              <td>

                                <span
                                  className={`
                                    result-status
                                    ${
                                      isDNF
                                        ? "dnf"
                                        : ""
                                    }
                                    ${
                                      isDNS
                                        ? "dns"
                                        : ""
                                    }
                                    ${
                                      isDSQ
                                        ? "dsq"
                                        : ""
                                    }
                                    ${
                                      isFinished
                                        ? "finished"
                                        : ""
                                    }
                                  `}
                                >

                                  {isFinished
                                    ? "FINISHED"
                                    : driver.status}

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


              {/* =====================================
                  BACK TO ALL
              ===================================== */}

              <div className="results-back">

                <button
                  type="button"
                  onClick={() =>
                    setSelectedRace("all")
                  }
                >

                  ← View All Grand Prix

                </button>

              </div>

            </>

          )}

        </section>

      )}

    </main>
  );
}

export default RaceResults;