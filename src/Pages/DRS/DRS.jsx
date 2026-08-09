import "./DRS.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import {
  ArrowRight,
  Gauge,
  Wind,
  Zap,
  CircleDot,
  Flag,
} from "lucide-react";

function DRS() {
  const sections = [
    {
      number: "01",
      title: "What was DRS?",
      text:
        "DRS stood for Drag Reduction System. On eligible sections of the circuit, a driver could open a flap in the rear wing to reduce aerodynamic drag. Less drag meant the car could reach a higher speed on the straight.",
      highlight: "LESS DRAG → MORE STRAIGHT-LINE SPEED",
      icon: Wind,
    },

    {
      number: "02",
      title: "Why did drivers use it?",
      text:
        "The main purpose of DRS was to make overtaking easier. A driver following another car could gain extra speed on a straight and close the gap before the braking zone.",
      highlight: "CLOSE THE GAP → ATTACK INTO THE BRAKING ZONE",
      icon: Gauge,
    },

    {
      number: "03",
      title: "It was not simply a speed button",
      text:
        "DRS did not make the entire car faster everywhere. Its effect came from reducing aerodynamic resistance on specific parts of the circuit. Drivers still needed to position the car correctly and make the actual overtaking move themselves.",
      highlight:
        "DRS HELPED THE MOVE — THE DRIVER STILL HAD TO MAKE IT",
      icon: Flag,
    },
  ];

  return (
    <>
      <Navbar />

      <main className="drs-page">

        {/* ================= HERO ================= */}

        <section className="drs-hero">

          <div className="drs-hero-grid"></div>

          <div className="drs-hero-content">

            <div className="lesson-number">
              LESSON 03
            </div>

            <span className="drs-kicker">
              AERODYNAMICS & OVERTAKING
            </span>

            <h1>
              DRS
              <span>&</span>
              Overtaking
            </h1>

            <p>
              Understand the aerodynamic trick that became one of
              Formula 1's most recognisable overtaking tools — and
              learn what replaced it in the 2026 era.
            </p>

            <div className="drs-hero-stats">

              <div>
                <span>LEVEL</span>
                <strong>BEGINNER</strong>
              </div>

              <div>
                <span>READ TIME</span>
                <strong>7 MIN</strong>
              </div>

              <div>
                <span>TOPIC</span>
                <strong>OVERTAKING</strong>
              </div>

            </div>

          </div>

          {/* AERODYNAMIC VISUAL */}

          <div className="drs-visual">

            <div className="aero-ring ring-one"></div>
            <div className="aero-ring ring-two"></div>
            <div className="aero-ring ring-three"></div>

            <div className="aero-car">

              <div className="car-front"></div>

              <div className="car-body">

                <div className="car-cockpit"></div>

                <div className="car-side"></div>

              </div>

              <div className="car-rear-wing"></div>

            </div>

            <div className="air-line line-one"></div>
            <div className="air-line line-two"></div>
            <div className="air-line line-three"></div>

            <div className="visual-label">
              AERODYNAMIC LOAD
            </div>

          </div>

        </section>


        {/* ================= INTRO ================= */}

        <section className="drs-intro">

          <div className="section-index">
            01
          </div>

          <div className="intro-content">

            <span className="section-kicker">
              THE CONCEPT
            </span>

            <h2>
              Why does reducing drag matter?
            </h2>

            <p>
              An F1 car needs aerodynamic downforce to stay planted
              through corners. But producing downforce also creates
              aerodynamic drag.
            </p>

            <p>
              On a straight, teams want to reduce that resistance so
              the car can accelerate more efficiently and reach a
              higher speed.
            </p>

          </div>

          <div className="drag-equation">

            <div className="equation-line">
              <span>DOWNFORCE</span>
              <strong>+</strong>
              <span>DRAG</span>
            </div>

            <div className="equation-arrow">
              ↓
            </div>

            <div className="equation-result">
              CORNERING PERFORMANCE
            </div>

            <small>
              F1 is always balancing aerodynamic grip against speed.
            </small>

          </div>

        </section>


        {/* ================= HOW IT WORKED ================= */}

        <section className="drs-sections">

          <div className="section-heading">

            <span className="section-kicker">
              BREAK IT DOWN
            </span>

            <h2>
              How DRS worked
            </h2>

          </div>


          <div className="drs-cards">

            {sections.map((section) => {

              const Icon = section.icon;

              return (
                <article
                  className="drs-card"
                  key={section.number}
                >

                  <div className="drs-card-top">

                    <span className="card-number">
                      {section.number}
                    </span>

                    <Icon size={25} />

                  </div>

                  <h3>
                    {section.title}
                  </h3>

                  <p>
                    {section.text}
                  </p>

                  <div className="drs-highlight">
                    {section.highlight}
                  </div>

                </article>
              );
            })}

          </div>

        </section>


        {/* ================= OVERTAKE FLOW ================= */}

        <section className="overtake-section">

          <div className="overtake-heading">

            <span className="section-kicker">
              THE OVERTAKE
            </span>

            <h2>
              From gap to attack
            </h2>

            <p>
              DRS was designed to help a following driver turn a
              small gap into an overtaking opportunity.
            </p>

          </div>


          <div className="overtake-flow">

            <div className="flow-step">

              <span>01</span>

              <CircleDot size={25} />

              <h3>
                Follow
              </h3>

              <p>
                The attacking car closes in behind its rival.
              </p>

            </div>


            <div className="flow-arrow">
              <ArrowRight />
            </div>


            <div className="flow-step active">

              <span>02</span>

              <Wind size={25} />

              <h3>
                Reduce Drag
              </h3>

              <p>
                The rear-wing flap opened in an eligible DRS zone.
              </p>

            </div>


            <div className="flow-arrow">
              <ArrowRight />
            </div>


            <div className="flow-step">

              <span>03</span>

              <Gauge size={25} />

              <h3>
                Close
              </h3>

              <p>
                Extra straight-line speed helped reduce the gap.
              </p>

            </div>


            <div className="flow-arrow">
              <ArrowRight />
            </div>


            <div className="flow-step finish">

              <span>04</span>

              <Flag size={25} />

              <h3>
                Attack
              </h3>

              <p>
                The driver attempts the pass under braking.
              </p>

            </div>

          </div>

        </section>


        {/* ================= 2026 ================= */}

        <section className="modern-section">

          <div className="modern-header">

            <span className="section-kicker">
              THE 2026 ERA
            </span>

            <h2>
              DRS is gone.
              <br />
              Overtaking isn't.
            </h2>

            <p>
              Formula 1's 2026 regulations introduced a different
              approach to aerodynamic efficiency and overtaking.
            </p>

          </div>


          <div className="modern-grid">

            <div className="modern-card active-aero">

              <div className="modern-icon">
                <Wind size={28} />
              </div>

              <span className="modern-number">
                01
              </span>

              <h3>
                Active Aerodynamics
              </h3>

              <p>
                Movable front and rear wing elements allow the car
                to switch between aerodynamic configurations,
                including a lower-drag setup for straights.
              </p>

              <div className="modern-tag">
                LOWER DRAG
              </div>

            </div>


            <div className="modern-card overtake-mode">

              <div className="modern-icon">
                <Zap size={28} />
              </div>

              <span className="modern-number">
                02
              </span>

              <h3>
                Overtake Mode
              </h3>

              <p>
                A driver who meets the required conditions can use
                additional electrical energy to help attack the car
                ahead.
              </p>

              <div className="modern-tag">
                EXTRA ENERGY
              </div>

            </div>

          </div>

        </section>


        {/* ================= COMPARISON ================= */}

        <section className="comparison-section">

          <div className="section-heading">

            <span className="section-kicker">
              QUICK REFERENCE
            </span>

            <h2>
              DRS vs 2026 F1
            </h2>

          </div>


          <div className="comparison-table">

            <div className="comparison-row header">

              <span>CONCEPT</span>
              <span>TRADITIONAL DRS</span>
              <span>2026 F1</span>

            </div>


            <div className="comparison-row">

              <span>Wing system</span>

              <strong>
                Rear-wing flap
              </strong>

              <strong>
                Active front & rear aero
              </strong>

            </div>


            <div className="comparison-row">

              <span>Drag reduction</span>

              <strong>
                Yes
              </strong>

              <strong>
                Yes, through active aero
              </strong>

            </div>


            <div className="comparison-row">

              <span>Overtaking aid</span>

              <strong>
                DRS
              </strong>

              <strong>
                Overtake Mode
              </strong>

            </div>

          </div>

        </section>


        {/* ================= FACT ================= */}

        <section className="drs-fact">

          <div className="fact-line"></div>

          <span>
            F1 FACT
          </span>

          <h2>
            The technology changed.
            <br />
            The fight for position didn't.
          </h2>

          <p>
            Modern Formula 1 continues to combine aerodynamics,
            energy management and driver skill to create overtaking
            opportunities.
          </p>

        </section>


        {/* ================= QUIZ ================= */}

        <section className="drs-quiz">

          <span className="section-kicker">
            KNOWLEDGE CHECK
          </span>

          <h2>
            Quick question.
          </h2>

          <p>
            What replaced traditional DRS in the 2026 Formula 1
            regulations?
          </p>

          <div className="quiz-options">

            <button>
              A. A larger rear wing
            </button>

            <button>
              B. Active aerodynamics and Overtake Mode
            </button>

            <button>
              C. A second engine
            </button>

            <button>
              D. A larger front wing
            </button>

          </div>

        </section>


        {/* ================= NEXT LESSON ================= */}

        <section className="next-lesson">

          <div>

            <span>
              NEXT LESSON
            </span>

            <h2>
              Pit Stops
            </h2>

            <p>
              Discover the seconds that can decide an entire race.
            </p>

          </div>

          <a href="/Learn/pit-stops">

            Continue Learning

            <ArrowRight size={20} />

          </a>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default DRS;