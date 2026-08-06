import "./LessonComplete.css";
import useLessonProgress from "../../hooks/useLessonProgress";

function LessonComplete({ lessonTitle }) {
  const { completeLesson, isCompleted } = useLessonProgress();

  return (
    <div className="lesson-complete">

      {isCompleted(lessonTitle) ? (
        <div className="completed-message">

          <h3>Lesson Completed!</h3>

          <p>
            Great job! You're making excellent progress.
          </p>

        </div>
      ) : (
        <button
          className="complete-btn"
          onClick={() => completeLesson(lessonTitle)}
        >
          Mark Lesson Complete
        </button>
      )}

    </div>
  );
}

export default LessonComplete;