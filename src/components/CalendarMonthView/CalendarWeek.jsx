import React from "react";
import CalendarDay from "./CalendarDay.jsx";

const CalendarWeek = ({ week, holidays, month, yearArr }) => {
  return (
    <tr>
      {week.map((day) => {
        return <CalendarDay day={day} holidays={holidays} month={month} yearArr={yearArr}/>;
      })}
    </tr>
  );
};

export default CalendarWeek;
