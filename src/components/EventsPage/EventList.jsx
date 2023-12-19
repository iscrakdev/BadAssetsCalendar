import EventItem from "./EventItem";

const EventList = ({ events }) => {


    return (
        <div className = "event-list-page">
                <div className = "event-list">
                {events.map((event) => {
                    return(
                        <EventItem event={event}/>           
                    )
                })}
                </div>
        </div>
    )
}

export default EventList;