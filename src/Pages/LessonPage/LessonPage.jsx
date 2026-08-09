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
} from "lucide-react";


function LessonPage() {

  const { slug } = useParams();

  const lesson = lessons.find(
    (item) => item.slug === slug
  );


  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const [quizSubmitted, setQuizSubmitted] = useState(false);


  if (!lesson) {
    return <Navigate to="/Learn" replace />;
  }


  const handleAnswer = (answer) => {

    if (quizSubmitted) {
      return;
    }

    setSelectedAnswer(answer);
  };


  const submitQuiz = () => {

    if (!selectedAnswer) {
      return;
    }

    setQuizSubmitted(true);
  };


  const resetQuiz = () => {

    setSelectedAnswer(null);

    setQuizSubmitted(false);
  };


  return (
    <>

      <Navbar />


      <main className="lesson-page">


        {/* =========================================
            TOP NAVIGATION
        ========================================= */}

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



        {/* =========================================
            HERO
        ========================================= */}

        <section className="lesson-hero">


          <div className="lesson-number">

            <span>
              {String(
                lessons.findIndex(
                  (item) => item.slug === lesson.slug
                ) + 1
              ).padStart(2, "0")}
            </span>

          </div>


          <div className="lesson-hero-content">

            <span className="lesson-kicker">
              {lesson.category.toUpperCase()} LESSON
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


          <div className="lesson-hero-mark">

            <Flag size={80} strokeWidth={1} />

            <span>
              APEXONE
            </span>

          </div>

        </section>



        {/* =========================================
            MISSION
        ========================================= */}

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

            {lesson.learningPoints.map(
              (point, index) => (

                <div
                  className="learning-card"
                  key={point}
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
            )}

          </div>

        </section>



        {/* =========================================
            RACE BRIEFING
        ========================================= */}

        <section className="lesson-section briefing-section">

          <div className="section-heading">

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

        </section>



        {/* =========================================
            RACE CONTROL / TIMELINE
        ========================================= */}

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

            {lesson.timeline.map(
              (item, index) => (

                <div
                  className="timeline-item"
                  key={item.day}
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

                      {item.events.map(
                        (event) => (

                          <div
                            className="timeline-event"
                            key={event}
                          >

                            <Circle
                              size={12}
                              fill="currentColor"
                            />

                            <span>
                              {event}
                            </span>

                          </div>

                        )
                      )}

                    </div>

                  </div>

                </div>

              )
            )}

          </div>

        </section>



        {/* =========================================
            WHY IT MATTERS
        ========================================= */}

        <section className="lesson-section why-section">


          <div className="why-card">


            <div className="why-icon">

              <Gauge
                size={30}
              />

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



        {/* =========================================
            FACT
        ========================================= */}

        <section className="lesson-section fact-section">


          <div className="fact-card">


            <div className="fact-icon">

              <Lightbulb
                size={28}
              />

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



        {/* =========================================
            QUIZ
        ========================================= */}

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
                {lesson.quiz.question}
              </h3>

            </div>


            <div className="quiz-options">

              {lesson.quiz.options.map(
                (option) => {

                  const isSelected =
                    selectedAnswer === option;

                  const isCorrect =
                    quizSubmitted &&
                    option === lesson.quiz.correctAnswer;

                  const isWrong =
                    quizSubmitted &&
                    isSelected &&
                    option !== lesson.quiz.correctAnswer;


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

                        {String.fromCharCode(
                          65 +
                          lesson.quiz.options.indexOf(option)
                        )}

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
                    selectedAnswer ===
                    lesson.quiz.correctAnswer
                      ? "quiz-success"
                      : "quiz-failure"
                  }
                `}
              >

                <div>

                  <strong>

                    {selectedAnswer ===
                    lesson.quiz.correctAnswer
                      ? "Correct!"
                      : "Not quite."}

                  </strong>

                  <p>
                    {lesson.quiz.explanation}
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



        {/* =========================================
            NEXT LESSON
        ========================================= */}

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

              <ArrowRight
                size={20}
              />

            </Link>

          </section>

        )}


      </main>


      <Footer />

    </>
  );
}


export default LessonPage;