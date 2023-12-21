import CountdownTimer from "./CountdownTimer";
import { useState } from "react";
import getTimestamp from "../../util/getTimestamp";

const EventItem = ({ event }) => {
  // by default the input fields will be populated with an events information and they will be disabled to user input
  // upon pressing edit we want the input fields to become enabled so that the user may alter their values
  // changing information should feel fluid and automatically save to a temporary object
  // clicking cancel should remove the changes and set the event input back to normal and disable the input boxes
  // clicking save should call our event reducer to update the event (we do not have a way to deal with holidays atm)
  // what state is necesary, what checks need to be in place, what functions can make it easier
  const [isDisabled, setIsDisabled] = useState(true);
  const [eventCopy, setEventCopy] = useState(event);
  console.log(eventCopy);

  return (
    <div className="event-item">
      <div className="event-row-1">
        <table id="event-item-table">
          <tr>
            <td>
              <h4 className="event-inline-obj row1-item">{event.name}</h4>
            </td>
            <td>
              <p className = "event-inline-obj row1-item event-item-date">{event.date}</p>
            </td>
            <td>
              <p className = "event-inline-obj row1-item event-item-time">{getTimestamp(event.time)}</p>
            </td>
          </tr>
        </table>
        <CountdownTimer date={event.date} time={event.time} />
      </div>
      <div className="event-row-2">
        <p>{event.desc}</p>
      </div>
    </div>
  );
};

export default EventItem;
