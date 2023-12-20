import CountdownTimer from "./CountdownTimer";

const EventItem = ({ event }) => {
  console.log(event.desc)
  return (
    <div className="event-item">
      <div className="event-row-1">
        <h4 className="event-inline-obj row1-item">{event.name === "Christmas Eve observed" ? "Christmas Day" : event.name}</h4>
        <CountdownTimer date={event.date} time={event.time}/>
      </div>
      <div className = "event-row-2">
        <p>{event.desc}</p>
      </div>
    </div>
  );
};

export default EventItem;
