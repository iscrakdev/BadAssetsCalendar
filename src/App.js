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
  const yearArr = getCalendar(2023);

  useEffect(() => {
    if (localStorage.getItem("customEventIdCount") !== null) {
      // gets the running id count for custom events
      setCustomEventIdCount(
        JSON.parse(localStorage.getItem("customEventIdCount"))
      );
    }
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
  }, []);

  const getCustomEventId = () => {
    setCustomEventIdCount(customEventIdCount + 1);
    localStorage.setItem("customEventIdCount", customEventIdCount + 1);
    return customEventIdCount;
  };

  return (
    <NavigationContext.Provider value={{month, setMonth, yearArr}}>
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
                <Route path="/events" element={<EventPage />} />
                <Route
                  path="/:month/:day"
                  element={<DayCalendar holidays={holidays} />}
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
