import "./LessonHero.css";

import {
  GraduationCap,
  Clock3,
  BookOpen,
} from "lucide-react";

function LessonHero({
  title,
  subtitle,
  difficulty,
  readTime,
  lessonCount,
  theme = "default",
}) {
  return (
    <section className={`lesson-hero ${theme}`}>

      <div className="hero-overlay"></div>

      <div className="lesson-hero-content">

        <span className="hero-label">
          Beginner Course
        </span>

        <h1>{title}</h1>

        <p className="hero-subtitle">
          {subtitle}
        </p>

        <div className="hero-meta">

          <div className="hero-item">
            <GraduationCap size={18}/>
            <span>{difficulty}</span>
          </div>

          <div className="hero-item">
            <Clock3 size={18}/>
            <span>{readTime}</span>
          </div>

          <div className="hero-item">
            <BookOpen size={18}/>
            <span>{lessonCount} Key Concepts</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default LessonHero;