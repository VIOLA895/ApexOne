import { useParams, Navigate } from "react-router-dom";
import LessonTemplate from "../../components/LessonTemplate/LessonTemplate";
import lessons from "../../data/lessons";

function LessonPage() {
  const { slug } = useParams();

  const lesson = lessons.find((lesson) => lesson.slug === slug);

  if (!lesson) {
    return <Navigate to="/Learn" replace />;
  }

  return <LessonTemplate {...lesson} />;
}

export default LessonPage;