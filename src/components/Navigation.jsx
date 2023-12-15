import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation-container">
      <h1 className = "page-title">World's Best Planning App</h1>
      <div className = "navigation-block">
        <Link to="/" className="navigation-links">Calendar</Link>
        <Link to="/events" className="navigation-links">Events</Link>
        <p className="navigation-links">Notes</p>
      </div>
    </div>
  );
};

export default Navigation;