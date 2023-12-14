import React from "react";
import CalendarDay from "./CalendarDay.jsx";

const CalendarWeek = ({ week }) => {
  return (
    <tr>
      {week.map((day) => {
        return <CalendarDay day={day} />;
      })}
    </tr>
  );
};

export default CalendarWeek;
