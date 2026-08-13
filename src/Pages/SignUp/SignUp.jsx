import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Eye,
  EyeOff,
  Flag,
  UserPlus,
} from "lucide-react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import "./SignUp.css";

function SignUp() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [agreeToTerms, setAgreeToTerms] =
    useState(false);

  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    setError("");

    // ---------------------------------------------
    // PASSWORD MATCH
    // ---------------------------------------------

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // ---------------------------------------------
    // TERMS
    // ---------------------------------------------

    if (!agreeToTerms) {
      setError(
        "Please agree to the Terms and Conditions."
      );
      return;
    }

    // ---------------------------------------------
    // TEMPORARY ACCOUNT CREATION
    // ---------------------------------------------
    //
    // This is currently frontend-only.
    // We will connect this to real authentication later.
    //

    const account = {
      fullName,
      email,
      password,
    };

    console.log("Account created:", account);

    // Take the user to Sign In after creating account
    navigate("/signin");
  }

  return (
    <>
      <Navbar />

      <main className="signup-page">

        {/* =========================================
            BACKGROUND
        ========================================= */}

        <div className="signup-grid"></div>

        <div className="signup-glow"></div>


        {/* =========================================
            MAIN CONTENT
        ========================================= */}

        <section className="signup-container">

          {/* =======================================
              LEFT SIDE
          ======================================= */}

          <div className="signup-intro">

            <div className="signup-kicker">
              <span></span>
              APEXONE / ACCOUNT
            </div>

            <h1>
              Join the
              <strong> grid.</strong>
            </h1>

            <p>
              Create your ApexOne account and
              start exploring Formula 1 like
              never before.
            </p>


            {/* SEASON CARD */}

            <div className="signup-season">

              <div className="signup-season-icon">
                <Flag size={20} />
              </div>

              <div>
                <span>
                  2026 SEASON
                </span>

                <strong>
                  Formula 1
                </strong>
              </div>

            </div>


            {/* BENEFITS */}

            <div className="signup-benefits">

              <div className="signup-benefit">

                <span className="benefit-number">
                  01
                </span>

                <div>
                  <strong>
                    Track the grid
                  </strong>

                  <p>
                    Follow drivers, teams and
                    race statistics.
                  </p>
                </div>

              </div>


              <div className="signup-benefit">

                <span className="benefit-number">
                  02
                </span>

                <div>
                  <strong>
                    Learn F1
                  </strong>

                  <p>
                    Build your knowledge with
                    beginner-friendly lessons.
                  </p>
                </div>

              </div>


              <div className="signup-benefit">

                <span className="benefit-number">
                  03
                </span>

                <div>
                  <strong>
                    Follow every race
                  </strong>

                  <p>
                    Explore the complete
                    Grand Prix calendar.
                  </p>
                </div>

              </div>

            </div>

          </div>


          {/* =======================================
              SIGN UP CARD
          ======================================= */}

          <div className="signup-card">

            {/* CARD HEADER */}

            <div className="signup-card-header">

              <span>
                CREATE ACCOUNT
              </span>

              <h2>
                Join ApexOne
              </h2>

              <p>
                Create your account to get started.
              </p>

            </div>


            {/* =====================================
                FORM
            ===================================== */}

            <form
              className="signup-form"
              onSubmit={handleSubmit}
            >

              {/* FULL NAME */}

              <div className="signup-field">

                <label htmlFor="fullName">
                  Full name
                </label>

                <input
                  id="fullName"
                  type="text"
                  placeholder="Your full name"
                  value={fullName}
                  onChange={(event) =>
                    setFullName(event.target.value)
                  }
                  autoComplete="name"
                  required
                />

              </div>


              {/* EMAIL */}

              <div className="signup-field">

                <label htmlFor="signupEmail">
                  Email address
                </label>

                <input
                  id="signupEmail"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(event) =>
                    setEmail(event.target.value)
                  }
                  autoComplete="email"
                  required
                />

              </div>


              {/* PASSWORD */}

              <div className="signup-field">

                <label htmlFor="signupPassword">
                  Password
                </label>

                <div className="signup-password-wrapper">

                  <input
                    id="signupPassword"
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="Create a password"
                    value={password}
                    onChange={(event) =>
                      setPassword(event.target.value)
                    }
                    autoComplete="new-password"
                    required
                    minLength={6}
                  />

                  <button
                    type="button"
                    className="signup-password-toggle"
                    onClick={() =>
                      setShowPassword(
                        (current) => !current
                      )
                    }
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>

                </div>

                <small>
                  Use at least 6 characters.
                </small>

              </div>


              {/* CONFIRM PASSWORD */}

              <div className="signup-field">

                <label htmlFor="confirmPassword">
                  Confirm password
                </label>

                <div className="signup-password-wrapper">

                  <input
                    id="confirmPassword"
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(event) =>
                      setConfirmPassword(
                        event.target.value
                      )
                    }
                    autoComplete="new-password"
                    required
                  />

                  <button
                    type="button"
                    className="signup-password-toggle"
                    onClick={() =>
                      setShowConfirmPassword(
                        (current) => !current
                      )
                    }
                    aria-label={
                      showConfirmPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>

                </div>

              </div>


              {/* TERMS */}

              <label className="signup-terms">

                <input
                  type="checkbox"
                  checked={agreeToTerms}
                  onChange={(event) =>
                    setAgreeToTerms(
                      event.target.checked
                    )
                  }
                />

                <span>
                  I agree to the{" "}
                  <button
                    type="button"
                    onClick={() =>
                      console.log(
                        "Terms clicked"
                      )
                    }
                  >
                    Terms and Conditions
                  </button>
                  {" "}and{" "}
                  <button
                    type="button"
                    onClick={() =>
                      console.log(
                        "Privacy clicked"
                      )
                    }
                  >
                    Privacy Policy
                  </button>
                  .
                </span>

              </label>


              {/* ERROR */}

              {error && (

                <div className="signup-error">
                  {error}
                </div>

              )}


              {/* SUBMIT */}

              <button
                type="submit"
                className="signup-submit"
              >

                <UserPlus size={17} />

                <span>
                  Create account
                </span>

                <ArrowRight size={17} />

              </button>

            </form>


            {/* SIGN IN */}

            <div className="signup-login">

              <span>
                Already have an account?
              </span>

              <Link to="/signin">
                Sign in
              </Link>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default SignUp;