import "./LessonTemplate.css";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import LessonSidebar from "../LessonSidebar/LessonSidebar";
import LessonHero from "../LessonHero/LessonHero";
import Quiz from "../Quiz/Quiz";
import LessonComplete from "../LessonComplete/LessonComplete";

import { Link } from "react-router-dom";

import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
} from "lucide-react";

function LessonTemplate({
  title,
  subtitle,
  difficulty,
  readTime,
  heroTheme,
  intro,
  learningPoints,
  timeline,
  factTitle,
  fact,
  nextLesson,
  nextLink,
  quiz,
}) {
  return (
    <>
      <Navbar />

      <main className="lesson-page">
        <div className="lesson-layout">

          <LessonSidebar />

          <div className="lesson-content">

            <Link to="/Learn" className="back-link">
              <ArrowLeft size={18} />
              <span>Back to Learn</span>
            </Link>

            <LessonHero
              title={title}
              subtitle={subtitle}
              difficulty={difficulty}
              readTime={readTime}
              lessonCount={timeline.length}
              theme={heroTheme}
            />

            <section className="lesson-introduction">
              <p className="lesson-intro">
                {intro}
              </p>
            </section>

            <section className="learning-section">

              <h2>What You'll Learn</h2>

              <div className="learning-grid">

                {learningPoints.map((point) => (
                  <div
                    className="learning-item"
                    key={point}
                  >
                    <CheckCircle2
                      size={22}
                      className="learning-icon"
                    />

                    <p>{point}</p>
                  </div>
                ))}

              </div>

            </section>

            <section className="timeline-section">

              <h2>Key Concepts</h2>

              <div className="timeline-grid">

                {timeline.map((item) => (
                  <div
                    className="timeline-card"
                    key={item.day}
                  >
                    <h3>{item.day}</h3>

                    {item.events.map((event) => (
                      <p key={event}>{event}</p>
                    ))}

                  </div>
                ))}

              </div>

            </section>

            <section className="fact-section">

              <div className="fact-title">

                <Lightbulb size={22} />

                <h2>{factTitle}</h2>

              </div>

              <p>{fact}</p>

            </section>

            <Quiz
              question={quiz.question}
              options={quiz.options}
              correctAnswer={quiz.correctAnswer}
              explanation={quiz.explanation}
            />

            <LessonComplete
              lessonTitle={title}
            />

            <div className="lesson-navigation">

              <Link
                to={nextLink}
                className="next-btn"
              >
                <div className="next-btn-text">
                  <small>Next Lesson</small>
                  <strong>{nextLesson}</strong>
                </div>

                <ArrowRight size={20} />
              </Link>

            </div>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}

export default LessonTemplate;