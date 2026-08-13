import "./Hero.css";
import RaceTrack from "../../assets/svg/RaceTrack";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-tag">THE EASIEST WAY TO UNDERSTAND FORMULA 1</p>

        <h1>
          Formula 1,
          <br />
          Made Simple.
        </h1>

        <p className="hero-description">
          Learn every rule, follow every Grand Prix, and understand the
          strategies that decide championships.
        </p>

       <div className="hero-buttons">

  <Link
    to="/Learn"
    className="primary-btn start-learning-btn"
  >
    Start Learning
  </Link>

  <Link
    to="/stats"
    className="secondary-btn live-season-btn"
  >
    Explore Season
  </Link>

</div>
      </div>

<div className="hero-graphic">
  <RaceTrack />
</div>
    </section>
  );
}

export default Hero;