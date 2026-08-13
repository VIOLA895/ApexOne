import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

function Footer() {
  const lightsRef = useRef([]);

  useEffect(() => {
    const footer = document.querySelector(".apex-footer");
    const lights = lightsRef.current;

    if (!footer || !lights.length) {
      return;
    }

    let hasPlayed = false;

    const playStartingSequence = () => {
      if (hasPlayed) {
        return;
      }

      hasPlayed = true;

      // Reset lights
      lights.forEach((light) => {
        if (light) {
          light.classList.remove(
            "light-on",
            "lights-out"
          );
        }
      });

      // Turn on each light one after another
      lights.forEach((light, index) => {
        setTimeout(() => {
          if (light) {
            light.classList.add("light-on");
          }
        }, index * 450);
      });

      // LIGHTS OUT
      setTimeout(() => {
        lights.forEach((light) => {
          if (light) {
            light.classList.remove("light-on");
            light.classList.add("lights-out");
          }
        });
      }, lights.length * 450 + 700);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            playStartingSequence();
          }
        });
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(footer);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <footer className="apex-footer">

      <div className="apex-footer-inner">

        {/* =========================================
            MAIN FOOTER
        ========================================= */}

        <div className="footer-main">

          {/* =========================================
              BRAND
          ========================================= */}

          <div className="footer-brand">

            <div className="footer-lights">

              {[0, 1, 2, 3, 4].map((index) => (
                <span
                  key={index}
                  ref={(element) => {
                    lightsRef.current[index] = element;
                  }}
                />
              ))}

            </div>

            <Link
              to="/"
              className="footer-logo"
            >
              APEX<span>ONE</span>
            </Link>

            <p>
              Lights out and away we go —
              <br />
              F1, explained for people just
              <br />
              tuning in.
            </p>

          </div>


          {/* =========================================
              LEARN
          ========================================= */}

          <div className="footer-column">

            <span className="footer-column-title">
              S1 — LEARN
            </span>

            <Link to="/Learn">
              Rules basics
            </Link>

            <Link to="/Learn">
              Glossary
            </Link>

            <Link to="/Learn">
              Race weekend
              <br />
              format
            </Link>

          </div>


          {/* =========================================
              SEASON
          ========================================= */}

          <div className="footer-column">

            <span className="footer-column-title">
              S2 — SEASON
            </span>

            <Link to="/schedule">
              Race calendar
            </Link>

            <Link to="/stats">
              Latest results
            </Link>

            <Link to="/stats">
              Championship
              <br />
              standings
            </Link>

          </div>


          {/* =========================================
              GARAGE
          ========================================= */}

          <div className="footer-column">

            <span className="footer-column-title">
              S3 — GARAGE
            </span>

            <Link to="/drivers">
              Drivers
            </Link>

            <Link to="/teams">
              Teams
            </Link>

            <Link to="/stats">
              Car stats
            </Link>

          </div>

        </div>


        {/* =========================================
            DIVIDER
        ========================================= */}

        <div className="footer-divider"></div>


        {/* =========================================
            BOTTOM
        ========================================= */}

        <div className="footer-bottom">

          <p>
            © 2026 ApexOne. Built for new fans.
          </p>


          <div className="footer-socials">

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <span className="social-letter">
                IG
              </span>
            </a>


            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              <span className="social-letter">
                YT
              </span>
            </a>


            <a
              href="mailto:hello@apexone.com"
              aria-label="Email ApexOne"
            >
              <span className="social-letter">
                @
              </span>
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;