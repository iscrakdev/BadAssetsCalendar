
const getTimestamp = (time) => {
    let hours = parseInt(time.split(":")[0])
    let minutes = parseInt(time.split(":")[1])
    let timeTag = "";
    console.log(typeof minutes);
    if (hours === 0){
        hours += 12;
        timeTag = "AM";
    } else if (hours < 12){
        timeTag = "AM";
    } else if (hours > 12){
        hours -= 12;
        timeTag = "PM";
    }
    if (minutes < 10){
        minutes = "0" + minutes;
    }

    let returnTime = hours + ":" + minutes + " " + timeTag;
    return returnTime;
}

export default getTimestamp;