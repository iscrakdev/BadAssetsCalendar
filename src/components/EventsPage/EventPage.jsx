import CreateEvent from "./CreateEvent";
import EventList from "./EventList";

const EventPage = ({ holidays, customEvents }) => {
  //combine holidays array and custom events array
  const allEvents = [...holidays, ...customEvents];
  console.log(allEvents);
  //sort the array by date
  //sort the array by time assuming that null is equal to midnight
  allEvents.sort((a, b) => {
    return (
      Date.parse(`${a.date} ${a.time ? a.time : ""}`) -
      Date.parse(`${b.date} ${b.time ? b.time : ""}`)
    );
  });
  console.log("sortedByDate", allEvents);
  const currentTime = Date.parse(Date());
  //filter only the events after the current time (date.now)
  const filteredEvents = allEvents.filter((e) => {return Date.parse(`${e.date} ${e.time ? e.time : ""}`) > currentTime})
  //return the top 5
  const topFive = filteredEvents.slice(0,5);
  console.log(topFive) 

  return (
    <div className="events-page-container">
      <div className = "events-list">
                <EventList events={topFive}/>
            </div>
      <div className="new-event-container">
        <CreateEvent />
      </div>
    </div>
  );
};

export default EventPage;
