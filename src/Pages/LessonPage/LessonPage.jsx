import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

import "./LessonPage.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import lessons from "../../data/lessons";

import {
  ArrowLeft,
  ArrowRight,
  Check,
  Circle,
  Flag,
  Gauge,
  Lightbulb,
  Radio,
  Timer,
  Zap,
} from "lucide-react";

function LessonPage() {
  const { slug } = useParams();

  const lesson = lessons.find(
    (item) => item.slug === slug
  );

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  /*
    If the lesson does not exist,
    return the user to the Learn page.
  */
  if (!lesson) {
    return <Navigate to="/Learn" replace />;
  }

  /*
    Find the current lesson number.
  */
  const lessonNumber =
    lessons.findIndex(
      (item) => item.slug === lesson.slug
    ) + 1;


  /*
    Safely handle missing lesson data.
  */
  const learningPoints = lesson.learningPoints || [];
  const timeline = lesson.timeline || [];

  const quiz = lesson.quiz || null;
  const quizOptions = quiz?.options || [];


  /*
    Quiz handlers
  */
  const handleAnswer = (answer) => {
    if (quizSubmitted) return;

    setSelectedAnswer(answer);
  };


  const submitQuiz = () => {
    if (!selectedAnswer || !quiz) return;

    setQuizSubmitted(true);
  };


  const resetQuiz = () => {
    setSelectedAnswer(null);
    setQuizSubmitted(false);
  };


  const quizCorrect =
    quiz &&
    selectedAnswer === quiz.correctAnswer;


  return (
    <>
      <Navbar />

      <main className="lesson-page">

        {/* =====================================================
            TOP BAR
        ===================================================== */}

        <div className="lesson-topbar">

          <Link
            to="/Learn"
            className="back-link"
          >
            <ArrowLeft size={17} />
            Back to Learn
          </Link>


          <div className="lesson-meta">

            <span>
              {lesson.category}
            </span>

            <span className="meta-divider">
              /
            </span>

            <span>
              {lesson.readTime}
            </span>

          </div>

        </div>


        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="lesson-hero">

          <div className="hero-grid"></div>

          <div className="hero-red-line"></div>

          <div className="lesson-number">

            <span>
              {String(lessonNumber).padStart(2, "0")}
            </span>

          </div>


          <div className="lesson-hero-content">

            <span className="lesson-kicker">
              {lesson.category?.toUpperCase()} LESSON
            </span>


            <h1>
              {lesson.title}
            </h1>


            <p className="lesson-subtitle">
              {lesson.subtitle}
            </p>


            <div className="lesson-stats">

              <div className="lesson-stat">

                <span>
                  LEVEL
                </span>

                <strong>
                  {lesson.difficulty}
                </strong>

              </div>


              <div className="lesson-stat">

                <span>
                  READ TIME
                </span>

                <strong>
                  {lesson.readTime}
                </strong>

              </div>


              <div className="lesson-stat">

                <span>
                  FORMAT
                </span>

                <strong>
                  Interactive
                </strong>

              </div>

            </div>

          </div>


          {/* =================================================
              TELEMETRY
          ================================================= */}

          <div className="lesson-telemetry">

            <div className="telemetry-header">

              <div className="telemetry-status">

                <span className="status-dot"></span>

                <span>
                  LIVE SYSTEM
                </span>

              </div>

              <Radio size={16} />

            </div>


            <div className="telemetry-main">

              <span className="telemetry-label">
                APEXONE
              </span>

              <strong>
                {String(lessonNumber).padStart(2, "0")}
              </strong>

            </div>


            <div className="telemetry-grid">

              <div className="telemetry-item">

                <Gauge size={15} />

                <span>
                  SPEED
                </span>

                <strong>
                  318
                  <small>KM/H</small>
                </strong>

              </div>


              <div className="telemetry-item">

                <Timer size={15} />

                <span>
                  LAP
                </span>

                <strong>
                  {lessonNumber}
                </strong>

              </div>


              <div className="telemetry-item">

                <Zap size={15} />

                <span>
                  MODE
                </span>

                <strong>
                  LEARN
                </strong>

              </div>


              <div className="telemetry-item">

                <Flag size={15} />

                <span>
                  STATUS
                </span>

                <strong>
                  GO
                </strong>

              </div>

            </div>


            <div className="telemetry-bars">

              <span style={{ width: "82%" }}></span>

              <span style={{ width: "64%" }}></span>

              <span style={{ width: "91%" }}></span>

              <span style={{ width: "73%" }}></span>

            </div>

          </div>

        </section>


        {/* =====================================================
            YOUR MISSION
        ===================================================== */}

        <section className="lesson-section mission-section">

          <div className="section-heading">

            <span className="section-kicker">
              YOUR MISSION
            </span>

            <h2>
              What you'll learn
            </h2>

          </div>


          <div className="learning-grid">

            {learningPoints.length > 0 ? (

              learningPoints.map(
                (point, index) => (

                  <div
                    className="learning-card"
                    key={`${point}-${index}`}
                  >

                    <div className="learning-card-top">

                      <span className="learning-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <Check
                        size={20}
                        className="check-icon"
                      />

                    </div>

                    <p>
                      {point}
                    </p>

                  </div>

                )
              )

            ) : (

              <div className="learning-card">

                <div className="learning-card-top">

                  <span className="learning-number">
                    01
                  </span>

                  <Check
                    size={20}
                    className="check-icon"
                  />

                </div>

                <p>
                  Complete this lesson to understand the
                  fundamentals covered in this topic.
                </p>

              </div>

            )}

          </div>

        </section>


        {/* =====================================================
            RACE BRIEFING
        ===================================================== */}

        <section className="lesson-section briefing-section">

          <div className="briefing-card">

            <div className="briefing-accent"></div>

            <div className="briefing-icon">
              <Radio size={25} />
            </div>

            <div>

              <span className="section-kicker">
                RACE BRIEFING
              </span>

              <h2>
                {lesson.briefingTitle}
              </h2>

              <p className="large-copy">
                {lesson.briefingDescription}
              </p>

            </div>

          </div>

        </section>


        {/* =====================================================
            TIMELINE
        ===================================================== */}

        {timeline.length > 0 && (

          <section className="lesson-section timeline-section">

            <div className="section-heading">

              <span className="section-kicker">
                {lesson.controlLabel}
              </span>

              <h2>
                {lesson.controlTitle}
              </h2>

              <p className="section-description">
                {lesson.controlDescription}
              </p>

            </div>


            <div className="timeline">

              {timeline.map(
                (item, index) => {

                  /*
                    Protect against a missing events array.
                  */
                  const events = item.events || [];


                  return (

                    <div
                      className="timeline-item"
                      key={`${item.day}-${index}`}
                    >

                      <div className="timeline-marker">

                        <span>
                          {String(index + 1).padStart(2, "0")}
                        </span>

                      </div>


                      <div className="timeline-card">

                        <div className="timeline-card-header">

                          <h3>
                            {item.day}
                          </h3>

                          <span>
                            {item.label}
                          </span>

                        </div>


                        <div className="timeline-events">

                          {events.length > 0 ? (

                            events.map(
                              (event, eventIndex) => (

                                <div
                                  className="timeline-event"
                                  key={`${event}-${eventIndex}`}
                                >

                                  <Circle
                                    size={10}
                                    fill="currentColor"
                                  />

                                  <span>
                                    {event}
                                  </span>

                                </div>

                              )
                            )

                          ) : (

                            <div className="timeline-event">

                              <Circle
                                size={10}
                                fill="currentColor"
                              />

                              <span>
                                No events available.
                              </span>

                            </div>

                          )}

                        </div>

                      </div>

                    </div>

                  );

                }
              )}

            </div>

          </section>

        )}


        {/* =====================================================
            WHY IT MATTERS
        ===================================================== */}

        <section className="lesson-section why-section">

          <div className="why-card">

            <div className="why-icon">

              <Gauge size={30} />

            </div>


            <div className="why-content">

              <span className="section-kicker">
                WHY IT MATTERS
              </span>

              <h3>
                {lesson.whyTitle}
              </h3>

              <p>
                {lesson.whyDescription}
              </p>

            </div>

          </div>

        </section>


        {/* =====================================================
            FACT
        ===================================================== */}

        <section className="lesson-section fact-section">

          <div className="fact-card">

            <div className="fact-icon">

              <Lightbulb size={28} />

            </div>


            <div>

              <span className="section-kicker">
                {lesson.factTitle}
              </span>

              <p>
                {lesson.fact}
              </p>

            </div>

          </div>

        </section>


        {/* =====================================================
            QUIZ
        ===================================================== */}

        {quiz && (

          <section className="lesson-section quiz-section">

            <div className="section-heading">

              <span className="section-kicker">
                TEST YOUR KNOWLEDGE
              </span>

              <h2>
                Quick check.
              </h2>

              <p>
                Put what you've learned to the test.
              </p>

            </div>


            <div className="quiz-card">

              <div className="quiz-question">

                <span>
                  QUESTION
                </span>

                <h3>
                  {quiz.question}
                </h3>

              </div>


              <div className="quiz-options">

                {quizOptions.map(
                  (option, index) => {

                    const isSelected =
                      selectedAnswer === option;


                    const isCorrect =
                      quizSubmitted &&
                      option === quiz.correctAnswer;


                    const isWrong =
                      quizSubmitted &&
                      isSelected &&
                      option !== quiz.correctAnswer;


                    return (

                      <button
                        key={option}
                        type="button"
                        className={`
                          quiz-option
                          ${isSelected ? "selected" : ""}
                          ${isCorrect ? "correct" : ""}
                          ${isWrong ? "wrong" : ""}
                        `}
                        onClick={() =>
                          handleAnswer(option)
                        }
                        disabled={quizSubmitted}
                      >

                        <span className="option-letter">
                          {String.fromCharCode(65 + index)}
                        </span>


                        <span>
                          {option}
                        </span>


                        {isCorrect && (
                          <Check size={18} />
                        )}

                      </button>

                    );

                  }
                )}

              </div>


              {!quizSubmitted ? (

                <button
                  className="quiz-submit"
                  type="button"
                  onClick={submitQuiz}
                  disabled={!selectedAnswer}
                >
                  Check Answer
                </button>

              ) : (

                <div
                  className={`
                    quiz-result
                    ${
                      quizCorrect
                        ? "quiz-success"
                        : "quiz-failure"
                    }
                  `}
                >

                  <div>

                    <strong>
                      {quizCorrect
                        ? "Correct!"
                        : "Not quite."}
                    </strong>

                    <p>
                      {quiz.explanation}
                    </p>

                  </div>


                  <button
                    type="button"
                    onClick={resetQuiz}
                    className="retry-button"
                  >
                    Try Again
                  </button>

                </div>

              )}

            </div>

          </section>

        )}


        {/* =====================================================
            NEXT LESSON
        ===================================================== */}

        {lesson.nextLink && (

          <section className="next-section">

            <div>

              <span>
                NEXT LESSON
              </span>

              <h2>
                {lesson.nextLesson}
              </h2>

            </div>


            <Link
              to={lesson.nextLink}
              className="next-button"
            >

              Continue Learning

              <ArrowRight size={20} />

            </Link>

          </section>

        )}

      </main>

      <Footer />
    </>
  );
}

export default LessonPage;