import LessonTemplate from "../../components/LessonTemplate/LessonTemplate";
import lessons from "../../data/lessons";

function Tyres() {
  return <LessonTemplate {...lessons.tyres} />;
}

export default Tyres;