import "./App.css";
import Navigation from "./components/Navigation";
import CalendarMonth from "./components/CalendarMonthView/CalendarMonth.jsx";
import getCalendar from "./util/getCalendar.js";
import getHolidaysByYear from "./util/getHolidaysFromAPI.js";
import EventPage from "./components/EventsPage/EventPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect, useReducer } from "react";

function App() {
  const [customEvents, dispatchCustomEvents] = useReducer(customEventReducer,[]);
  const [holidays, setHolidays] = useState([]);
  const yearArr = getCalendar(2023);
  const month = new Date().getMonth();

  function customEventReducer(state, action) {
    switch (action.type) {
      case "LOAD_EVENTS": {
        return JSON.parse(localStorage.getItem("customEvents"));
      }
      case "CREATE_EVENT": {
        const newEvent = action.payload;
        const updatedState = [...state, newEvent];
        localStorage.setItem("customEvents", JSON.stringify(updatedState));
        return updatedState;
      }
      case "EDIT_EVENT": {
        return;
      }
      case "DELETE_EVENT": {
        return;
      }
      default: {
        return state;
      }
    }
  }
  
  const eventObject = {
    date: "2023-12-24",
    time: null,
    name: "Christmas Eve",
    desc: "This is the day before Christmas Day",
  };


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
    if (localStorage.getItem("customEvents") !== null) {
      dispatchCustomEvents({ type: "LOAD_EVENTS" });
    }
    dispatchCustomEvents({ type: "CREATE_EVENT", payload: eventObject });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Navigation Navigation={Navigation}></Navigation>
        <Routes>
          <Route
            path="/"
            element={<CalendarMonth month={yearArr[month]} holidays={holidays} />}
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
