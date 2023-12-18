import { useParams } from "react-router-dom";
import CalendarDay from "../CalendarMonthView/CalendarDay";
import App from "./../../App"
import { useEffect } from "react";

const DayCalendar = ({ holidays }) => {
    const monthNameArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let { month, day } = useParams(); 
    let monthNum = monthNameArr.indexOf(month);

    const getFilteredEvents = (arrOfEvents, dayNum) => {
        let filteredByMonth = arrOfEvents.filter((event) =>
            Number(event.date.split("-")[1]) === parseInt(monthNum+1) ? true : false 
        );
        let filteredResult = filteredByMonth.filter((event) => 
            Number(event.date.split("-")[2]) === parseInt(dayNum) ? true : false
        )
        return filteredResult;
    };
    const holidaysArr = getFilteredEvents(holidays, day);
    
    useEffect(() =>{
        console.log(holidaysArr)
    }, [holidaysArr]);  
    
    return (
        <div className = "day-calendar-container">
            <div className = "day-view-lefthand-menu">

            </div>
            <div className = "day-calendar-table">
                <div className = "day-selector-menu">
                    <p>{day}</p>
                    <p>Day</p>
                    <p>Next</p>
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