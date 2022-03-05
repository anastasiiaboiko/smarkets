import { useState, useEffect } from "react";
import { getEvent } from "../services/services";

const EventItem = ({ id }) => {
    const [event, setEvent] = useState({});

    useEffect(() => {
        getEvent(id).then((event) => {
            setEvent(event.events[0]);
        })
    }, [])

    return (
        <div>
            {event.name}
        </div>
    )
}

export default EventItem;