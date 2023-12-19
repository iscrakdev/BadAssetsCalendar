import React from "react";
import { Link } from "react-router-dom";
// import App from "./../../App"
import { useParams } from "react-router-dom";


const CalendarDay = ({ holidays, customEvents, month, day }) => {
  const monthNameArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const monthName = monthNameArr[month.monthIdx];
  const getFilteredEvents = (arrOfEvents, dayNum) => {
    const returnedEvents = arrOfEvents.filter((event) => {
      return Number(event.date.split("-")[2]) === dayNum ? true : false 
    });
    return returnedEvents; 
  }
  

  console.log(customEvents)
  const holidaysArr = getFilteredEvents(holidays, day);
  const customEventsArr = getFilteredEvents(customEvents, day)
  console.log(holidaysArr); 

  return (
    <td className="calendar-day-container" value="">
      <Link to = {`/${monthName}/${day}`} holidaysArr={holidaysArr}>
      {day === null ? (
        <p></p>
        ) : (
          <div className = "day-td">
          <div className="days-events">
            {holidaysArr.map((holiday) => {
              return (
              <p className="holiday event">
                {holiday.name === "Christmas Eve observed"
                  ? "Christmas Day"
                  : holiday.name}
              </p>
              )})}
            {customEventsArr.map((customs) => {
              return (
              <p className = "event custom-event">
              <span>{customs.name}</span>
              </p>
            )
          })}
          </div>
          <p className="calendar-day">{day}</p>
        </div>
      )}
      </Link>
    </td>
  );
};

export default CalendarDay;
