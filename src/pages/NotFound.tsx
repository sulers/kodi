import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
          <p>404 | Page not found</p>
          <p>
              <Link to="/">Back to Homepage</Link>
          </p>
    </div>
  );
}

export default NotFound;
