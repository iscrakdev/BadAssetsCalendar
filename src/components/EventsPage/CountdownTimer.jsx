import { useState } from "react";

const CountdownTimer = ({ date, time }) => {
  const countDownDate = new Date(`${date} ${time ? time : ""}`).getTime();
  const [days, setDays] = useState(null);
  const [hours, setHours] = useState(null);
  const [minutes, setMinutes] = useState(null);
  const [seconds, setSeconds] = useState(null);

  // Update the count down every 1 second
  const x = setInterval(function () {
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    setSeconds(Math.floor((distance % (1000 * 60)) / 1000));

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
    }
  }, 1000);

  return (
    <div className="countdown-timer event-inline-obj">
      {days === null ? (
        "Loading..."
      ) : (
        <>
          <p className="event-inline-obj">{days}d</p>
          <p className="event-inline-obj"> {hours}h</p>
          <p className="event-inline-obj"> {minutes}m</p>
          <p className="event-inline-obj"> {seconds}s</p>
        </>
      )}
    </div>
  );
};

export default CountdownTimer;
