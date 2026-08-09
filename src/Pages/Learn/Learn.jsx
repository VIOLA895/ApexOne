import "./Learn.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import LearningTelemetry from "../../components/LearningTelemetry/LearningTelemetry";
import lessons from "../../data/lessons";
import useLessonProgress from "../../hooks/useLessonProgress";

import {
  Search,
  BookOpen,
  Trophy,
  ArrowRight,
  Clock3,
  CircleCheck,
  Flag,
} from "lucide-react";

import { useState } from "react";
import { Link } from "react-router-dom";

function Learn() {
  const [search, setSearch] = useState("");

  const { completedLessons } = useLessonProgress();

  /* =========================
     SEARCH
  ========================= */

  const searchTerm = search.trim().toLowerCase();

  const filteredLessons = lessons.filter((lesson) => {
    if (!searchTerm) {
      return true;
    }

    return (
      lesson.title?.toLowerCase().includes(searchTerm) ||
      lesson.subtitle?.toLowerCase().includes(searchTerm) ||
      lesson.intro?.toLowerCase().includes(searchTerm)
    );
  });

  /* =========================
     BEGINNER LESSONS
  ========================= */

  const beginnerLessons = filteredLessons.filter(
    (lesson) =>
      lesson.difficulty?.toLowerCase() === "beginner" ||
      lesson.category?.toLowerCase() === "beginner"
  );

  /* =========================
     PROGRESS
  ========================= */

  const totalLessons = lessons.length;

  const completedCount = completedLessons.length;

  const progress =
    totalLessons > 0
      ? Math.min(
          100,
          Math.round((completedCount / totalLessons) * 100)
        )
      : 0;

  return (
    <>
      <Navbar />

      <main className="learn-page">

        {/* =========================================
            HERO + TELEMETRY
        ========================================= */}

        <section className="learn-header-area">

          <div className="learn-hero">

            <div className="hero-glow"></div>

            <span className="hero-tag">
              FORMULA 1 LEARNING HUB
            </span>

            <h1>
              Understand the Sport.
              <br />
              <span>Master the Race.</span>
            </h1>

            <p>
              Formula 1 can look complicated when you're just
              starting out. ApexOne breaks the sport down into
              simple lessons so you can understand what you're
              watching, why teams make certain decisions and how
              races are won.
            </p>

          </div>

          {/* TOP RIGHT TELEMETRY */}

          <aside className="telemetry-top-right">
            <LearningTelemetry />
          </aside>

        </section>


        {/* =========================================
            SEARCH
        ========================================= */}

        <section className="search-section">

          <div className="search-box">

            <Search size={20} />

            <input
              type="text"
              placeholder="Search Formula 1 lessons..."
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              aria-label="Search Formula 1 lessons"
            />

          </div>

        </section>


        {/* =========================================
            PROGRESS
        ========================================= */}

        <section className="progress-card">

          <div className="progress-left">

            <div className="progress-icon">
              <BookOpen size={25} />
            </div>

            <div>

              <span className="section-label">
                YOUR PROGRESS
              </span>

              <h2>
                Build Your F1 Knowledge
              </h2>

              <p>
                Complete lessons and work your way from
                beginner to confident F1 fan.
              </p>

            </div>

          </div>


          <div className="progress-right">

            <div className="progress-top">

              <span>
                {completedCount} of {totalLessons} lessons completed
              </span>

              <strong>
                {progress}%
              </strong>

            </div>

            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
            >

              <div
                className="progress-fill"
                style={{
                  width: `${progress}%`,
                }}
              />

            </div>

          </div>

        </section>


        {/* =========================================
            BEGINNER SECTION
        ========================================= */}

        <section className="lesson-category">

          <div className="category-header">

            <div className="category-heading">

              <span className="category-number">
                01
              </span>

              <div>

                <span className="category-tag">
                  BEGINNER
                </span>

                <h2>
                  Start Your F1 Journey
                </h2>

                <p>
                  Learn the essential concepts you need to
                  understand before watching a Formula 1 race.
                </p>

              </div>

            </div>

            <div className="category-icon-box">
              <Trophy size={25} />
            </div>

          </div>


          {/* =========================================
              LESSON GRID
          ========================================= */}

          {beginnerLessons.length > 0 ? (

            <div className="lesson-grid">

              {beginnerLessons.map((lesson, index) => {

                const isCompleted =
                  completedLessons.includes(lesson.slug);

                return (

                  <Link
                    to={`/Learn/${lesson.slug}`}
                    className="lesson-card"
                    key={lesson.slug}
                  >

                    {/* CARD TOP */}

                    <div className="lesson-card-top">

                      <div className="lesson-number">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div className="lesson-status">

                        {isCompleted ? (
                          <>
                            <CircleCheck size={15} />
                            Completed
                          </>
                        ) : (
                          <>
                            <Flag size={15} />
                            Beginner
                          </>
                        )}

                      </div>

                    </div>


                    {/* CARD CONTENT */}

                    <div className="lesson-card-content">

                      <h3>
                        {lesson.title}
                      </h3>

                      <p>
                        {lesson.subtitle || lesson.intro}
                      </p>

                    </div>


                    {/* CARD FOOTER */}

                    <div className="lesson-card-footer">

                      <div className="lesson-time">

                        <Clock3 size={15} />

                        <span>
                          {lesson.readTime || "5 min"}
                        </span>

                      </div>

                      <div className="lesson-arrow">

                        <ArrowRight size={18} />

                      </div>

                    </div>

                  </Link>

                );
              })}

            </div>

          ) : (

            <div className="no-results">

              <Search size={30} />

              <h3>
                No lessons found
              </h3>

              <p>
                Try searching for another Formula 1 topic.
              </p>

            </div>

          )}

        </section>


        {/* =========================================
            COMING SOON
        ========================================= */}

        <section className="coming-soon">

          <div className="coming-soon-line"></div>

          <div>

            <span>
              MORE KNOWLEDGE COMING SOON
            </span>

            <h2>
              From the basics to race strategy.
            </h2>

            <p>
              ApexOne will continue expanding the learning
              hub with qualifying, DRS, pit stops, flags,
              race strategy, championship points and more.
            </p>

          </div>

          <div className="coming-soon-flag">
            <Flag size={30} />
          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default Learn;