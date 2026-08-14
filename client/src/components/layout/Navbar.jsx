import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <Link to="/" className="navbar-logo">
          🎓
          <span>Campus Connect</span>
        </Link>

        <nav className="navbar-links">
          <Link to="/">Home</Link>
          <a href="/#events">Events</a>
          <a href="/#about">About</a>
        </nav>

        <div className="navbar-actions">

          <Link
            to="/login"
            className="login-link"
          >
            Login
          </Link>

          <Link
            to="/create-event"
            className="create-event-nav"
          >
            + Create Event
          </Link>

        </div>

      </div>
    </header>
  );
}

export default Navbar;