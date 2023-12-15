import "./App.css";
import Navigation from "./components/Navigation";
import CalendarMonth from "./components/CalendarMonthView/CalendarMonth.jsx";
import getCalendar from "./util/getCalendar.js";
import EventPage from "./components/EventsPage/EventPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const yearArr = getCalendar(2023)
  const curMonth = new Date().getMonth()
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation Navigation={Navigation}></Navigation>
        <Routes>
          <Route
            path="/"
            element={<CalendarMonth month={yearArr[month]} />}
          />
          <Route path="/events" element={<EventPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

/* 
Play-Ground:

let numOfDays31 = [ 'Jan', 'Mar', 'May', 'Jul', 'Aug', 'Oct', 'Dec' ]
let numOfDays30 = [ 'Apr', 'June', 'Sep', 'Nov' ]
month = 31, 30, 29

let monthArr = []
while (month > 0) {
  let week = []
  let startDay = new Date('2023-12-1').getDay() // 5 
  
  if (monthArr.length === 0) {
    for (let i = 0; i < startDay; i++) {
      week.push(null)
    } 
  }
  
  for (let i = week.length; i < 7; i++) {
    week.push(<CalendarDay date={'theDate'}>)
  }  

  monthArr.push(week)
}

let startDay = new Date('2023-12-1').getDay() // 5 
for (let i = 0; i < startDay; i++) {
  week.push(null)
}

for (let i = week.length; i < 7; i++) {
  week.push(<CalendarDay date={'theDate'}>)
}

let weekdays = ['sunday', 'monday','tuesday','monday','monday','monday','Saturday',]

let date = '2023-12-1'
let [year, month, day] = date.split('-')
(year is equal to '2023', month is equal to '12' and day is equal to '1')

let day = {
  day: "sunday",
  date: "2023-12-1"
}

let week = [{day: 'Sunday', date: '2023-12-1'}, {day: 'Monday'}, {day: 'Tuesday'}, {day: 'Wednesday'}, {day: 'Thursday'}, {day: 'Friday'}, {day: 'Saturday'}]

let month = [
  week,
  week,
  week,
  week,
  week
]

[undefined, undefined, undefined, undefined, undefined, {day}, {day}]

for (let day of week) {
  if (day === undefined) {return ""}
} else {
  return <CalendarDay />
}


29 30 31 tds []
for (let i = 0; i <= 30; i++) {
  tds.push(<td id={i} />)
}

let tableArr = [all tds]
startOfMonth.getDay(); if index of array === td index, place at td index

*/
