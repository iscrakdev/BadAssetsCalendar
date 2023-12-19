import { useContext, useState } from "react";
import { NavigationContext } from "../../App";

const MonthNameDisplay = () => {
  const { month, setMonth, year, setYear } = useContext(NavigationContext);
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
    } else {
      setYear(year + 1)
      setMonth(0)
      setMonthName(monthsArr[0])
    }
  };
  const prevMonth = () => {
    if (month !== 0) {
      setMonth(month - 1)
      setMonthName(monthsArr[month - 1])
    } else {
      setYear(year - 1)
      setMonth(11)
      setMonthName(monthsArr[11])
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
      <h3 className="month-title">{`${monthName} ${year}`}</h3>
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
