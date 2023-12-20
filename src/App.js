import "./App.css";
import Navigation from "./components/Navigation";
import CalendarMonth from "./components/CalendarMonthView/CalendarMonth.jsx";
import getCalendar from "./util/getCalendar.js";
import getHolidaysByYear from "./util/getHolidaysFromAPI.js";
import EventPage from "./components/EventsPage/EventPage.jsx";
import DayCalendar from "./components/CalendarDayView/DayCalendar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect, useReducer, createContext } from "react";
import customEventReducer from "./util/customEventReducer.js";

export const EventIdContext = createContext();
export const CustomEventsDispatchContext = createContext();
export const NavigationContext = createContext();

function App() {
  const [customEvents, dispatchCustomEvents] = useReducer(
    customEventReducer,
    []
  );
  const [customEventIdCount, setCustomEventIdCount] = useState(0);
  const [holidays, setHolidays] = useState([]);
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const yearArr = getCalendar(year);

  useEffect(() => {
    if (localStorage.getItem("customEventIdCount") !== null) {
      // gets the running id count for custom events
      setCustomEventIdCount(
        JSON.parse(localStorage.getItem("customEventIdCount"))
      );
    }
    // Checks if we have Holidays in local storage
    if (localStorage.getItem(`${year}Holidays`) !== null) {
      // If we do we get them from local storage
      setHolidays(JSON.parse(localStorage.getItem(`${year}Holiday`)));
    } else {
      // If not we fetch them and update local storage
      getHolidaysByYear(year).then((data) => {
        setHolidays(data);
        localStorage.setItem(`${year}Holidays`, JSON.stringify(data));
      });
    }
    if (localStorage.getItem("customEvents") !== null) {
      dispatchCustomEvents({ type: "LOAD_EVENTS" });
    }
    for (let i = 2020; i <= 2030; i++) {
      if (localStorage.getItem(`${i}Holidays`) === null) {
        getHolidaysByYear(i).then((data) => {
          localStorage.setItem(`${i}Holidays`, JSON.stringify(data));
        });
      }
    }
  }, []);

  const getCustomEventId = () => {
    setCustomEventIdCount(customEventIdCount + 1);
    localStorage.setItem("customEventIdCount", customEventIdCount + 1);
    return customEventIdCount;
  };

  return (
    <NavigationContext.Provider
      value={{ month, setMonth, year, setYear, yearArr }}
    >
      <CustomEventsDispatchContext.Provider value={dispatchCustomEvents}>
        <EventIdContext.Provider value={getCustomEventId}>
          <BrowserRouter>
            <div className="App">
              <Navigation Navigation={Navigation}></Navigation>
              <Routes>
                <Route
                  path="/"
                  element={
                    <CalendarMonth
                      month={yearArr[month]}
                      holidays={holidays}
                      customEvents={customEvents}
                    />
                  }
                />
                <Route
                  path="/events"
                  element={
                    <EventPage
                      holidays={holidays}
                      customEvents={customEvents}
                    />
                  }
                />
                <Route
                  path="/:year/:month/:day"
                  element={
                    <DayCalendar
                      holidays={holidays}
                      customEvents={customEvents}
                    />
                  }
                />
              </Routes>
            </div>
          </BrowserRouter>
        </EventIdContext.Provider>
      </CustomEventsDispatchContext.Provider>
    </NavigationContext.Provider>
  );
}

export default App;
