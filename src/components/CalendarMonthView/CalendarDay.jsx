import React from "react";

const CalendarDay = ({ day }) => {
  return <td>{day === null ? <p>X</p> : <p>{day}</p>}</td>;
};

export default CalendarDay;
