import React, { useState } from "react";
import { Course } from "../utils/types";

import '../styles/CourseItem.css'
import { Link } from "react-router-dom";


interface CourseItemProps {
  course: Course;
}

const CourseItem: React.FC<CourseItemProps> = ({ course }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isAdded, setIsAdded] = useState<boolean>(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleAddCourse = () => {
    setIsAdded(true);
    alert(`Course "${course.title}" added!`);
  };

  return (
    <div className="course-item">
      <div className="course-title" onClick={handleToggle}>
        {course.title}
      </div>
      {isOpen && (
        <div className="course-details">
          <p>{course.description}</p>
          <div className="buttons">
            <Link to={`/courses/${course.id}`} className="info-button">
              More Info
            </Link>
            <button
              onClick={handleAddCourse}
              className="add-button"
              disabled={isAdded}
            >
              {isAdded ? "Added" : "Enroll"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseItem;
