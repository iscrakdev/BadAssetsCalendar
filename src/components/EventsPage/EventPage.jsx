import CreateEvent from "./CreateEvent";
import EventList from "./EventList";

const EventPage = (holidaysArr) => {

    return (
        <div className = "events-page-container">
            {/* <div className = "events-list">
                <EventList />
            </div> */}
            <div className = "new-event-container">
                <CreateEvent/>
            </div>
        </div>
    )
}

export default EventPage;