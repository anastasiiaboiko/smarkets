import "./App.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getPopularEvents } from "./services/services";
import EventItem from "./components/EventItem";

const App = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    updateEvents();
  }, [])

  const updateEvents = () => {
    getPopularEvents().then((events) => {
      setEvents(events.popular_event_ids);
    })
  }

  return (
    <div className="App">
      {events.map((id) => {
        return <Link key={id} to={"/event/" + id}><EventItem id={id}/></Link>
      })}
    </div>
  );
}

export default App;
