import React from "react";
import { Link } from "react-router-dom";
// import App from "./../../App"


const CalendarDay = ({ day, holidays, customEvents, month, yearArr }) => {
  const monthNameArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const monthName = monthNameArr[month.monthIdx];
  const getFilteredEvents = (arrOfEvents, dayNum) => {
    return arrOfEvents.filter((event) =>
      Number(event.date.split("-")[2]) === dayNum ? true : false
    );
  };
  const holidaysArr = getFilteredEvents(holidays, day);
  const customEventsArr = getFilteredEvents(customEvents, day)
  console.log(day ,customEventsArr)


  return (
    <td className="calendar-day-container" value="">
      <Link to = {`/${monthName}/${day}`} holidaysArr={holidaysArr} onClick = {console.log(holidays.date)}>
      {day === null ? (
        <p></p>
        ) : (
          <div className = "day-td">
          <div className="days-events">
            {holidaysArr.map((event) => (
              <p className="holiday event">
                {event.name === "Christmas Eve observed"
                  ? "Christmas Day"
                  : event.name}
              </p>
            ))}
            <p>
            {customEventsArr.map((event) => {
            return <span>{event.name}</span>
          })}
            </p>
          </div>
          <p className="calendar-day">{day}</p>
        </div>
      )}
      </Link>
    </td>
  );
};

export default CalendarDay;
