import { useParams } from "react-router-dom";
import CalendarDay from "../CalendarMonthView/CalendarDay";
import App from "./../../App"
import { useEffect } from "react";
import { NavigationContext } from "../../App.js";

const DayCalendar = ({ holidays, year, customEvents }) => {
    const monthNameArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let { month, day } = useParams(); 
    let monthNum = monthNameArr.indexOf(month);

    const numDays = (y, m) => (new Date (y, m, 0).getDate());
    
    const getFilteredEvents = (arrOfEvents, dayNum) => {
        let filteredByMonth = arrOfEvents.filter((event) =>
        Number(event.date.split("-")[1]) === parseInt(monthNum+1) ? true : false 
        );
        let filteredResult = filteredByMonth.filter((event) => 
        Number(event.date.split("-")[2]) === parseInt(dayNum) ? true : false
        )
        return filteredResult;
    };
    
    const prevDay = () => {
        if (monthNum === 0){
            if (parseInt(day) === 1){
                month = monthNameArr[11];
                day = numDays((year-1), monthNum);
            } else {
                day = parseInt(day) - 1;
            }
        } else {
            if (parseInt(day) === 1){
                month = monthNameArr[monthNum - 1];
                day = numDays(year, monthNum);
            } else {
                day = parseInt(day) - 1;
            }
        }
      window.location.replace(`/${month}/${day}`)

    }
    const nextDay = () => {
        if (monthNum === 11){
            if (day === 31){
                day = 1;
                month = monthNameArr[0]
                year = year+1;
            } else {
                day = parseInt(day) + 1;
                month = monthNameArr[monthNum];
            }
        } else {
            console.log(numDays(year, monthNum+1))
            if (parseInt(day) === numDays(year, monthNum + 1)){
                day = 1;
                month = monthNameArr[monthNum + 1]
            } else {
                day = parseInt(day) + 1;
                month = monthNameArr[monthNum];
            }
        }
       window.location.replace(`/${month}/${day}`)
    }
    const holidaysArr = getFilteredEvents(holidays, day);
    let currDate = (new Date(year + "-" + month + "-" + day)).getDay();
    
    return (
        <div className = "day-calendar-container">
            <div className = "day-view-lefthand-menu">

            </div>
            <div className = "day-calendar-table">
                <div className = "day-selector-menu">
                    <p className = "material-symbols-outlined day-menu-item day-menu-button" onClick={() => {
                        prevDay()
                        console.log(month, day)
                        }}>navigate_before</p>
                    <p className = "day-menu-item"> <span>{dayArr[currDate]}</span>, <span>{month}</span> <span>{day}</span></p>
                    <p className = "material-symbols-outlined day-menu-item day-menu-button" onClick={() => {
                        nextDay();
                    }}>navigate_next</p>
                </div>
                <div className = "day-schedule-container">
                        <div className = "holiday-day-card">
                            {holidaysArr.map((holiday)=> {
                                return(
                                    <h2>{holiday.name === "Christmas Eve observed" ? "Christmas Day" : holiday.name}</h2>
                                )
                            })}
                        </div>
                </div>
            </div>
        </div>
    )
}

export default DayCalendar;