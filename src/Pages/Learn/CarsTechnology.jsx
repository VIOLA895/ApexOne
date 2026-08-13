import "./CarsTechnology.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import {
  ArrowLeft,
  ArrowRight,
  Wind,
  Lock,
  CircleCheck,
} from "lucide-react";

import { Link } from "react-router-dom";
import lessons from "../../data/lessons";
import useLessonProgress from "../../hooks/useLessonProgress";

function CarsTechnology() {
  const { completedLessons } = useLessonProgress();

  const technologyLessons = lessons.filter(
    (lesson) =>
      lesson.category?.toLowerCase() === "cars & technology"
  );

  return (
    <>
      <Navbar />

      <main className="cars-tech-page">

        {/* =========================================
            BACK
        ========================================= */}

        <div className="cars-tech-container">

          <Link
            to="/Learn"
            className="cars-tech-back"
          >
            <ArrowLeft size={18} />
            Back to Learn
          </Link>


          {/* =========================================
              HERO
          ========================================= */}

          <section className="cars-tech-hero">

            <div className="cars-tech-hero-number">
              02
            </div>

            <div className="cars-tech-hero-content">

              <span className="cars-tech-tag">
                CARS & TECHNOLOGY
              </span>

              <h1>
                Understand the Machine
              </h1>

              <p>
                Discover the technology, aerodynamics and
                engineering that make Formula 1 cars so fast.
              </p>

            </div>

          </section>


          {/* =========================================
              INTRO
          ========================================= */}

          <section className="cars-tech-intro">

            <div className="cars-tech-intro-icon">
              <Wind size={28} />
            </div>

            <div>
              <span className="section-label">
                THE MACHINE
              </span>

              <h2>
                What makes an F1 car so fast?
              </h2>

              <p>
                Formula 1 cars are the result of thousands of
                engineering decisions. Learn how aerodynamics,
                tyres, power, braking and the car's design work
                together to create performance on track.
              </p>
            </div>

          </section>


          {/* =========================================
              LESSONS
          ========================================= */}

          <section className="cars-tech-lessons">

            <div className="cars-tech-section-heading">

              <div>
                <span className="section-label">
                  CURRICULUM
                </span>

                <h2>
                  Learn the machine
                </h2>
              </div>

              <span className="lesson-count">
                {technologyLessons.length} lessons
              </span>

            </div>


            <div className="cars-tech-grid">

              {technologyLessons.length > 0 ? (

                technologyLessons.map((lesson, index) => {

                  const completed =
                    completedLessons.includes(lesson.slug);

                  return (
                    <Link
                      key={lesson.slug}
                      to={`/Learn/${lesson.slug}`}
                      className="cars-tech-lesson-card"
                    >

                      <div className="cars-tech-card-top">

                        <span className="cars-tech-number">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="cars-tech-status">

                          {completed ? (
                            <>
                              <CircleCheck size={15} />
                              Completed
                            </>
                          ) : (
                            <>
                              <ArrowRight size={15} />
                              Start
                            </>
                          )}

                        </span>

                      </div>


                      <div className="cars-tech-card-icon">
                        <Wind size={25} />
                      </div>


                      <div className="cars-tech-card-content">

                        <span className="cars-tech-card-category">
                          {lesson.difficulty}
                        </span>

                        <h3>
                          {lesson.title}
                        </h3>

                        <p>
                          {lesson.subtitle || lesson.intro}
                        </p>

                      </div>


                      <div className="cars-tech-card-footer">

                        <span>
                          {lesson.readTime || "5 min"}
                        </span>

                        <ArrowRight size={19} />

                      </div>

                    </Link>
                  );
                })

              ) : (

                <div className="cars-tech-empty">

                  <div className="cars-tech-empty-icon">
                    <Lock size={24} />
                  </div>

                  <div>
                    <span>
                      COMING SOON
                    </span>

                    <h3>
                      More lessons are on the way.
                    </h3>

                    <p>
                      This part of the ApexOne curriculum
                      is being developed.
                    </p>
                  </div>

                </div>

              )}

            </div>

          </section>


          {/* =========================================
              NEXT SECTION
          ========================================= */}

          <section className="cars-tech-next">

            <span>
              NEXT IN THE CURRICULUM
            </span>

            <h2>
              From aerodynamics to the power unit.
            </h2>

            <p>
              We will break down the technology behind
              every major part of an F1 car.
            </p>

          </section>

        </div>

      </main>

      <Footer />
    </>
  );
}

export default CarsTechnology;