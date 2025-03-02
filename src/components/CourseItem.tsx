import { Link } from "react-router-dom";
import "../styles/CourseItem.css";

type CourseItemProps = {
    id: string;
    imageUrl: string;
  title: string;
}

function CourseItem({ id, imageUrl, title }: CourseItemProps) {
  // Add id prop
  return (
    <Link to={`/course/${id}`} className="course-item-link">
      {" "}
      {/* Wrap in Link */}
      <div className="course-item">
        <img src={imageUrl} alt={title} className="course-image" />
        <div className="course-title-container">
          <p className="course-title">{title}</p>
        </div>
      </div>
    </Link>
  );
}

export default CourseItem;
