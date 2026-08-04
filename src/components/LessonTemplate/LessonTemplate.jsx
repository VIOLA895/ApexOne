import "./LessonTemplate.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Quiz from "../Quiz/Quiz";
import LessonComplete from "../LessonComplete/LessonComplete";
import LessonSidebar from "../LessonSidebar/LessonSidebar";
import { Link } from "react-router-dom";

function LessonTemplate({
  title,
  difficulty,
  readTime,
  intro,
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

  <div className="lesson-container">

          <Link to="/Learn" className="back-link">
            ← Back to Learn
          </Link>

          <p className="lesson-tag">BEGINNER LESSON</p>

          <h1>{title}</h1>

          <div className="lesson-meta">
            <span>⭐ {difficulty}</span>
            <span>⏱ {readTime}</span>
          </div>

          <p className="lesson-intro">
            {intro}
          </p>

          <section className="timeline-section">

            <h2>Key Concepts</h2>

            <div className="timeline-grid">
              {timeline.map((item) => (
                <div className="timeline-card" key={item.day}>

                  <h3>{item.day}</h3>

                  {item.events.map((event) => (
                    <p key={event}>• {event}</p>
                  ))}

                </div>
              ))}
            </div>

          </section>

          <section className="fact-section">
            <h2>{factTitle}</h2>
            <p>{fact}</p>
          </section>

          <Quiz
            question={quiz.question}
            options={quiz.options}
            correctAnswer={quiz.correctAnswer}
            explanation={quiz.explanation}
          />
          <LessonComplete lessonTitle={title} />

          <div className="lesson-navigation">

            <Link to={nextLink} className="next-btn">
              <span>Next Lesson</span>
              <strong>{nextLesson} →</strong>
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