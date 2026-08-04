import "./LessonSidebar.css";
import { NavLink } from "react-router-dom";
import lessons from "../../data/lessons";
import useLessonProgress from "../../hooks/useLessonProgress";

function LessonSidebar() {
  const { completedLessons } = useLessonProgress();

  return (
    <aside className="lesson-sidebar">

      <h2>📚 Beginner Lessons</h2>

      <div className="sidebar-lessons">

        {lessons.map((lesson) => {

          const completed = completedLessons.includes(lesson.title);

          return (
            <NavLink
              key={lesson.slug}
              to={`/Learn/${lesson.slug}`}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active" : ""}`
              }
            >

              <span className="lesson-status">
                {completed ? "✅" : "⬜"}
              </span>

              <span>{lesson.title}</span>

            </NavLink>
          );

        })}

      </div>

    </aside>
  );
}

export default LessonSidebar;