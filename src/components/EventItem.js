import "../css/EventItem.css";
import { Clock } from "react-feather";
import { useNavigate } from "react-router-dom";

const getRemainingTime = (state, datetime) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const unixTime = Date.parse(datetime);
  const date = new Date(datetime);
  const hoursLeft = Math.floor((unixTime - Date.now()) / 1000 / 60 / 60);

  switch (state) {
    case "upcoming":
      if (hoursLeft >= 24) {
        return `${days[date.getDay()]}`;
      } else if (hoursLeft < 1) {
        return `In ${Math.floor((unixTime - Date.now()) / 1000 / 60)} minutes`;
      }

      return `In ${hoursLeft} hours`;
    default:
      return `${state}`;
  }
};

const EventItem = ({ event }) => {
  const navigate = useNavigate();

  const toEventPage = (e, event) => {
    e.preventDefault();
    navigate(`/event/${event.id}`, { state: event });
  };

  return (
    <a
      href="#"
      onClick={(e) => {
        toEventPage(e, event.events[0]);
      }}
    >
      <div className="event-item">
        <div className="name">{event.events[0].name}</div>
        <div className="start-date">
          <Clock />
          <span>
            {getRemainingTime(
              event.events[0].state,
              event.events[0].start_datetime
            )}
          </span>
        </div>
      </div>
    </a>
  );
};

export default EventItem;
