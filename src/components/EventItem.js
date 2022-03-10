import "../css/EventItem.css";

const getRemainingTime = (datetime) => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const unixTime = Date.parse(datetime);
    const date = new Date(datetime);
    const hoursLeft = Math.floor((unixTime - Date.now())/1000/60/60);

    if (hoursLeft >= 24) {
        return `${days[date.getDay()]}`;
    } else if (hoursLeft < 1) {
        return `In ${Math.floor((unixTime - Date.now())/1000/60)} minutes`;
    }

    return `In ${hoursLeft} hours`
}

const EventItem = ({ eventItem }) => {
    return (
        <div className="event-item">
            <div className="name">{eventItem.name}</div>
            <div className="start-date">{getRemainingTime(eventItem.start_datetime)}</div>
        </div>
    )
}

export default EventItem;