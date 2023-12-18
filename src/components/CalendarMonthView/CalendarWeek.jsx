import React from "react";
import CalendarDay from "./CalendarDay.jsx";

const CalendarWeek = ({ week, holidays, customEvents }) => {
  return (
    <tr>
      {week.map((day) => {
        return <CalendarDay day={day} holidays={holidays} customEvents={customEvents}/>;
      })}
    </tr>
  );
};

export default CalendarWeek;
