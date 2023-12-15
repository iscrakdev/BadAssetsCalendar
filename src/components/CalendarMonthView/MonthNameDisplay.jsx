import { useState } from 'react'

const MonthNameDisplay = () => {
    let thisMonthNum = new Date().getMonth();
    let monthsArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const [monthName, setMonthName] = useState();
    
    const nextMonth = () => {
        thisMonthNum =+ 1;
    }
    const prevMonth = () => {
        thisMonthNum =- 1;
    }

    let displayMonth = monthsArr[thisMonthNum];


    return(
        <div className="month-selector">
          <button className="previous-month material-symbols-outlined" onClick={prevMonth()}>
            navigate_before
          </button>
          <h3 className="month-title">{displayMonth}</h3>
          <button className="next-month material-symbols-outlined" onClick={nextMonth()}>
            navigate_next
          </button>
        </div>
    )
}

export default MonthNameDisplay;

//need to add increment and decrement for month name