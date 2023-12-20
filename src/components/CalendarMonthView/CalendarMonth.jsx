import React, { useContext, useState } from "react";
import CalendarWeek from "./CalendarWeek.jsx";
import CalendarMonthHeader from "./CalendarMonthHeader.jsx";
import MonthNameDisplay from "./MonthNameDisplay.jsx";
import { NavigationContext } from "../../App.js";

const CalendarMonth = ({ month, holidays, customEvents }) => {
  const [displayHolidays, setDisplayHolidays] = useState(true);
  const [displayEvents, setDisplayEvents] = useState(true);
  const { year, setMonth, setYear } = useContext(NavigationContext);
  // monthNum will be 1-12 (1 = Jan, 12 = Dec)
  const getFilteredEvents = (arrOfEvents, monthNum, yearNum) => {
    return arrOfEvents.filter((event) =>
      Number(event.date.split("-")[1]) === parseInt(monthNum) &&
      Number(event.date.split("-")[0]) === parseInt(yearNum)
        ? true
        : false
    );
  };

  const filteredHolidays = getFilteredEvents(
    holidays,
    month.monthIdx + 1,
    year
  );
  const filteredCustomEvents = getFilteredEvents(
    customEvents,
    month.monthIdx + 1,
    year
  );

  return (
    <div className="month-calendar-container">
      <div className="lefthand-customizer">
        <div>
          <h3 className = "filter-title">Filters</h3>
          <input
            onClick={() => {
              setDisplayEvents(!displayEvents);
            }}
            type="checkbox"
            name="events-checkbox"
            className = "checkbox"
            defaultChecked
          />
          <label for="events-checkbox" className = "checkbox-label">Events</label>
          <br />
          <input
            onClick={() => {
              setDisplayHolidays(!displayHolidays);
            }}
            type="checkbox"
            name="holidays-checkbox"
            className = "checkbox"
            defaultChecked
          />
          <label for="holidays-checkbox"  className = "checkbox-label">Holidays</label>
        </div>
        <div>
          <button
            onClick={() => {
              window.location.replace("/");
            }}
            className = "current-day-button"
          >Go To This Month <span class="material-symbols-outlined today-icon">
          today
          </span></button>
        </div>
      </div>
      <div className="calendar-table">
        <div className="calendar-top-bar">
          <MonthNameDisplay />
        </div>
        <table>
          <thead>
            <CalendarMonthHeader />
          </thead>
          <tbody>
            {month.monthArr.map((week) => {
              return (
                <CalendarWeek
                  key={week}
                  week={week}
                  holidays={filteredHolidays}
                  customEvents={filteredCustomEvents}
                  month={month}
                  displayEvents={displayEvents}
                  displayHolidays={displayHolidays}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CalendarMonth;
