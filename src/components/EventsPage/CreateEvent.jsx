

const CreateEvent = () => {

    return (
        <form>
            <input type="text" name="event-title" onChange = {(e) => {
                eventObject.name = e.target.value;
            }}/>
            <input type="date" name="event-date" onChange = {(e) => {
                eventObject.date = e.target.value;
            }}/>
            <input type="time" name = "event-time" onChange = {(e) => {
                eventObject.time = e.target.value;
            }}/>
            <input type="text" name="event-description" onChange = {(e) => {
                eventObject.desc = e.target.value;
            }}/>
            <button type = "button">Create Event</button>
        </form>
    )
}

export default CreateEvent;