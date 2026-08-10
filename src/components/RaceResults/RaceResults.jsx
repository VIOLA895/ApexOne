import { useState } from "react";
import {
  Flag,
  ChevronDown,
  CalendarDays,
  Trophy,
} from "lucide-react";

import "./RaceResults.css";

import raceResults from "../../data/raceResults";
import drivers from "../../data/drivers";

function RaceResults() {
  const [selectedRace, setSelectedRace] = useState("all");

  // Convert the raceResults object into an array
  const races = Object.entries(raceResults).map(
    ([round, race]) => ({
      round: Number(round),
      ...race,
    })
  );

  // Get selected race
  const selectedRaceData =
    selectedRace === "all"
      ? null
      : races.find(
          (race) =>
            String(race.round) === selectedRace
        );

  /*
   * Convert the result object:
   *
   * {
   *   63: 1,
   *   12: 2,
   *   16: 3
   * }
   *
   * into an array containing driver information.
   */
  const getDriverResults = (race) => {
    if (!race) return [];

    return drivers
      .map((driver) => {

        const result =
          race.results[driver.number];

        return {
          ...driver,
          result:
            result !== undefined
              ? result
              : "DNS",
        };
      })
      .sort((a, b) => {

        const aResult = a.result;
        const bResult = b.result;

        // Numeric finishing positions first
        if (
          typeof aResult === "number" &&
          typeof bResult === "number"
        ) {
          return aResult - bResult;
        }

        // Numeric result before status
        if (
          typeof aResult === "number"
        ) {
          return -1;
        }

        if (
          typeof bResult === "number"
        ) {
          return 1;
        }

        // Put DNF/NC/DNS after classified drivers
        const statusOrder = {
          DNF: 1,
          NC: 2,
          DNS: 3,
        };

        return (
          (statusOrder[aResult] || 99) -
          (statusOrder[bResult] || 99)
        );
      });
  };

  /*
   * Count completed races.
   */
  const completedRaces = races.length;

  return (
    <section className="race-results-page">

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
            Explore the finishing positions of all 22
            drivers throughout every Grand Prix of the
            2026 Formula 1 season.
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
              {completedRaces}
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
            Choose a Grand Prix to see the finishing
            position of every driver during that race.
          </p>

        </div>


        <div className="race-select-wrapper">

          <Flag size={18} />

          <select
            value={selectedRace}
            onChange={(event) =>
              setSelectedRace(event.target.value)
            }
          >

            <option value="all">
              All Grand Prix
            </option>


            {races.map((race) => (

              <option
                key={race.round}
                value={race.round}
              >
                Round {race.round} — {race.name}
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
                Select a Grand Prix above to see all
                22 driver positions.
              </p>

            </div>

          </div>


          <div className="all-races-grid">

            {races.map((race) => (

              <button
                type="button"
                className="race-summary-card"
                key={race.round}
                onClick={() =>
                  setSelectedRace(
                    String(race.round)
                  )
                }
              >

                <div className="race-summary-top">

                  <span>
                    ROUND {race.round}
                  </span>

                  <span>
                    {race.country}
                  </span>

                </div>


                <h3>
                  {race.name}
                </h3>


                <p>
                  {race.circuit}
                </p>


                <div className="race-summary-bottom">

                  <span>
                    COMPLETED
                  </span>

                  <strong>
                    View Results →
                  </strong>

                </div>

              </button>

            ))}

          </div>

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

                    ROUND {selectedRaceData.round}

                  </span>


                  <h2>
                    {selectedRaceData.name}
                  </h2>


                  <p>
                    {selectedRaceData.circuit}
                  </p>

                </div>


                <div className="selected-race-date">

                  <CalendarDays size={16} />

                  {selectedRaceData.date}

                </div>

              </div>


              {/* =====================================
                  DRIVER RESULTS
              ===================================== */}

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
                        RESULT
                      </th>

                    </tr>

                  </thead>


                  <tbody>

                    {getDriverResults(
                      selectedRaceData
                    ).map((driver) => {

                      const result =
                        driver.result;

                      const isNumber =
                        typeof result === "number";

                      const isDNF =
                        result === "DNF";

                      const isDNS =
                        result === "DNS";

                      const isNC =
                        result === "NC";


                      return (

                        <tr
                          key={driver.number}
                          className={
                            isNumber
                              ? ""
                              : "non-classified-row"
                          }
                        >

                          {/* POSITION */}

                          <td className="result-position">

                            {isNumber
                              ? result
                              : "—"}

                          </td>


                          {/* DRIVER */}

                          <td>

                            <div className="result-driver">

                              <img
                                src={driver.image}
                                alt={driver.fullName}
                              />


                              <div>

                                <strong>
                                  {driver.fullName}
                                </strong>

                                <span>
                                  {driver.shortName}
                                </span>

                              </div>

                            </div>

                          </td>


                          {/* NUMBER */}

                          <td className="driver-number-cell">

                            #{driver.number}

                          </td>


                          {/* TEAM */}

                          <td className="result-team">

                            {driver.team}

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
                                  isNC
                                    ? "nc"
                                    : ""
                                }
                                ${
                                  isNumber
                                    ? "finished"
                                    : ""
                                }
                              `}
                            >

                              {isNumber
                                ? "FINISHED"
                                : result}

                            </span>

                          </td>

                        </tr>

                      );

                    })}

                  </tbody>

                </table>

              </div>


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

    </section>
  );
}

export default RaceResults;