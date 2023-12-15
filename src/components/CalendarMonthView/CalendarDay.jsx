import React from "react";

const CalendarDay = ({ day, holidays, customEvents }) => {
  const getFilteredEvents = (arrOfEvents, dayNum) => {
    return arrOfEvents.filter((event) =>
      Number(event.date.split("-")[2]) === dayNum ? true : false
    );
  };

  console.log(customEvents)
  const holidaysArr = getFilteredEvents(holidays, day);
  const customEventsArr = getFilteredEvents(customEvents, day)
  console.log(day ,customEventsArr)

  return (
    <td>
      {day === null ? (
        <p>X</p>
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
          {customEventsArr.map((event) => {
            return <span>{event.name}</span>
          })}
        </p>
      )}
    </td>
  );
};

export default CalendarDay;
