import { useParams } from "react-router-dom";
import { useContext } from "react"
import { CustomEventsDispatchContext } from "../../App";

const DayCalendar = ({ holidays, customEvents }) => {
  const { year, month, day } = useParams();
  const dispatchCustomEvents = useContext(CustomEventsDispatchContext);
  const monthNameArr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthNum = monthNameArr.indexOf(month);

  const dayArr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const getFilteredEvents = (arrOfEvents, dayNum) => {
    let filteredByYear = arrOfEvents.filter((event) =>
      Number(event.date.split("-")[0]) === parseInt(year) ? true : false
    );
    let filteredByMonth = filteredByYear.filter((event) =>
      Number(event.date.split("-")[1]) === parseInt(monthNum + 1) ? true : false
    );
    let filteredResult = filteredByMonth.filter((event) =>
      Number(event.date.split("-")[2]) === parseInt(dayNum) ? true : false
    );
    return filteredResult;
  };

  const prevDay = () => {
    const targetDay = new Date(year, monthNum, parseInt(day) - 1);
    window.location.replace(
      `/${targetDay.getFullYear()}/${
        monthNameArr[targetDay.getMonth()]
      }/${targetDay.getDate()}`
    );
  };

  const nextDay = () => {
    const targetDay = new Date(year, monthNum, parseInt(day) + 1);
    window.location.replace(
      `/${targetDay.getFullYear()}/${
        monthNameArr[targetDay.getMonth()]
      }/${targetDay.getDate()}`
    );
  };

  const holidaysArr = getFilteredEvents(holidays, day);
  const customEventsArr = getFilteredEvents(customEvents, day);
  const curDate = new Date(year + "-" + month + "-" + day).getDay();

  return (
    <div className="day-calendar-container">
      <div className="day-view-lefthand-menu"></div>
      <div className="day-calendar-table">
        <div className="day-selector-menu">
          <p
            className="material-symbols-outlined day-menu-item day-menu-button"
            onClick={() => {
              prevDay();
              console.log(month, day);
            }}
          >
            navigate_before
          </p>
          <p className="day-menu-item">
            {" "}
            <span>{dayArr[curDate]}</span>, <span>{month}</span>{" "}
            <span>{day}</span>
          </p>
          <p
            className="material-symbols-outlined day-menu-item day-menu-button"
            onClick={() => {
              nextDay();
            }}
          >
            navigate_next
          </p>
        </div>
        <div className="day-schedule-container">
          <div className="holiday-day-card">
            {holidaysArr.map((holiday) => {
              return (
                <h2>
                  {holiday.name === "Christmas Eve observed"
                    ? "Christmas Day"
                    : holiday.name}
                </h2>
              );
            })}
            {customEventsArr.map((event) => {
              return (
                <div>
                  <h2>{event.name}</h2>
                  <p
                    onClick={() =>
                      dispatchCustomEvents({
                        type: "DELETE_EVENT",
                        payload: event.id,
                      })
                    }
                    className="material-symbols-outlined"
                  >
                    delete
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayCalendar;
