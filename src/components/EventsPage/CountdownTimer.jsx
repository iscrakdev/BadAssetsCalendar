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
    <div className = "countdown-container">
      {days === null ? (
        <span class="material-symbols-outlined loader">
        autorenew
        </span>
      ) : (
        <p className = "countdown-timer">
          <span className="event-inline-obj countdown countdown-days">{days}</span>d
          <span className="event-inline-obj countdown countdown-hours"> {hours}</span>h
          <span className="event-inline-obj countdown countdown-minutes"> {minutes}</span>m
          <span className="event-inline-obj countdown countdown-seconds"> {seconds}</span>s
        </p>
      )}
    </div>
  );
};

export default CountdownTimer;
