import { useState } from "react";

const CreateEvent = (myCustomEventsArr) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [desc, setDesc] = useState("");

  const eventObject = {};

  return (
    <form>
      <input
        type="text"
        name="event-title"
        className = "create-event-title"
        onChange={(e) => {
          eventObject.name = e.target.value;
        }}
      /><br/>
      <input
        type="date"
        name="event-date"
        className = "create-event-date"
        onChange={(e) => {
          eventObject.date = e.target.value;
        }}
      />
      <input
        type="time"
        name="event-time"
        className = "create-event-time"
        onChange={(e) => {
          eventObject.time = e.target.value;
        }}
      /><br/>
      <textarea
        type="text"
        name="event-description"
        className = "create-event-desc"
        onChange={(e) => {
          eventObject.desc = e.target.value;
        }}
      />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          const postEvent = {
            name,
            date,
            time,
            desc,
          };
          myCustomEventsArr.push(postEvent);
          console.log(myCustomEventsArr);
        }}
      >
        Create Event
      </button>
    </form>
  );
};

export default CreateEvent;
