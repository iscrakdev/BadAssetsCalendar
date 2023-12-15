import React from "react";
import CalendarWeek from "./CalendarWeek.jsx";
import CalendarMonthHeader from "./CalendarMonthHeader.jsx";
import MonthNameDisplay from "./MonthNameDisplay.jsx";


const CalendarMonth = ({ month, holidays }) => {
  return (
    <div className="month-calendar-container">
      <div className = "lefthand-customizer">customizer</div>
      <div className="calendar-table">
        <div className = "calendar-top-bar">
        <MonthNameDisplay />
        </div>
        <table>
          <thead>
            <CalendarMonthHeader />
          </thead>
          <tbody>
            {month.monthArr.map((week) => {
              return <CalendarWeek key={week} week={week} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CalendarMonth;
