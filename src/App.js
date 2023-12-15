import "./App.css";
import Navigation from "./components/Navigation";
import CalendarMonth from "./components/CalendarMonthView/CalendarMonth.jsx";
import getCalendar from "./util/getCalendar.js";
import getHolidaysByYear from "./util/getHolidaysFromAPI.js";
import { useEffect, useState } from "react";

function App() {
  const [holidays, setHolidays] = useState([]);
  const yearArr = getCalendar(2023);
  const curMonth = new Date().getMonth();

  useEffect(() => {
    // Checks if we have Holidays in local storage
    if (localStorage.getItem("2023Holidays") !== null) {
      // If we do we get them from local storage
      setHolidays(JSON.parse(localStorage.getItem("2023Holidays")));
    } else {
      // If not we fetch them and update local storage
      getHolidaysByYear(2023).then((data) => {
        setHolidays(data);
        localStorage.setItem("2023Holidays", JSON.stringify(data));
      });
    }
  }, []);

  return (
    <div className="App">
      <Navigation navigation={Navigation}></Navigation>
      <CalendarMonth month={yearArr[curMonth]} holidays={holidays} />
    </div>
  );
}

export default App;

/* 
Play-Ground:

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

29 30 31 tds []
for (let i = 0; i <= 30; i++) {
  tds.push(<td id={i} />)
}

let tableArr = [all tds]
startOfMonth.getDay(); if index of array === td index, place at td index

*/
