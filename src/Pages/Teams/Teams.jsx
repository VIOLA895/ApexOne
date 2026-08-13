import "./Teams.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import teams from "../../data/teams";

import {
  Trophy,
  Users,
  Flag,
  ArrowUpRight,
} from "lucide-react";

import { Link } from "react-router-dom";

function Teams() {
  return (
    <>
      <Navbar />

      <main className="teams-page">

        {/* =========================================
            HERO
        ========================================= */}

        <section className="teams-hero">

          <div className="teams-hero-grid"></div>

          <div className="teams-hero-content">

            <span className="teams-kicker">
              2026 FORMULA 1 SEASON
            </span>

            <h1>
              The Teams
              <br />
              <span>Built to Win</span>
            </h1>

            <p>
              Explore the teams competing throughout the 2026
              Formula 1 season, their drivers and the machines
              fighting for championship glory.
            </p>

          </div>


          <div className="teams-hero-stat">

            <Trophy size={28} />

            <div>
              <span>CHAMPIONSHIP</span>

              <strong>
                CONSTRUCTORS
              </strong>
            </div>

          </div>

        </section>


        {/* =========================================
            SEASON OVERVIEW
        ========================================= */}

        <section className="teams-overview">

          <div className="teams-overview-card">

            <Trophy size={22} />

            <div>
              <span>SEASON</span>
              <strong>2026</strong>
            </div>

          </div>


          <div className="teams-overview-card">

            <Users size={22} />

            <div>
              <span>TEAMS</span>
              <strong>{teams.length}</strong>
            </div>

          </div>


          <div className="teams-overview-card">

            <Flag size={22} />

            <div>
              <span>DRIVERS</span>
              <strong>22</strong>
            </div>

          </div>


          <div className="teams-overview-card">

            <Trophy size={22} />

            <div>
              <span>CHAMPIONSHIP</span>
              <strong>LIVE</strong>
            </div>

          </div>

        </section>


        {/* =========================================
            TEAMS
        ========================================= */}

        <section className="teams-section">

          <div className="teams-section-heading">

            <div>

              <span className="section-kicker">
                CONSTRUCTORS
              </span>

              <h2>
                The 2026 Grid
              </h2>

              <p>
                Meet the teams competing for the Formula 1
                Constructors' Championship.
              </p>

            </div>


            <span className="teams-count">
              {teams.length} TEAMS
            </span>

          </div>


          {/* =========================================
              TEAM GRID
          ========================================= */}

          <div className="teams-grid">

            {teams.map((team, index) => (

              <article
                className="team-card"
                key={team.id}
              >

                {/* CARD HEADER */}

                <div className="team-card-header">

                  <span className="team-position">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="team-country">
                    {team.country}
                  </span>

                </div>


                {/* TEAM IMAGE */}

                <div className="team-image-wrapper">

                  {team.image ? (

                    <img
                      src={team.image}
                      alt={team.name}
                      className="team-image"
                    />

                  ) : (

                    <div className="team-image-placeholder">
                      {team.shortName}
                    </div>

                  )}

                </div>


                {/* TEAM INFO */}

                <div className="team-info">

                  <span className="team-label">
                    CONSTRUCTOR
                  </span>

                  <h3>
                    {team.name}
                  </h3>

                  <p>
                    Team Principal:{" "}
                    <strong>
                      {team.principal}
                    </strong>
                  </p>

                </div>


                {/* DRIVERS */}

                <div className="team-drivers">

                  <span className="team-label">
                    DRIVERS
                  </span>


                  <div className="team-driver-list">

                    {team.drivers.map(
                      (driver, driverIndex) => (

                        <div
                          className="team-driver"
                          key={driver}
                        >

                          <span className="team-driver-number">
                            {String(
                              driverIndex + 1
                            ).padStart(2, "0")}
                          </span>

                          <span>
                            {driver}
                          </span>

                        </div>

                      )
                    )}

                  </div>

                </div>


                {/* STATS */}

                <div className="team-stats">

                  <div>

                    <span>POINTS</span>

                    <strong>
                      {team.points ?? 0}
                    </strong>

                  </div>


                  <div>

                    <span>WINS</span>

                    <strong>
                      {team.wins ?? 0}
                    </strong>

                  </div>



                </div>


                {/* DETAILS */}

                <Link
                  to={`/teams/${team.id}`}
                  className="team-details"
                >

                  <span>
                    View Team
                  </span>

                  <ArrowUpRight size={17} />

                </Link>

              </article>

            ))}

          </div>

        </section>


        {/* =========================================
            BOTTOM MESSAGE
        ========================================= */}

        <section className="teams-bottom">

          <div>

            <span className="section-kicker">
              APEXONE
            </span>

            <h2>
              Eleven teams.
              <br />
              One championship.
            </h2>

          </div>

          <p>
            From legendary constructors to new challengers,
            every team has a role to play in the 2026
            Formula 1 season.
          </p>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default Teams;