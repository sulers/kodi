// CourseDetails.jsx
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { courses, userCourses } from "../data/data"; // Import courses data
import "../styles/CourseDetails.css";

type SectionType =
  | "description"
  | "prerequisites"
  | "what_you_learn"
  | "modules";

function CourseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courses.find((c) => c.id === id);
  const [openSection, setOpenSection] = useState<SectionType | null>(null);
  
  console.log(course)

   if (!course) {
     return <div>Course not found</div>;
   }

   const toggleSection = (section: SectionType) => {
     // Explicit type
     setOpenSection(openSection === section ? null : section);
   };

  return (
    <div className="course-details">
      <img src={course.imageUrl} alt={course.title} className="details-image" />
      <h2 className="details-title">{course.title}</h2>

      <div className="accordion">
        <div className="accordion-item">
          <button
            className="accordion-button"
            onClick={() => toggleSection("description")}
          >
            Description
          </button>
          {openSection === "description" && (
            <div className="accordion-content">{course.description}</div>
          )}
        </div>

        <div className="accordion-item">
          <button
            className="accordion-button"
            onClick={() => toggleSection("prerequisites")}
          >
            Prerequisites
          </button>
          {openSection === "prerequisites" && (
            <div className="accordion-content">
              <ul>
                {course.prerequisites.map((prereq, index) => (
                  <li key={index}>{prereq}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="accordion-item">
          <button
            className="accordion-button"
            onClick={() => toggleSection("what_you_learn")}
          >
            What You'll Learn
          </button>
          {openSection === "what_you_learn" && (
            <div className="accordion-content">
              <ul>
                {course.what_you_learn.map((learn, index) => (
                  <li key={index}>{learn}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="accordion-item">
          <button
            className="accordion-button"
            onClick={() => toggleSection("modules")}
          >
            Modules
          </button>
          {openSection === "modules" && (
            <div className="accordion-content">
              <ul>
                {course.modules.map((module) => (
                  <li key={module.id}>{module.title}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <button className="enroll-button" onClick={() => {
        userCourses.push(course);
        navigate("/my-courses");
      }}>
        Enroll
      </button>
    </div>
  );
}

export default CourseDetails;
