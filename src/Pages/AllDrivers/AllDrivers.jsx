import "./AllDrivers.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import drivers from "../../data/drivers";
import { Search, ArrowLeft, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

function AllDrivers() {
  const [search, setSearch] = useState("");

  const searchTerm = search.trim().toLowerCase();

  const filteredDrivers = drivers.filter((driver) => {
    if (!searchTerm) {
      return true;
    }

    return (
      driver.fullName.toLowerCase().includes(searchTerm) ||
      driver.team.toLowerCase().includes(searchTerm) ||
      driver.nationality.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <>
      <Navbar />

      <main className="all-drivers-page">

        {/* =========================
            HERO
        ========================= */}

        <section className="all-drivers-hero">

          <div className="all-drivers-hero-content">

            <Link
              to="/drivers"
              className="back-to-drivers"
            >
              <ArrowLeft size={18} />
              Back to Drivers
            </Link>

            <span className="drivers-kicker">
              2026 FIA FORMULA 1 WORLD CHAMPIONSHIP
            </span>

            <h1>
              Meet the
              <br />
              <span>2026 Grid.</span>
            </h1>

            <p>
              Explore every driver competing in the 2026 Formula 1 season.
              Compare championship positions, points, teams and driver
              information.
            </p>

          </div>

          <div className="hero-season-number">
            22
            <span>DRIVERS</span>
          </div>

        </section>


        {/* =========================
            SEARCH / SUMMARY
        ========================= */}

        <section className="drivers-toolbar">

          <div className="drivers-count">

            <Trophy size={20} />

            <div>
              <strong>{filteredDrivers.length}</strong>
              <span> drivers shown</span>
            </div>

          </div>


          <div className="drivers-search">

            <Search size={19} />

            <input
              type="text"
              placeholder="Search driver, team or nationality..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />

          </div>

        </section>


        {/* =========================
            DRIVER GRID
        ========================= */}

        <section className="all-drivers-section">

          <div className="all-drivers-grid">

            {filteredDrivers.map((driver) => (

              <article
                className="all-driver-card"
                key={driver.number}
              >

                {/* POSITION */}

                <div className="driver-card-top">

                  <span className="driver-position">
                    {String(driver.position).padStart(2, "0")}
                  </span>

                  <span className="driver-number">
                    #{driver.number}
                  </span>

                </div>


                {/* IMAGE */}

                <div className="all-driver-image-wrapper">

                  <img
                    src={driver.image}
                    alt={driver.fullName}
                    className="all-driver-image"
                  />

                  <div className="driver-image-overlay"></div>

                </div>


                {/* DRIVER INFORMATION */}

                <div className="all-driver-info">

                  <span className="all-driver-team">
                    {driver.team}
                  </span>

                  <h2>
                    {driver.firstName}
                    <strong>{driver.lastName}</strong>
                  </h2>

                  <div className="driver-nationality">
                    <span>{driver.countryCode}</span>
                    {driver.nationality}
                  </div>


                  {/* STATS */}

                  <div className="driver-card-stats">

                    <div>
                      <span>POINTS</span>
                      <strong>{driver.points}</strong>
                    </div>

                    <div>
                      <span>WINS</span>
                      <strong>{driver.wins ?? 0}</strong>
                    </div>

                    <div>
                      <span>PODIUMS</span>
                      <strong>{driver.podiums ?? 0}</strong>
                    </div>

                  </div>

                </div>

              </article>

            ))}

          </div>


          {/* NO RESULTS */}

          {filteredDrivers.length === 0 && (

            <div className="no-driver-results">

              <Search size={36} />

              <h2>No drivers found</h2>

              <p>
                Try searching for another driver, team or nationality.
              </p>

            </div>

          )}

        </section>

      </main>

      <Footer />
    </>
  );
}

export default AllDrivers;