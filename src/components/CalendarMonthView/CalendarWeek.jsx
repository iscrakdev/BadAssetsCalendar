import React from "react";
import CalendarDay from "./CalendarDay.jsx";

const CalendarWeek = ({ week, holidays, customEvents, month, displayEvents, displayHolidays }) => {
  return (
    <tr>
      {week.map((day) => {
        return <CalendarDay day={day} holidays={holidays} customEvents={customEvents} month={month} displayHolidays={displayHolidays} displayEvents={displayEvents}/>;
      })}
    </tr>
  );
};

export default CalendarWeek;
