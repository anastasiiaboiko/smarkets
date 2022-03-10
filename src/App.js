import "./App.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getPopularEvents } from "./services/services";
import EventItem from "./components/EventItem";
import Loader from "./components/Loader";

const App = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    getPopularEvents()
    .then((events) => {
      setEvents(events);
      setIsLoading(false);
    })
    .catch((error) => {
      setIsLoading(false);
      setHasError(true);
    })
  }, [])

  const toEventPage = (e, id, event) => {
    e.preventDefault();
    navigate(`/event/${id}`, {state: event});
  }

  return (
    <div className="app">
      <h1>Soccer top events</h1>
      <p>Trade and bet on a variety of football betting markets, 
        including those on the Premier League, Champions League, 
        La Liga, Bundesliga and MLS.
      </p>
      { hasError && <span className="error">Something went wrong</span> }
      { isLoading ? (
        <Loader />
        ) : (
        <>
          {events.map((event) => {
            const id = event.events[0].id;
            return (
              <a href="#" key={id} onClick={(e) => {toEventPage(e, id, event.events[0])}}>
                <EventItem eventItem={event.events[0]}/>
              </a>
            )
          })}
        </>
        )
      }
    </div>
  );
}

export default App;
