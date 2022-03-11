import "./App.css";
import { useEffect, useState } from "react";
import EventItem from "./components/EventItem";
import Loader from "./components/Loader";
import { getPopularEvents } from "./services/services";

const App = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getPopularEvents()
      .then((events) => {
        setEvents(events);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setHasError(true);
      });
  }, []);

  return (
    <div className="app">
      <h1>Soccer top events</h1>
      <p>
        Trade and bet on a variety of football betting markets, including those
        on the Premier League, Champions League, La Liga, Bundesliga and MLS.
      </p>
      {hasError && <span className="error">Something went wrong</span>}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {events.map((event) => {
            return <EventItem key={event.events[0].id} event={event} />;
          })}
        </>
      )}
    </div>
  );
};

export default App;
