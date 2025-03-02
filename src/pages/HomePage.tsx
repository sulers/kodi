
import CourseItem from "../components/CourseItem";
import { courses } from "../data/data";
import "../styles/HomePage.css";
import Header from "../components/Header"; // Import Header
import { useState } from "react";

function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-page">
      <Header />
      <div className="search-container">
        <input
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
      <div className="courses-grid">
        {filteredCourses.map((course) => (
          <CourseItem
            key={course.id}
            id={course.id}
            imageUrl={course.imageUrl}
            title={course.title}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
