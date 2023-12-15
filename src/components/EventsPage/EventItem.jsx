import CountdownTimer from "./CountdownTimer"

const EventItem = () => {
    return (
        <div className = "event-item">
            <div className = "event-row-1">
                <h4 className = "event-inline-obj">Event Title</h4>
                <p className = "event-inline-obj"><span>Day</span> <span>Month</span> <span>Year</span></p>
                <p className = "event-inline-obj">Delete</p>
            </div>
            <div className = "event-row-2">
                <div className = "row-2-col-1">
                    <p className = "event-inline-obj">Event Description</p>
                </div>
                <div className = "row-2-col-2">
                    <button className = "edit-event-button event-inline-obj material-symbols-outlined">edit</button>
                    <CountdownTimer className = "event-inline-obj"/>
                </div>
            </div>
        </div>
    )
}

export default EventItem