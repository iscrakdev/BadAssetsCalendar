import React from "react";

const CalendarDay = ({ day }) => {
  console.log(day);
  return <td>{day === null ? <p>X</p> : <p>{day}</p>}</td>;
};

export default CalendarDay;
