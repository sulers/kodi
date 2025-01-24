import React from "react";
import CourseItem from "../components/CourseItem";
import { Course } from "../utils/types";
import '../styles/CourseItem.css'

interface CourseListProps {
  courses: Course[];
}

const CourseList: React.FC<CourseListProps> = ({ courses }) => {
  return (
    <div className="course-list">
      {courses.map((course) => (
        <CourseItem key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CourseList;
