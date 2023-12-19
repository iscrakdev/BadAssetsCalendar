import CountdownTimer from "./CountdownTimer"

const EventItem = ({postEvent}) => {
    return (
        <div className = "event-item">
            <div className = "event-row-1">
                <h4 className = "event-inline-obj row1-item">Event Name</h4>
                <p className = "event-inline-obj row1-item"><span>Day</span> <span>Month</span> <span>Year</span></p>
                <p className = "event-inline-obj row1-item delete-button"><span className = "material-symbols-outlined delete-icon">delete</span></p>
            </div>
            <div className = "event-row-2">
                <div className = "row-2-col-1">
                    <p className = "event-inline-obj event-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras semper auctor neque vitae tempus quam. Nec nam aliquam sem et tortor. Aliquet nibh praesent tristique magna sit amet. Consectetur purus ut faucibus pulvinar elementum integer. Ultricies integer quis auctor elit sed vulputate mi sit amet. Consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat. Lacus vel facilisis volutpat est velit egestas dui id. Sapien faucibus et molestie ac feugiat sed. Arcu bibendum at varius vel pharetra.</p>
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