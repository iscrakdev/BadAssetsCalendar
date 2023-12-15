import React from "react";
import CalendarDay from "./CalendarDay.jsx";

const CalendarWeek = ({ week, holidays }) => {
  return (
    <tr>
      {week.map((day) => {
        return <CalendarDay day={day} holidays={holidays}/>;
      })}
    </tr>
  );
};

export default CalendarWeek;
