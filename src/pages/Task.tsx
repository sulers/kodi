import { useParams, useNavigate } from "react-router-dom";
import { courses } from "../data/data"; // Import types
import "../styles/Task.css";
import { Course } from "../data/types";

function TaskPage() {
  const { id, index } = useParams();
  const navigate = useNavigate();
  const course: Course | undefined = courses.find((c) => c.id === id);

  if (!course) return <div>Course not found</div>;

  if (!index) {
    return <div>Module index not found</div>; // Handle undefined index
  }

  const moduleIndex = parseInt(index, 10);

  if (isNaN(moduleIndex)) {
    return <div>Invalid module index</div>;
  }

  if (moduleIndex < 0 || moduleIndex >= course.modules.length) {
    return <div>Module Not found</div>;
  }

  const module = course.modules[moduleIndex];

  if (!module || !module.task) return <div>Task not found</div>;

  const handleComplete = () => {
    navigate(`/learn/${id}`); // Go back to learn page
  };

  return (
    <div className="task-page">
      <h2>{module.title}</h2>

      <p className="task-description">{module.task}</p>

      <button className="complete-button" onClick={handleComplete}>
        Complete
      </button>
    </div>
  );
}

export default TaskPage;
