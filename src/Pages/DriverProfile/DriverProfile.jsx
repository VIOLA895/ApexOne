import "./DriverProfile.css";

import { Link, useParams, Navigate } from "react-router-dom";

import {
  ArrowLeft,
  ArrowUpRight,
  Flag,
  Trophy,
  Zap,
  Medal,
  CircleDot,
  Gauge,
} from "lucide-react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import drivers from "../../data/drivers";
import driverResults from "../../data/driverResults";

function DriverProfile() {
  const { shortName } = useParams();

  const driver = drivers.find(
    (item) =>
      item.shortName.toLowerCase() === shortName?.toLowerCase()
  );

  if (!driver) {
    return <Navigate to="/drivers" replace />;
  }

  const results =
    driverResults[driver.shortName.toLowerCase()] || [];

  return (
    <>
      <Navbar />

      <main className="driver-profile-page">

        {/* =========================================
            BACK BUTTON
        ========================================= */}

        <div className="driver-profile-container">

          <Link
            to="/drivers"
            className="driver-back-link"
          >
            <ArrowLeft size={18} />
            Back to Drivers
          </Link>

        </div>


        {/* =========================================
            DRIVER HERO
        ========================================= */}

        <section className="driver-profile-hero">

          <div className="driver-profile-container">

            <div className="driver-profile-hero-grid">

              {/* DRIVER INFORMATION */}

              <div className="driver-profile-info">

                <span className="driver-profile-kicker">
                  2026 DRIVER PROFILE
                </span>

                <div className="driver-profile-position">

                  <span>
                    POSITION
                  </span>

                  <strong>
                    {String(driver.position).padStart(2, "0")}
                  </strong>

                </div>

                <h1>
                  {driver.firstName}
                  <span>
                    {driver.lastName}
                  </span>
                </h1>

                <div className="driver-profile-team">

                  <span className="team-indicator"></span>

                  {driver.team}

                </div>

                <div className="driver-profile-nationality">

                  <Flag size={17} />

                  <span>
                    {driver.nationality}
                  </span>

                  <span className="country-code">
                    {driver.countryCode}
                  </span>

                </div>

                <div className="driver-profile-number">

                  <span>
                    CAR NUMBER
                  </span>

                  <strong>
                    #{driver.number}
                  </strong>

                </div>

              </div>


              {/* DRIVER IMAGE */}

              <div className="driver-profile-image-wrapper">

                <div className="driver-image-glow"></div>

                <div className="driver-number-background">
                  {driver.number}
                </div>

                <img
                  src={driver.image}
                  alt={driver.fullName}
                  className="driver-profile-image"
                />

              </div>

            </div>

          </div>

        </section>


        {/* =========================================
            CHAMPIONSHIP HIGHLIGHT
        ========================================= */}

        <section className="driver-profile-container">

          <div className="championship-highlight">

            <div className="championship-icon">
              <Trophy size={28} />
            </div>

            <div className="championship-copy">

              <span>
                2026 CHAMPIONSHIP
              </span>

              <strong>
                {driver.points}
                <small> POINTS</small>
              </strong>

            </div>

            <div className="championship-position">

              <span>
                CURRENT POSITION
              </span>

              <strong>
                P{driver.position}
              </strong>

            </div>

          </div>

        </section>


        {/* =========================================
            PERFORMANCE STATISTICS
        ========================================= */}

        <section className="driver-profile-container">

          <div className="profile-section-heading">

            <span>
              SEASON STATISTICS
            </span>

            <h2>
              Performance at a Glance
            </h2>

            <p>
              A snapshot of {driver.firstName}'s
              performance throughout the 2026 Formula 1 season.
            </p>

          </div>


          <div className="driver-stat-grid">

            {/* WINS */}

            <div className="driver-stat-card">

              <div className="stat-card-icon">
                <Trophy size={21} />
              </div>

              <span>
                WINS
              </span>

              <strong>
                {driver.wins ?? 0}
              </strong>

              <p>
                Race victories
              </p>

            </div>


            {/* PODIUMS */}

            <div className="driver-stat-card">

              <div className="stat-card-icon">
                <Medal size={21} />
              </div>

              <span>
                PODIUMS
              </span>

              <strong>
                {driver.podiums ?? 0}
              </strong>

              <p>
                Top-three finishes
              </p>

            </div>


            {/* POLES */}

            <div className="driver-stat-card">

              <div className="stat-card-icon">
                <Zap size={21} />
              </div>

              <span>
                POLES
              </span>

              <strong>
                {driver.poles ?? 0}
              </strong>

              <p>
                Pole positions
              </p>

            </div>


            {/* POINTS */}

            <div className="driver-stat-card">

              <div className="stat-card-icon">
                <Gauge size={21} />
              </div>

              <span>
                POINTS
              </span>

              <strong>
                {driver.points}
              </strong>

              <p>
                Championship points
              </p>

            </div>

          </div>

        </section>


        {/* =========================================
            DRIVER DETAILS
        ========================================= */}

        <section className="driver-profile-container">

          <div className="driver-details-section">

            <div className="profile-section-heading">

              <span>
                DRIVER DETAILS
              </span>

              <h2>
                Inside the Season
              </h2>

            </div>


            <div className="driver-details-grid">

              <div className="detail-row">

                <span>
                  Driver
                </span>

                <strong>
                  {driver.fullName}
                </strong>

              </div>


              <div className="detail-row">

                <span>
                  Team
                </span>

                <strong>
                  {driver.team}
                </strong>

              </div>


              <div className="detail-row">

                <span>
                  Nationality
                </span>

                <strong>
                  {driver.nationality}
                </strong>

              </div>


              <div className="detail-row">

                <span>
                  Driver Number
                </span>

                <strong>
                  #{driver.number}
                </strong>

              </div>


              <div className="detail-row">

                <span>
                  Championship Position
                </span>

                <strong>
                  P{driver.position}
                </strong>

              </div>


              <div className="detail-row">

                <span>
                  Championship Points
                </span>

                <strong>
                  {driver.points}
                </strong>

              </div>

            </div>

          </div>

        </section>


        {/* =========================================
            RACE PERFORMANCE
        ========================================= */}

        <section className="driver-profile-container">

          <div className="profile-section-heading">

            <span>
              RACE PERFORMANCE
            </span>

            <h2>
              2026 Race Results
            </h2>

            <p>
              Follow {driver.firstName}'s performance
              across the Formula 1 season.
            </p>

          </div>


          {results.length > 0 ? (

            <div className="race-results">

              {/* TABLE HEADER */}

              <div className="race-results-header">

                <span>
                  GRAND PRIX
                </span>

                <span>
                  QUALIFYING
                </span>

                <span>
                  FINISH
                </span>

                <span>
                  POINTS
                </span>

              </div>


              {/* RESULTS */}

              {results.map((result, index) => (

                <div
                  className="race-result-row"
                  key={`${result.shortRace}-${index}`}
                >

                  <div className="race-name">

                    <span className="race-round">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <strong>
                      {result.shortRace}
                    </strong>

                  </div>


                  <div className="race-position">

                    <span>
                      P
                    </span>

                    {result.qualifying}

                  </div>


                  <div
                    className={`race-position ${
                      result.finish <= 3
                        ? "podium-finish"
                        : ""
                    }`}
                  >

                    <span>
                      P
                    </span>

                    {result.finish}

                  </div>


                  <div className="race-points">

                    <strong>
                      {result.points}
                    </strong>

                    <span>
                      PTS
                    </span>

                  </div>

                </div>

              ))}

            </div>

          ) : (

            <div className="results-placeholder">

              <div className="results-placeholder-icon">

                <CircleDot size={26} />

              </div>

              <div>

                <h3>
                  Race results coming soon
                </h3>

                <p>
                  Race-by-race results will appear here
                  once data is available for this driver.
                </p>

              </div>

            </div>

          )}

        </section>


        {/* =========================================
            BOTTOM ACTION
        ========================================= */}

        <section className="driver-profile-container">

          <div className="driver-profile-action">

            <div>

              <span>
                EXPLORE THE GRID
              </span>

              <h2>
                Discover the other drivers
              </h2>

            </div>

            <Link
              to="/drivers/all"
              className="view-all-drivers"
            >
              View All Drivers
              <ArrowUpRight size={18} />
            </Link>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default DriverProfile;