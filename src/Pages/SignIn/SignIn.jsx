import { Link } from "react-router-dom";
import { Flag, ArrowRight } from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./SignIn.css";

function SignIn() {
  return (
    <>
      <Navbar />

      <main className="signin-page">

        {/* ================= LEFT BRAND SECTION ================= */}

        <section className="signin-brand">

          <div className="signin-grid"></div>
          <div className="signin-red-glow"></div>

          <div className="signin-brand-content">

            <div className="signin-kicker">
              <span></span>
              APEXONE / WELCOME BACK
            </div>

            <h1>
              Back on
              <strong> track.</strong>
            </h1>

            <p>
              Sign in to your ApexOne account and
              continue exploring Formula 1 like never before.
            </p>

            <div className="signin-season-card">

              <div className="signin-season-icon">
                <Flag size={21} />
              </div>

              <div>
                <span>2026 SEASON</span>
                <strong>Formula 1</strong>
              </div>

            </div>

            <div className="signin-features">

              <div className="signin-feature">
                <span>01</span>

                <div>
                  <strong>Track the grid</strong>
                  <p>
                    Follow drivers, teams and race statistics.
                  </p>
                </div>
              </div>

              <div className="signin-feature">
                <span>02</span>

                <div>
                  <strong>Learn F1</strong>
                  <p>
                    Understand the sport from the ground up.
                  </p>
                </div>
              </div>

              <div className="signin-feature">
                <span>03</span>

                <div>
                  <strong>Follow every race</strong>
                  <p>
                    Stay connected to every Grand Prix.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </section>


        {/* ================= SIGN IN FORM ================= */}

        <section className="signin-form-section">

          <div className="signin-form-container">

            <div className="signin-form-header">

              <span className="signin-form-kicker">
                ACCOUNT ACCESS
              </span>

              <h2>
                Welcome
                <strong> back.</strong>
              </h2>

              <p>
                Sign in to continue your ApexOne journey.
              </p>

            </div>


            <form className="signin-form">

              <div className="signin-field">

                <label htmlFor="email">
                  Email address
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />

              </div>


              <div className="signin-field">

                <div className="signin-label-row">

                  <label htmlFor="password">
                    Password
                  </label>

                  <Link to="/forgot-password">
                    Forgot password?
                  </Link>

                </div>

                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  required
                />

              </div>


              <button
                type="submit"
                className="signin-submit"
              >
                Sign In

                <ArrowRight size={18} />

              </button>

            </form>


            <div className="signin-divider">
              <span></span>
              <small>OR</small>
              <span></span>
            </div>


            <div className="signin-signup">

              <p>
                Don't have an ApexOne account?
              </p>

              <Link to="/signup">
                Create an account
                <ArrowRight size={16} />
              </Link>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default SignIn;