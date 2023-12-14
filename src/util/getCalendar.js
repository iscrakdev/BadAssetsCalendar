function getCalendar(year) {
  // get first day of the year to index our year
  const currentDayIndex = new Date(year, 0, 1).getDay().toString();

  // year contains 12 months that contains
  const yearArr = [];

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

  let offset = currentDayIndex;

  for (let month of months) {
    // create a month array to hold weeks
    let monthArr = [];
    // gets amount of weeks in a month
    let weeksInMonth = Math.ceil(month / 7);
    // current day of the month
    let curDay = 1;

    // iterates through every week
    for (let curWeek = 0; curWeek < weeksInMonth + 1; curWeek++) {
      if (curDay > month) {
        break;
      }
      let week = [];

      if (curWeek === 0) {
        let offsetDays = 0;
        while (offsetDays < offset) {
          week.push(null);
          offsetDays++;
        }
      }

      // create a week
      for (let dayOfWeek = week.length; dayOfWeek < 7; dayOfWeek++) {
        if (curDay <= month) {
          week.push(curDay);
          curDay++;
          offset = 0;
        } else {
          offset = week.length;
          while (week.length < 7) {
            week.push(null);
          }
          break;
        }
      }

      monthArr.push(week);
    }

    yearArr.push(monthArr);
  }
  return yearArr;
}

export default getCalendar;
