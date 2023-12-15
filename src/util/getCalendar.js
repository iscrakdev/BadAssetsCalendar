const prependNullDays = (offset) => {
  const week = [];

  for (let offsetDays = 0; offsetDays < offset; offsetDays++) {
    week.push(null);
  }

  return week;
};

const appendNullDays = (weekArr) => {
  while (weekArr.length < 7) {
    weekArr.push(null);
  }

  return weekArr;
};

function getCalendar(year) {
  let offset = new Date(year, 0, 1).getDay();
  console.log(offset)
  // February has a conditional check for 29 days on leap year
  const months = [
    31,
    year % 4 === 0 ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

  return months.map((daysInMonth) => {
    const monthArr = [];
    let curDay = 1;
    while (curDay <= daysInMonth) {
      let weekArr = [];

      // Adds the blank days from the last month
      if (curDay === 1 && offset !== 7) {
        weekArr = prependNullDays(offset);
      }

      // Ensures each week only has 7 days
      for (let dayOfWeek = weekArr.length; dayOfWeek < 7; dayOfWeek++) {
        weekArr.push(curDay++);
        // Checks if the loop will run again and if it WONT, sets up the next month
        if (curDay > daysInMonth) {
          offset = weekArr.length;
          // appends blank days to the end of current month
          weekArr = appendNullDays(weekArr);
          break;
        }
      }

      monthArr.push(weekArr);
    }

    return monthArr;
  });
}

export default getCalendar;
