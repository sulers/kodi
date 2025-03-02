import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="header-title">Kodi</h1>
      </div>
      <div className="header-right">
        <Link to="/my-courses" className="header-link">
          My Courses
        </Link>
        <Link to="/profile" className="profile-link">
          <img
            src="/kodi/profile.png" // Replace with your profile icon path
            alt="Profile"
            className="profile-icon"
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
