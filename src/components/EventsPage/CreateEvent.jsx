import { useContext, useState } from "react";
import { EventIdContext, CustomEventsDispatchContext } from "../../App";

const CreateEvent = () => {
  const getCustomEventId = useContext(EventIdContext);
  const dispatchCustomEvents = useContext(CustomEventsDispatchContext);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [desc, setDesc] = useState("");
  
  return (
    <form>
      <input
        type="text"
        name="event-title"
        className="create-event-title"
        placeholder="Event Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      <input
        type="date"
        name="event-date"
        className="create-event-date"
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />
      <input
        type="time"
        name="event-time"
        className="create-event-time"
        onChange={(e) => {
          setTime(e.target.value);
        }}
      />
      <br />
      <textarea
        type="text"
        name="event-description"
        className="create-event-desc"
        onChange={(e) => {
          setDesc(e.target.value);
        }}
      /><br/>
      <button
        type="submit"
        className = "create-event-submit"
        onClick={(e) => {
          e.preventDefault();
          const newEvent = {
            name,
            date,
            time,
            desc,
            id: getCustomEventId(),
          };
          dispatchCustomEvents({ type: "CREATE_EVENT", payload: newEvent });
          console.log('event should have created')
        }}
      >
        Create Event
      </button>
    </form>
  );
};

export default CreateEvent;
