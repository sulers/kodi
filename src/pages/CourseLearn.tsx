import { useParams, useNavigate } from "react-router-dom";
import { courses } from "../data/data"; // Import your courses data
import { userCourses } from "../data/data"; // Import userCourses
import "../styles/CourseLearn.css";

function CourseLearn() {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courses.find((c) => c.id === id);
  const userCourse = userCourses.find((c) => c.id === id);

  if (!course || !userCourse) {
    return <div>Course not found</div>;
  }

  const handleModuleClick = (index:number) => {
    userCourse.progress = index + 1; // Update progress
    navigate(`/module/${id}/${index}`); // Navigate to module page
  };

  const calculateProgress = () => {
    return (userCourse.progress / course.modules.length) * 100;
  };

  return (
    <div className="course-learn-page">
      <header className="course-learn-header">
        <h1 className="course-learn-title">{course.title}</h1>
        <div className="course-progress">
          Progress: {calculateProgress().toFixed(0)}%
        </div>
      </header>

      <div className="modules-list">
        {course.modules.map((module, index) => (
          <div
            key={module.id}
            className={`module-item ${
              index < userCourse.progress ? "completed" : ""
            }`}
            onClick={() => handleModuleClick(index)}
          >
            {module.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseLearn;
