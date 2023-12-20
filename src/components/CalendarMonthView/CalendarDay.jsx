import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { NavigationContext } from "../../App";

const CalendarDay = ({
  holidays,
  customEvents,
  month,
  day,
  displayEvents,
  displayHolidays,
}) => {
  const { year } = useContext(NavigationContext);
  const monthNameArr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = monthNameArr[month.monthIdx];

  const getFilteredEvents = (arrOfEvents, dayNum) => {
    const returnedEvents = arrOfEvents.filter((event) => {
      return Number(event.date.split("-")[2]) === dayNum ? true : false;
    });
    return returnedEvents;
  };

  const holidaysArr = getFilteredEvents(holidays, day);
  const customEventsArr = getFilteredEvents(customEvents, day);
  const today = `${year}-${month.monthIdx}-${day}`;
  const targetDay = `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`;
  const isToday = today === targetDay;
  console.log(today);
  console.log(targetDay);

  return (
    <td className="calendar-day-container" value="">
      <Link to={`/${year}/${monthName}/${day}`} holidaysArr={holidaysArr}>
        {day === null ? (
          <p></p>
        ) : (
          <div className="day-td">
            <div className="days-events">
              {displayHolidays
                ? holidaysArr.map((holiday) => {
                    return (
                      <p className="holiday event">
                        {holiday.name === "Christmas Eve observed"
                          ? "Christmas Day"
                          : holiday.name}
                      </p>
                    );
                  })
                : null}
              {displayEvents
                ? customEventsArr.map((customs) => {
                    return (
                      <p className="event custom-event">
                        <span>{customs.name}</span>
                      </p>
                    );
                  })
                : null}
            </div>
            <p className={`calendar-day ${isToday ? "is-today" : ""}`}>{day}</p>
          </div>
        )}
      </Link>
    </td>
  );
};

export default CalendarDay;
