import { useState } from "react";
import CreateEvent from "./CreateEvent"

const EventCreationPage = () => {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [desc, setDesc] = useState("");

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
            <textarea type="text" name="event-description" onChange = {(e) => {
                eventObject.desc = e.target.value;
            }}/>
            <button type = "submit" onClick={(e) => {
                e.preventDefault();
                const postEvent = {
                    name,
                    date,
                    time, 
                    desc
                };
                generateEvent(postEvent);
            }}>Create Event</button>
        </form>
    )

}

export default EventCreationPage