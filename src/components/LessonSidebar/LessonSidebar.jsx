import "./LessonSidebar.css";
import { NavLink } from "react-router-dom";
import lessons from "../../data/lessons";
import useLessonProgress from "../../hooks/useLessonProgress";

import {
  BookOpen,
  CheckCircle2,
  Circle,
  BarChart3,
} from "lucide-react";

function LessonSidebar() {
  const { completedLessons } = useLessonProgress();

  const completedCount = completedLessons.length;
  const progress = Math.round(
    (completedCount / lessons.length) * 100
  );

  return (
    <aside className="lesson-sidebar">

      <div className="sidebar-header">

        <BookOpen size={28} />

        <div>
          <h2>Beginner Course</h2>
          <p>Formula 1 Fundamentals</p>
        </div>

      </div>

      <div className="progress-card">

        <div className="progress-title">

          <BarChart3 size={18} />

          <span>Course Progress</span>

        </div>

        <div className="progress-bar">

          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          />

        </div>

        <p>
          {completedCount} of {lessons.length} lessons completed
        </p>

      </div>

      <div className="sidebar-lessons">

        {lessons.map((lesson) => {

          const completed = completedLessons.includes(
            lesson.title
          );

          return (
            <NavLink
              key={lesson.slug}
              to={`/Learn/${lesson.slug}`}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active" : ""}`
              }
            >
              {completed ? (
                <CheckCircle2 size={18} />
              ) : (
                <Circle size={18} />
              )}

              <span>{lesson.title}</span>

            </NavLink>
          );

        })}

      </div>

    </aside>
  );
}

export default LessonSidebar;