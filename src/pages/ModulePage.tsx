import { useParams, useNavigate } from "react-router-dom";
import { courses } from "../data/data";
import VideoPlayer from "../components/VideoPlayer";
import CodeSnippet from "../components/Code";
import "../styles/ModulePage.css";
import { Module } from "../data/types";
import { extractVideoId } from "../utils/helpers";

function ModulePage() {
  const { id, index } = useParams();
  const navigate = useNavigate();
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return <div>Course not found</div>;
  }

  if (!index) {
    return <div>Module Index not found</div>;
  }

  const moduleIndex = parseInt(index, 10);

  if (isNaN(moduleIndex)) {
    return <div>Invalid module index</div>;
  }

  if (moduleIndex < 0 || moduleIndex >= course.modules.length) {
    return <div>Module not found</div>;
  }

  const module: Module = course.modules[moduleIndex];

  const handleNextPage = () => {
    navigate(`/quiz/${id}/${moduleIndex}`); // Navigate to quiz page
  };

  return (
    <div className="module-page">
      <h2 className="module-title">{module.title}</h2>

      {module.videoUrl && (
        <VideoPlayer videoUrl={extractVideoId(module.videoUrl) || ""} />
      )}

      {module.notes && (
        <div className="module-notes">
          <h3>Notes:</h3>
          <ul>
            {module.notes.map((note, noteIndex) => (
              <li key={noteIndex}>{note}</li>
            ))}
          </ul>
        </div>
      )}

      {module.code && (
        <div className="module-code">
          <h3>Code:</h3>
          <CodeSnippet code={module.code} language={course.language} />
        </div>
      )}

      <button className="next-page-button" onClick={handleNextPage}>
        Next Page
      </button>
    </div>
  );
}

export default ModulePage;
