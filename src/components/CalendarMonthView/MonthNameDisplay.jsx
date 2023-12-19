import { useContext, useState } from "react";
import { NavigationContext } from "../../App";

const MonthNameDisplay = () => {
  const { month, setMonth, yearArr } = useContext(NavigationContext);
  let monthsArr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [monthName, setMonthName] = useState(monthsArr[month]);

  const nextMonth = () => {
    if (month !== 11) {
      setMonth(month + 1)
      setMonthName(monthsArr[month + 1])
    }
  };
  const prevMonth = () => {
    if (month !== 0) {
      setMonth(month - 1)
      setMonthName(monthsArr[month - 1])
    }
  };

  return (
    <div className="month-selector">
      <button
        className="previous-month material-symbols-outlined"
        onClick={() => prevMonth()}
      >
        navigate_before
      </button>
      <h3 className="month-title">{monthName}</h3>
      <button
        className="next-month material-symbols-outlined"
        onClick={() => nextMonth()}
      >
        navigate_next
      </button>
    </div>
  );
};

export default MonthNameDisplay;

//need to add increment and decrement for month name
