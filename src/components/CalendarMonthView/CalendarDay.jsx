import React from "react";

const CalendarDay = ({ day, holidays }) => {
  const getFilteredEvents = (arrOfEvents, dayNum) => {
    return arrOfEvents.filter((event) =>
      Number(event.date.split("-")[2]) === dayNum ? true : false
    );
  };

  const holidaysArr = getFilteredEvents(holidays, day);

  return (
    <td>
      {day === null ? (
        <p></p>
      ) : (
        <p>
        {day}
        <br />
        {holidaysArr.map((event) => (
          <span>
            {event.name === "Christmas Eve observed"
              ? "Christmas Day"
              : event.name}
          </span>
        ))}
      </p>
      )}
    </td>
  );
};

export default CalendarDay;
