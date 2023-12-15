import EventList from "./EventList";

const EventPage = () => {

    return (
        <div className = "events-page-container">
            <div className = "events-list">
                <EventList />
            </div>
            <div className = "new-event-container">
                <button className = "new-event-button material-symbols-outlined">add_circle</button>
            </div>
        </div>
    )
}

export default EventPage;