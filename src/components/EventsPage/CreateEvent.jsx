

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


// const eventObject = {
//     date: "2023-12-24",
//     time: null,
//     name: "Christmas Eve",
//     desc: "This is the day before Christmas Day",
//   };

//   dispatchCustomEvents({type: "CREATE_EVENT", payload: eventObject});
