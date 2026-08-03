import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./RaceWeekend.css";
import { Link } from "react-router-dom";

function RaceWeekend() {
  return (
    <>
      <Navbar />

      <main className="race-page">
        <div className="race-container">


<Link to="/learn" className="back-link">
  ← Back to Learn
</Link>

          <p className="race-tag">
            BEGINNER LESSON
          </p>

          <h1>Race Weekend</h1>

          <div className="lesson-meta">
            <span>★★★★★ Beginner</span>
            <span>5 min read</span>
          </div>

          <p className="intro">
            Learn how a Formula 1 race weekend is structured,
            from Friday practice sessions to the Grand Prix on Sunday.
          </p>

          <div className="timeline">

            <div className="timeline-item">
              <h3>Friday</h3>
              <p>Practice 1</p>
              <p>Practice 2</p>
            </div>

            <div className="timeline-item">
              <h3>Saturday</h3>
              <p>Practice 3</p>
              <p>Qualifying</p>
            </div>

            <div className="timeline-item">
              <h3>Sunday</h3>
              <p>Grand Prix</p>
            </div>

          </div>

          <div className="fact-box">
            <h2>Did You Know?</h2>

            <p>
              Every Formula 1 weekend follows a schedule that allows teams
              to fine-tune their cars before the race. Practice sessions are
              used to test setups, qualifying determines the starting grid,
              and the Grand Prix decides who earns championship points.
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}

export default RaceWeekend;