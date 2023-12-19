import React from "react";
import CalendarWeek from "./CalendarWeek.jsx";
import CalendarMonthHeader from "./CalendarMonthHeader.jsx";
import MonthNameDisplay from "./MonthNameDisplay.jsx";

const CalendarMonth = ({ month, holidays, yearArr, customEvents }) => {
  // monthNum will be 1-12 (1 = Jan, 12 = Dec)
  const getFilteredEvents = (arrOfEvents, monthNum) => {
    return arrOfEvents.filter((event) =>
      Number(event.date.split("-")[1]) === parseInt(monthNum) ? true : false
    );
  };

  const filteredHolidays = getFilteredEvents(holidays, month.monthIdx + 1);

  return (
    <div className="month-calendar-container">
      <div className="lefthand-customizer">
        <div>
          <h3>Filters</h3>
          <input type="checkbox" name = "events-checkbox" defaultChecked></input>
          <label for = "events-checkbox">Events</label><br/>
          <input type = "checkbox" name = "holidays-checkbox" defaultChecked/>
          <label for = "holidays-checkbox">Holidays</label>
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
                  customEvents={customEvents}
                  month={month}
                  yearArr={yearArr}
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
