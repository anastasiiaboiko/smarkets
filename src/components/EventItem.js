import "../css/EventItem.css";
import { Clock } from "react-feather";
import { getRemainingTime } from "../utils/dateUtils";
import { useNavigate } from "react-router-dom";

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
