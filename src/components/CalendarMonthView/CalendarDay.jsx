import React from "react";

const CalendarDay = ({ day, holidays, customEvents }) => {
  const getFilteredEvents = (arrOfEvents, dayNum) => {
    return arrOfEvents.filter((event) =>
      Number(event.date.split("-")[2]) === dayNum ? true : false
    );
  };

  const holidaysArr = getFilteredEvents(holidays, day);
  const customEventsArr = getFilteredEvents(customEvents, day)
  console.log(day ,customEventsArr)


  return (
    <td className="calendar-day-container">
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
    </td>
  );
};

export default CalendarDay;
