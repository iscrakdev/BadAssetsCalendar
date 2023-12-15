import React from "react";

const CalendarDay = ({ day, holidays }) => {
  const getFilteredEvents = (arrOfEvents, dayNum) => {
    return arrOfEvents.filter((event) =>
      Number(event.date.split("-")[2]) === dayNum ? true : false
    );
  };

  const holidaysArr = getFilteredEvents(holidays, day);

  return (
    <td className = "calendar-day-container">
      {day === null ? (
        <p></p>
      ) : (
        <div>
        {holidaysArr.map((event) => (
          <p className = "holiday">
            {event.name === "Christmas Eve observed"
              ? "Christmas Day"
              : event.name}
          </p>
        ))}
        <br/>
        <p className = "calendar-day">{day}</p>
      </div>
      )}
    </td>
  );
};

export default CalendarDay;
