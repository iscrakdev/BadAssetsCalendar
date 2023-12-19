import CountdownTimer from "./CountdownTimer";

const EventItem = ({ event }) => {
  return (
    <div className="event-item">
      <div className="event-row-1">
        <h4 className="event-inline-obj row1-item">{event.name === "Christmas Eve observed" ? "Christmas Day" : event.name}</h4>
        <p className="event-inline-obj row1-item">
       <CountdownTimer date={event.date} time={event.time}/>
        </p>
      </div>
    </div>
  );
};

export default EventItem;
