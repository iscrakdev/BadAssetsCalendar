import EventItem from "./EventItem";

const EventList = ({ events }) => {


    return (
        <div className = "event-list">
                <EventItem EventItem={EventItem}/>           
        </div>
    )
}

export default EventList;