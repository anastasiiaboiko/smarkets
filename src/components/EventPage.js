import "../css/EventPage.css";
import { useNavigate, useLocation } from "react-router-dom";

const EventPage = () => { 
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="event-page">
            <button onClick={() => navigate(-1)}>Back</button>
            <h1>{location.state.name}</h1>
            <div className="descr">
                <div>
                    <span className="bold">Type:</span>
                    <span>{location.state.type.split("_").join(" ")}</span>
                </div>
                <div>
                    <span className="bold">State:</span>
                    <span>{location.state.state}</span>
                </div>
                <div>
                    <span className="bold">Start date:</span>
                    <span>{Date(location.state.start_datetime)}</span>
                </div>
            </div>
        </div>
    )
}

export default EventPage;