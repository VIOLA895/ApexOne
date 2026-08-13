import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import DashboardPreview from "../../components/DashboardPreview/DashboardPreview";
import Footer from "../../components/Footer/Footer";

import "./Home.css";

function Home() {
  return (
    <>
      <Navbar />

      <main className="home-page">

        {/* =========================================
            HERO
        ========================================= */}

        <Hero />


        {/* =========================================
            ABOUT APEXONE
        ========================================= */}

        <section className="home-about">

          <div className="home-about-container">

            <div className="home-about-heading">

              <span className="home-section-kicker">
                ABOUT APEXONE
              </span>

              <h2>
                Formula 1,
                <span> made simple.</span>
              </h2>

            </div>


            <div className="home-about-content">

              <p className="home-about-lead">
                Formula 1 can be exciting, fast and
                incredibly technical — but understanding
                it shouldn't be complicated.
              </p>

              <p>
                ApexOne is designed to make Formula 1
                easier to understand for everyone.
                Whether you're completely new to the
                sport or already follow every Grand Prix,
                ApexOne brings together explanations,
                driver information, teams, schedules and
                championship data in one place.
              </p>

              <p>
                Learn what the flags mean, understand
                tyres and pit stops, follow the drivers,
                explore the teams and keep track of how
                the championship is developing throughout
                the season.
              </p>

            </div>

          </div>

        </section>


        {/* =========================================
            DASHBOARD
        ========================================= */}

        <DashboardPreview />


        {/* =========================================
            WHY APEXONE
        ========================================= */}

        <section className="home-features">

          <div className="home-features-container">

            <div className="home-features-heading">

              <span className="home-section-kicker">
                THE APEXONE EXPERIENCE
              </span>

              <h2>
                Everything you need
                <span> to understand F1.</span>
              </h2>

            </div>


            <div className="home-features-grid">

              <div className="home-feature-card">

                <span className="home-feature-number">
                  01
                </span>

                <h3>
                  Learn the Sport
                </h3>

                <p>
                  Understand the rules, terminology,
                  race weekends, tyres, DRS, pit stops
                  and everything else that makes Formula 1
                  unique.
                </p>

              </div>


              <div className="home-feature-card">

                <span className="home-feature-number">
                  02
                </span>

                <h3>
                  Follow the Drivers
                </h3>

                <p>
                  Explore the current grid and discover
                  driver profiles, teams, statistics and
                  championship positions.
                </p>

              </div>


              <div className="home-feature-card">

                <span className="home-feature-number">
                  03
                </span>

                <h3>
                  Track the Championship
                </h3>

                <p>
                  Follow race results, standings and
                  championship progress throughout the
                  Formula 1 season.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =========================================
            LEARNING CTA
        ========================================= */}

        <section className="home-learning-cta">

          <div className="home-learning-content">

            <span className="home-section-kicker">
              NEW TO FORMULA 1?
            </span>

            <h2>
              Start with the
              <span> essentials.</span>
            </h2>

            <p>
              From race weekends to DRS and tyre
              strategies, learn the fundamentals and
              start following the sport with confidence.
            </p>

            <a
              href="/Learn"
              className="home-learning-button"
            >
              Start Learning
            </a>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default Home;