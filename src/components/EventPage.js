import { useState, useEffect } from "react";
import { getEvent } from "../services/services";
import { useParams } from "react-router-dom";

const EventPage = () => { 
    const { id } = useParams();
    const [event, setEvent] = useState({});

    useEffect(() => {
        getEvent(id).then((event) => {
            setEvent(event.events[0]);
        })
    }, [])

    return (
        <div>{event.name}</div>
    )
}

export default EventPage;