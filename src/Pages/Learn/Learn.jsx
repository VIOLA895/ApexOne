import { useState } from "react";
import { Link } from "react-router-dom";

import {
  Search,
  BookOpen,
  ArrowRight,
  Clock3,
  CircleCheck,
  Lock,
  ChevronRight,
} from "lucide-react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import LearningTelemetry from "../../components/LearningTelemetry/LearningTelemetry";

import lessons from "../../data/lessons";
import useLessonProgress from "../../hooks/useLessonProgress";

import "./Learn.css";

function Learn() {
  const [search, setSearch] = useState("");

  const { completedLessons } = useLessonProgress();

  // =====================================================
  // SEARCH
  // =====================================================

  const searchTerm = search.trim().toLowerCase();

  const filteredLessons = lessons.filter((lesson) => {
    if (!searchTerm) return true;

    return (
      lesson.title?.toLowerCase().includes(searchTerm) ||
      lesson.subtitle?.toLowerCase().includes(searchTerm) ||
      lesson.intro?.toLowerCase().includes(searchTerm)
    );
  });

  // =====================================================
  // CURRICULUM CATEGORIES
  // =====================================================

  const categories = [
    {
      id: "beginner",
      number: "01",
      label: "BEGINNER",
      title: "Start Your F1 Journey",
      description:
        "Learn the essential concepts you need to understand before watching a Formula 1 race.",
    },

    {
      id: "cars",
      number: "02",
      label: "CARS & TECHNOLOGY",
      title: "Understand the Machine",
      description:
        "Discover the technology, aerodynamics and engineering that make Formula 1 cars so fast.",
    },

    {
      id: "race-strategy",
      number: "03",
      label: "RACE STRATEGY",
      title: "Understand How Races Are Won",
      description:
        "Explore overtaking, defending, weather decisions, safety cars and strategic thinking.",
    },

    {
      id: "rules",
      number: "04",
      label: "RULES & RACE CONTROL",
      title: "Understand What Is Allowed",
      description:
        "Learn the flags, penalties, track limits and rules that control a Grand Prix.",
    },

        {
      id: "championship",
      number: "05",
      label: "CHAMPIONSHIP & F1 BEYOND THE RACE",
      title: "Understand the Season",
      description:
        "Learn how drivers and constructors collect points and compete for the championship.",
    },

    {
      id: "F1 Glossary",
      number: "06",
      label: "F1 GLOSSARY",
      title: "Understand the Language",
      description:
        "Learn the essential terms and phrases used in Formula 1 commentary and discussion.",
    },


  ];

  // =====================================================
  // MAP LESSON CATEGORIES
  // =====================================================

  function getCategoryLessons(category) {
    return filteredLessons.filter((lesson) => {
      const lessonCategory =
        lesson.category?.toLowerCase() || "";

      if (category.id === "beginner") {
        return (
          lessonCategory === "beginner" ||
          lessonCategory === "basics"
        );
      }

      if (category.id === "cars") {
        return (
          lessonCategory.includes("cars") ||
          lessonCategory.includes("technology")
        );
      }

      if (category.id === "strategy") {
        return (
          lessonCategory.includes("tyre") ||
          lessonCategory.includes("pit")
        );
      }

      if (category.id === "race-strategy") {
        return lessonCategory.includes("strategy");
      }

      if (category.id === "rules") {
        return (
          lessonCategory.includes("rules") ||
          lessonCategory.includes("race control")
        );
      }

      if (category.id === "F1 Glossary") {
        return (
          lessonCategory.includes("glossary")
        );
      }

      if (category.id === "championship") {
        return lessonCategory.includes("championship");
      }

      return false;
    });
  }

  // =====================================================
  // PROGRESS
  // =====================================================

  const totalLessons = lessons.length;

  const completedCount = completedLessons.length;

  const progress =
    totalLessons > 0
      ? Math.min(
          100,
          Math.round(
            (completedCount / totalLessons) * 100
          )
        )
      : 0;

  // =====================================================
  // RENDER
  // =====================================================

  return (
    <>
      <Navbar />

      <main className="learn-page">

        {/* =================================================
            HERO
        ================================================= */}

        <section className="learn-hero">

          <div className="learn-hero-glow"></div>

          <div className="learn-container learn-hero-grid">

            <div className="learn-hero-content">

              <span className="learn-hero-kicker">
                FORMULA 1 LEARNING HUB
              </span>

              <h1>
                Understand the Sport.
                <span> Master the Race.</span>
              </h1>

              <p>
                Formula 1 can look complicated when
                you're just starting out. ApexOne breaks
                the sport down into simple lessons so you
                can understand what you're watching,
                why teams make certain decisions and how
                races are won.
              </p>

            </div>

            <div className="learn-telemetry">
              <LearningTelemetry />
            </div>

          </div>

        </section>


        {/* =================================================
            SEARCH
        ================================================= */}

        <section className="learn-container learn-search-section">

          <div className="learn-search">

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


        {/* =================================================
            PROGRESS
        ================================================= */}

        <section className="learn-container">

          <div className="learn-progress">

            <div className="learn-progress-info">

              <div className="learn-progress-icon">
                <BookOpen size={24} />
              </div>

              <div>

                <span>
                  YOUR PROGRESS
                </span>

                <h2>
                  Build Your F1 Knowledge
                </h2>

                <p>
                  Complete lessons and work your way
                  from beginner to confident F1 fan.
                </p>

              </div>

            </div>

            <div className="learn-progress-stat">

              <div className="learn-progress-top">

                <span>
                  {completedCount} of {totalLessons} lessons
                  completed
                </span>

                <strong>
                  {progress}%
                </strong>

              </div>

              <div
                className="learn-progress-bar"
                role="progressbar"
                aria-valuenow={progress}
                aria-valuemin="0"
                aria-valuemax="100"
              >

                <div
                  className="learn-progress-fill"
                  style={{
                    width: `${progress}%`,
                  }}
                />

              </div>

            </div>

          </div>

        </section>


        {/* =================================================
            CURRICULUM
        ================================================= */}

        <section className="learn-container curriculum">

          <div className="curriculum-heading">

            <span>
              THE APEXONE CURRICULUM
            </span>

            <h2>
              Learn Formula 1.
              <br />
              <em>One concept at a time.</em>
            </h2>

            <p>
              Follow the learning paths below or jump
              directly into a topic that interests you.
            </p>

          </div>


          {/* =================================================
              CATEGORY SECTIONS
          ================================================= */}

          <div className="curriculum-list">

            {categories.map((category) => {

              const categoryLessons =
                getCategoryLessons(category);

              return (
                <section
                  className={`curriculum-section ${
                    categoryLessons.length === 0
                      ? "curriculum-empty"
                      : ""
                  }`}
                  key={category.id}
                >

                  {/* CATEGORY HEADER */}

                  <div className="curriculum-header">

                    <div className="curriculum-title">

                      <span className="curriculum-number">
                        {category.number}
                      </span>

                      <div>

                        <span className="curriculum-label">
                          {category.label}
                        </span>

                        <h2>
                          {category.title}
                        </h2>

                        <p>
                          {category.description}
                        </p>

                      </div>

                    </div>

                    <ChevronRight
                      size={24}
                      className="curriculum-chevron"
                    />

                  </div>


                  {/* LESSONS */}

                  {categoryLessons.length > 0 ? (

                    <div className="curriculum-grid">

                      {categoryLessons.map(
                        (lesson, index) => {

                          const isCompleted =
                            completedLessons.includes(
                              lesson.slug
                            );

                          return (
                            <Link
                              to={`/Learn/${lesson.slug}`}
                              className={`curriculum-card ${
                                isCompleted
                                  ? "completed"
                                  : ""
                              }`}
                              key={lesson.slug}
                            >

                              <div className="curriculum-card-top">

                                <span className="curriculum-card-number">
                                  {String(
                                    index + 1
                                  ).padStart(2, "0")}
                                </span>

                                {isCompleted ? (
                                  <span className="curriculum-complete">
                                    <CircleCheck
                                      size={15}
                                    />
                                    Completed
                                  </span>
                                ) : (
                                  <span className="curriculum-level">
                                    {lesson.difficulty ||
                                      "Beginner"}
                                  </span>
                                )}

                              </div>


                              <div className="curriculum-card-content">

                                <h3>
                                  {lesson.title}
                                </h3>

                                <p>
                                  {lesson.subtitle ||
                                    lesson.intro}
                                </p>

                              </div>


                              <div className="curriculum-card-footer">

                                <span>
                                  <Clock3 size={15} />
                                  {lesson.readTime ||
                                    "5 min"}
                                </span>

                                <div className="curriculum-arrow">
                                  <ArrowRight size={18} />
                                </div>

                              </div>

                            </Link>
                          );
                        }
                      )}

                    </div>

                  ) : (

                    <div className="curriculum-coming-soon">

                      <div className="coming-soon-icon">
                        <Lock size={20} />
                      </div>

                      <div>

                        <span>
                          COMING SOON
                        </span>

                        <h3>
                          More lessons are on the way.
                        </h3>

                        <p>
                          This part of the ApexOne
                          curriculum is being developed.
                        </p>

                      </div>

                    </div>

                  )}

                </section>
              );
            })}

          </div>

        </section>


        {/* =================================================
            FINAL CTA
        ================================================= */}

        <section className="learn-container">

          <div className="learn-final-cta">

            <div>

              <span>
                KEEP LEARNING
              </span>

              <h2>
                From the basics to race strategy.
              </h2>

              <p>
                ApexOne is built to take you from
                wondering what DRS means to understanding
                why a team made a strategic decision
                during the final laps.
              </p>

            </div>

            <div className="learn-cta-mark">
              <span>F1</span>
            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default Learn;