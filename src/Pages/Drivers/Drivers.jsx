import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import "./Drivers.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import drivers from "../../data/drivers";


// =====================================================
// TEAM COLORS
// =====================================================

const teamColors = {
  Mercedes: {
    background: "linear-gradient(135deg, #00a19c 0%, #006f6b 100%)",
    accent: "#00f0e8",
  },

  Ferrari: {
    background: "linear-gradient(135deg, #d00000 0%, #760000 100%)",
    accent: "#ff1e1e",
  },

  McLaren: {
    background: "linear-gradient(135deg, #ff8700 0%, #b94d00 100%)",
    accent: "#ff9d3d",
  },

  "Red Bull Racing": {
    background: "linear-gradient(135deg, #162f70 0%, #07132f 100%)",
    accent: "#3674ff",
  },

  "Aston Martin": {
    background: "linear-gradient(135deg, #006f62 0%, #003c35 100%)",
    accent: "#20d6bd",
  },

  Alpine: {
    background: "linear-gradient(135deg, #168cff 0%, #164c9a 100%)",
    accent: "#53aaff",
  },

  Williams: {
    background: "linear-gradient(135deg, #005aff 0%, #06265e 100%)",
    accent: "#3c83ff",
  },

  "Racing Bulls": {
    background: "linear-gradient(135deg, #273b8f 0%, #10183d 100%)",
    accent: "#4968ff",
  },

  Haas: {
    background: "linear-gradient(135deg, #777777 0%, #252525 100%)",
    accent: "#eeeeee",
  },

  Audi: {
    background: "linear-gradient(135deg, #6d6d6d 0%, #222222 100%)",
    accent: "#ffffff",
  },

  Cadillac: {
    background: "linear-gradient(135deg, #222222 0%, #050505 100%)",
    accent: "#d7d7d7",
  },
};


// =====================================================
// COUNTRY FLAG
// =====================================================

function getFlagUrl(countryCode) {
  if (!countryCode) return null;

  return `https://flagcdn.com/w40/${countryCode.toLowerCase()}.png`;
}


// =====================================================
// DRIVER CARD
// =====================================================

function DriverCard({ driver, index }) {

  const colors =
    teamColors[driver.team] || {
      background:
        "linear-gradient(135deg, #333333 0%, #111111 100%)",
      accent: "#ffffff",
    };


  return (
    <Link
      to={`/drivers/${driver.shortName}`}
      className="driver-card"
      style={{
        "--team-background": colors.background,
        "--team-accent": colors.accent,
      }}
    >

      {/* =================================================
          CARD BACKGROUND
      ================================================= */}

      <div className="driver-card-pattern"></div>


      {/* =================================================
          POSITION
      ================================================= */}

      <div className="driver-card-position">

        <span>
          {String(index + 1).padStart(2, "0")}
        </span>

      </div>


      {/* =================================================
          DRIVER INFORMATION
      ================================================= */}

      <div className="driver-card-content">

        <div className="driver-card-heading">

          <div>

            <span className="driver-card-first-name">
              {driver.firstName}
            </span>

            <h2>
              {driver.lastName}
            </h2>

          </div>


          <ArrowUpRight
            size={22}
            className="driver-card-arrow"
          />

        </div>


        {/* TEAM */}

        <div className="driver-card-team">

          <span className="team-dot"></span>

          {driver.team}

        </div>


        {/* NUMBER */}

        <div className="driver-card-number">

          {driver.number}

        </div>


        {/* FLAG */}

        <div className="driver-card-country">

          {getFlagUrl(driver.countryCode) ? (

            <img
              src={getFlagUrl(driver.countryCode)}
              alt={driver.nationality}
            />

          ) : (

            <span className="country-code">
              {driver.countryCode}
            </span>

          )}

          <span>
            {driver.countryCode}
          </span>

        </div>

      </div>


      {/* =================================================
          DRIVER IMAGE
      ================================================= */}

      <div className="driver-card-image-wrapper">

        <div className="driver-card-image-glow"></div>

        {driver.image ? (

          <img
            src={driver.image}
            alt={driver.fullName}
            className="driver-card-image"
          />

        ) : (

          <div className="driver-image-placeholder">
            {driver.shortName}
          </div>

        )}

      </div>


      {/* =================================================
          BOTTOM
      ================================================= */}

      <div className="driver-card-bottom">

        <span>
          VIEW DRIVER
        </span>

        <ArrowUpRight size={17} />

      </div>

    </Link>
  );
}


// =====================================================
// DRIVERS PAGE
// =====================================================

function Drivers() {

  /*
    Sort drivers by championship position.

    If position is missing, keep the driver at
    the bottom.
  */

  const sortedDrivers = [...drivers].sort(
    (a, b) => {

      const positionA =
        Number(a.position) || 999;

      const positionB =
        Number(b.position) || 999;

      return positionA - positionB;
    }
  );


  return (
    <>

      <Navbar />


      <main className="drivers-page">

        {/* =================================================
            HERO
        ================================================= */}

        <section className="drivers-hero">

          <div className="drivers-hero-grid"></div>

          <div className="drivers-hero-content">

            <span className="drivers-kicker">
              2026 FORMULA 1 SEASON
            </span>

            <h1>
              Meet the
              <br />
              <span>Drivers</span>
            </h1>

            <p>
              Meet the 22 drivers competing across
              the 2026 Formula 1 season.
            </p>

          </div>


          <div className="drivers-hero-meta">

            <span>
              22
            </span>

            <small>
              DRIVERS
            </small>

          </div>

        </section>


        {/* =================================================
            GRID HEADER
        ================================================= */}

        <section className="drivers-section">

          <div className="drivers-section-heading">

            <div>

              <span className="section-kicker">
                THE GRID
              </span>

              <h2>
                2026 Drivers
              </h2>

              <p>
                Explore every driver competing in
                the 2026 Formula 1 championship.
              </p>

            </div>


            <div className="drivers-count">

              <strong>
                {sortedDrivers.length}
              </strong>

              <span>
                DRIVERS
              </span>

            </div>

          </div>


          {/* =================================================
              DRIVER GRID
          ================================================= */}

          <div className="drivers-grid">

            {sortedDrivers.map(
              (driver, index) => (

                <DriverCard
                  key={driver.number}
                  driver={driver}
                  index={index}
                />

              )
            )}

          </div>

        </section>


        {/* =================================================
            BOTTOM
        ================================================= */}

        <section className="drivers-bottom">

          <div>

            <span className="section-kicker">
              APEXONE
            </span>

            <h2>
              Twenty-two drivers.
              <br />
              One championship.
            </h2>

          </div>


          <p>
            Explore each driver's profile to discover
            their team, statistics and individual
            2026 season performance.
          </p>

        </section>

      </main>


      <Footer />

    </>
  );
}

export default Drivers;