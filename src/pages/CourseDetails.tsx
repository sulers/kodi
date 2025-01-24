import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/CourseDetails.css";
import { Course } from "../utils/types";

type CourseDetailsProps = {
  courses: Course[];
};

const CourseDetails: React.FC<CourseDetailsProps> = ({ courses }) => {
  const { courseId } = useParams<{ courseId: string }>();
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [isEnrolled, setIsEnrolled] = useState<boolean>(false);

  // Find the course by ID
  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    return <div>Course not found!</div>;
  }

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleEnroll = () => {
    setIsEnrolled(true);
    alert(`You have successfully enrolled in "${course.title}"!`);
  };

  return (
    <div className="course-details-page">
      <h1>{course.title}</h1>
      <p>{course.description}</p>

      {/* Enroll Button */}
      <div className="enroll-button-container">
        <button
          onClick={handleEnroll}
          className={`enroll-button ${isEnrolled ? "added" : ""}`}
          disabled={isEnrolled}
        >
          {isEnrolled ? "Added" : "Enroll"}
        </button>
      </div>

      {/* Prerequisites */}
      <div className="section">
        <div
          className="section-header"
          onClick={() => toggleSection("prerequisites")}
        >
          Prerequisites
        </div>
        {openSection === "prerequisites" && (
          <div className="section-content">
            <ul>
              {course.prerequisites?.map((prerequisite, index) => (
                <li key={index}>&#x2022; {prerequisite}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* What You'll Learn */}
      <div className="section">
        <div
          className="section-header"
          onClick={() => toggleSection("whatYouLearn")}
        >
          What You'll Learn
        </div>
        {openSection === "whatYouLearn" && (
          <div className="section-content">
            <ul>
              {course.whatUserLearn.map((item, index) => (
                <li key={index}>&#x2022; {item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Modules */}
      <div className="section">
        <div
          className="section-header"
          onClick={() => toggleSection("modules")}
        >
          Modules
        </div>
        {openSection === "modules" && (
          <div className="section-content">
            {course.units.map((unit) => (
              <div key={unit.id} className="module">
                <h3>{unit.title}</h3>
                <hr />
                {/* <ul>
                  {unit.lessons.map((lesson) => (
                    <li key={lesson.title}>{lesson.title}</li>
                  ))}
                </ul> */}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseDetails;
