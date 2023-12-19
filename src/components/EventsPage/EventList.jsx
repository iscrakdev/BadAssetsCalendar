import EventItem from "./EventItem";
import CreateEvent from "./CreateEvent";


const EventList = ({ events, holidaysArr }) => {


    return (
        <div className = "event-list-page">
                <div className = "event-list">
                {holidaysArr.map((holiday) => {
                    return(
                        <EventItem EventItem={EventItem} key={holiday.name}/>           
                    )
                })}
                </div>
        </div>
    )
}

export default EventList;