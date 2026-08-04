import { useEffect, useState } from "react";

function useLessonProgress() {
  const [completedLessons, setCompletedLessons] = useState(() => {
    const saved = localStorage.getItem("completedLessons");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "completedLessons",
      JSON.stringify(completedLessons)
    );
  }, [completedLessons]);

  function completeLesson(title) {
    if (!completedLessons.includes(title)) {
      setCompletedLessons([...completedLessons, title]);
    }
  }

  function isCompleted(title) {
    return completedLessons.includes(title);
  }

  return {
    completedLessons,
    completeLesson,
    isCompleted,
  };
}

export default useLessonProgress;