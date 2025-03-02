// MyCourses.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import your courses data
import { userCourses } from "../data/data"; // Import userCourses
import "../styles/MyCourses.css";
import { Course } from "../data/types";

function MyCourses() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = userCourses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const calculateProgress = (course: Course) => {
    return (course.progress / course.modules.length) * 100;
  };

  // Render MyCourses page here, using filteredCourses array and handleCourseClick function to navigate to CourseLearn page for each course.
  return (
    <div className="my-courses-page">
      <header className="my-courses-header">
        <button className="back-button" onClick={() => navigate("/")}>
          <span role="img" aria-label="Back">
            ⬅️
          </span>
        </button>
        <h1 className="my-courses-title">My Courses</h1>
      </header>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search my courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="my-courses-list">
        {filteredCourses.map((course) => (
          <Link to={`/learn/${course.id}`} key={course.id} className="course-item-link">
          <div
            className="course-item"
          >
            <div className="course-title">{course.title}</div>
            <div className="course-progress">
              Progress: {calculateProgress(course).toFixed(0)}%
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MyCourses;
