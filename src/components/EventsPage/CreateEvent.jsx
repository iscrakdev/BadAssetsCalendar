

const CreateEvent = () => {

    return (
        <form>
            <input type="text" name="event-title"/>
            <input type="datetime-local" name="event-date"/>
            <input type="text" name="event-description"/>
            <button>Create Event</button>
        </form>
    )
}

export default CreateEvent;