import "./Drivers.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import RaceResults from "../../components/RaceResults/RaceResults";
import { Trophy, Flag, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import drivers from "../../data/drivers";

function Drivers() {
  // Get the current top 3 drivers from the standings
  const topDrivers = [...drivers]
    .sort((a, b) => a.position - b.position)
    .slice(0, 3);

  return (
    <>
      <Navbar />

      <main className="drivers-page">

        {/* =========================================
            HERO
        ========================================= */}

        <section className="drivers-hero">

          <div className="drivers-hero-content">

            <span className="drivers-kicker">
              2026 FORMULA 1 SEASON
            </span>

            <h1>
              The Drivers
              <br />
              <span>Behind the Wheel</span>
            </h1>

            <p>
              Meet the drivers competing for victory, championship
              points and Formula 1 history throughout the 2026 season.
            </p>

          </div>

          <div className="drivers-hero-stat">

            <Trophy size={28} />

            <div>
              <span>CHAMPIONSHIP</span>
              <strong>DRIVER STANDINGS</strong>
            </div>

          </div>

        </section>


        {/* =========================================
            SEASON OVERVIEW
        ========================================= */}

        <section className="drivers-overview">

          <div className="overview-card">

            <span>SEASON</span>

            <strong>2026</strong>

          </div>


          <div className="overview-card">

            <span>DRIVERS</span>

            <strong>{drivers.length}</strong>

          </div>


          <div className="overview-card">

            <span>RACES</span>

            <strong>24</strong>

          </div>


          <div className="overview-card">

            <span>CHAMPIONSHIP</span>

            <strong>LIVE</strong>

          </div>

        </section>


        {/* =========================================
            CHAMPIONSHIP LEADERS
        ========================================= */}

        <section className="drivers-section">

          <div className="section-heading">

            <div>

              <span className="section-kicker">
                DRIVER STANDINGS
              </span>

              <h2>
                Championship Leaders
              </h2>

              <p>
                The three drivers currently leading the 2026
                Formula 1 World Championship.
              </p>

            </div>


            <Link
              to="/drivers/all"
              className="view-all-drivers"
            >
              View All Drivers

              <ArrowUpRight size={17} />

            </Link>

          </div>


          {/* =========================================
              DRIVER GRID
          ========================================= */}

          <div className="drivers-grid">

            {topDrivers.map((driver, index) => (

              <article
                className={`driver-card driver-card-${index + 1}`}
                key={driver.shortName}
              >

                {/* CARD TOP */}

                <div className="driver-card-top">

                  <span className="driver-position">
                    {String(driver.position).padStart(2, "0")}
                  </span>

                  <span className="driver-number">
                    #{driver.number}
                  </span>

                </div>


                {/* DRIVER IMAGE + INFO */}

                <div className="driver-card-main">

                  <div className="driver-image-wrapper">

                    <div className="driver-image-glow"></div>

                    <img
                      src={driver.image}
                      alt={driver.fullName}
                      className="driver-image"
                    />

                    <span className="driver-number-large">
                      {driver.number}
                    </span>

                  </div>


                  <div className="driver-info">

                    <span className="driver-short-name">
                      {driver.shortName}
                    </span>

                    <h3>

                      {driver.firstName}

                      <br />

                      <strong>
                        {driver.lastName}
                      </strong>

                    </h3>

                    <p className="driver-team">
                      {driver.team}
                    </p>


                    <span className="driver-nationality">

                      <Flag size={14} />

                      {driver.nationality}

                    </span>

                  </div>

                </div>


                {/* DRIVER STATS */}

                <div className="driver-stats">

                  <div className="driver-stat">

                    <span>POINTS</span>

                    <strong>
                      {driver.points ?? 0}
                    </strong>

                  </div>


                  <div className="driver-stat">

                    <span>WINS</span>

                    <strong>
                      {driver.wins ?? 0}
                    </strong>

                  </div>


                  <div className="driver-stat">

                    <span>PODIUMS</span>

                    <strong>
                      {driver.podiums ?? 0}
                    </strong>

                  </div>


                  <div className="driver-stat">

                    <span>POLES</span>

                    <strong>
                      {driver.poles ?? 0}
                    </strong>

                  </div>

                </div>


                {/* VIEW DRIVER */}

                <Link
                  to={`/drivers/${driver.shortName}`}
                  className="driver-details"
                >

                  <span>
                    View Driver
                  </span>

                  <ArrowUpRight size={18} />

                </Link>

              </article>

            ))}

          </div>


          {/* =========================================
              ALL DRIVERS BUTTON
          ========================================= */}

          <div className="all-drivers-action">

            <p>
              Want to explore the entire 2026 grid?
            </p>

            <Link
              to="/drivers/all"
              className="all-drivers-button"
            >
              Explore All 22 Drivers

              <ArrowUpRight size={18} />

            </Link>

          </div>
          {/* =========================================
    FULL DRIVER STANDINGS
========================================= */}

<section className="full-standings">

  <div className="standings-heading">

    <div>
      <span className="section-kicker">
        2026 CHAMPIONSHIP
      </span>

      <h2>
        Full Driver Standings
      </h2>

      <p>
        Follow all 22 drivers as the championship battle
        develops throughout the season.
      </p>
    </div>

    <span className="standings-count">
      {drivers.length} DRIVERS
    </span>

  </div>


  <div className="standings-table-wrapper">

    <table className="standings-table">

      <thead>
        <tr>
          <th>POS</th>
          <th>DRIVER</th>
          <th>TEAM</th>
          <th>POINTS</th>
          <th>WINS</th>
          <th>PODIUMS</th>
          <th>POLES</th>
          <th></th>
        </tr>
      </thead>


      <tbody>

        {drivers
          .slice()
          .sort((a, b) => a.position - b.position)
          .map((driver) => (

            <tr
              key={driver.shortName}
              className={
                driver.position <= 3
                  ? "standings-row top-three"
                  : "standings-row"
              }
            >

              {/* POSITION */}

              <td className="standings-position">

                {String(driver.position).padStart(2, "0")}

              </td>


              {/* DRIVER */}

              <td>

                <div className="standings-driver">

                  <div className="standings-driver-image">

                    <img
                      src={driver.image}
                      alt={driver.fullName}
                    />

                  </div>


                  <div className="standings-driver-info">

                    <strong>
                      {driver.fullName}
                    </strong>

                    <span>
                      #{driver.number} · {driver.nationality}
                    </span>

                  </div>

                </div>

              </td>


              {/* TEAM */}

              <td className="standings-team">

                {driver.team}

              </td>


              {/* POINTS */}

              <td className="standings-points">

                {driver.points ?? 0}

              </td>


              {/* WINS */}

              <td>

                {driver.wins ?? 0}

              </td>


              {/* PODIUMS */}

              <td>

                {driver.podiums ?? 0}

              </td>


              {/* POLES */}

              <td>

                {driver.poles ?? 0}

              </td>


              {/* PROFILE */}

              <td>

                <Link
                  to={`/drivers/${driver.shortName}`}
                  className="standings-view"
                >
                  View
                  <ArrowUpRight size={15} />
                </Link>

              </td>

            </tr>

          ))}

      </tbody>

    </table>

  </div>

</section>

        </section>
       <RaceResults />

      </main>

      <Footer />
    </>
  );
}

export default Drivers;