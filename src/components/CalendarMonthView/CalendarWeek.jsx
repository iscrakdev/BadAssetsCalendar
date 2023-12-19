import React from "react";
import CalendarDay from "./CalendarDay.jsx";

const CalendarWeek = ({ week, holidays, customEvents, month, yearArr }) => {
  return (
    <tr>
      {week.map((day) => {
        return <CalendarDay day={day} holidays={holidays} customEvents={customEvents} month={month} yearArr={yearArr}/>;
      })}
    </tr>
  );
};

export default CalendarWeek;
