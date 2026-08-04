import "./BeginnerEssentials.css";
import { Link } from "react-router-dom";
import {
  Flag,
  CircleDashed,
  Radio,
  Wrench,
  ArrowRight,
} from "lucide-react";

const lessons = [
  {
    title: "Race Weekend",
    description:
      "Learn how a Formula 1 weekend works from Practice sessions to the Grand Prix.",
    icon: <Flag size={34} />,
    link: "/Learn/race-weekend",
  },
{
  title: "Tyres",
  description:
    "Understand the different tyre compounds and how they affect race strategy.",
  icon: <CircleDashed size={34} />,
  link: "/Learn/tyres",
},
  {
    title: "DRS",
    description:
      "Discover how DRS works, when drivers can use it and why it exists.",
    icon: <Radio size={34} />,
  },
  {
    title: "Pit Stops",
    description:
      "See why pit stops are one of the most important strategic moments in Formula 1.",
    icon: <Wrench size={34} />,
  },
];

function BeginnerEssentials() {
  return (
    <section className="beginner-section">
      <div className="section-heading">
        <p>BEGINNER ESSENTIALS</p>

        <h2>Start Your Formula 1 Journey</h2>

        <span>
          These are the first concepts every new Formula 1 fan should
          understand before watching a race.
        </span>
      </div>

      <div className="lesson-grid">
        {lessons.map((lesson) => (
          <Link
            key={lesson.title}
            to={lesson.link || "#"}
            className="lesson-card"
          >
            <div className="lesson-icon">{lesson.icon}</div>

            <h3>{lesson.title}</h3>

            <p>{lesson.description}</p>

            <button className="lesson-button">
              Learn More
              <ArrowRight size={18} />
            </button>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default BeginnerEssentials;