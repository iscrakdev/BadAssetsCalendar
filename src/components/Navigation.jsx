import { Link } from "react-router-dom";
import CreateEvent from "./EventsPage/CreateEvent";
import { useState } from "react";

const Navigation = () => {
  const [createTab, setCreateTab] = useState(false);

  return (
    <div className="navigation-container">
      <h1 className="page-title">World's Best Planning App</h1>
      <div className="navigation-block">
        <Link to="/" className="navigation-links">
          Calendar
        </Link>
        <Link to="/events" className="navigation-links">
          Events
        </Link>
        <Link to="/notes" className="navigation-links">
          Notes
        </Link>
      </div>

      <div className="create-event-button-container">
        <button
          className="create-event-button material-symbols-outlined"
          onClick={() => setCreateTab(true)}
        >
          add_circle
        </button>

        {createTab ? (
          <div className="event-creation-form">
            <button
              type="button"
              class="material-symbols-outlined close-button"
              onClick={() => setCreateTab(false)}
            >
              close
            </button>
            <CreateEvent setCreateTab={setCreateTab} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Navigation;
