import "./App.css";
import { getEvents, getPopularEventIds } from "./services/services";
import { useEffect, useState } from "react";
import EventItem from "./components/EventItem";
import Loader from "./components/Loader";
import { areEqual } from "./utils/arraysAreEqual";
import { useLocalStorage } from "./utils/useLocalStorage";

const App = () => {
  // Use custom useLocalStorage hook to store data from API
  // and persist state through a page refresh to make less calls
  const [popularEventIds, setPopularEventIds] = useLocalStorage("ids", []);
  const [events, setEvents] = useLocalStorage("events", []);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    getPopularEventIds()
      .then((ids) => {
        // Check if popular event ids have changed and if they did
        // make an API call to get event jsons
        if (!areEqual(ids.popular_event_ids, popularEventIds)) {
          setPopularEventIds(ids.popular_event_ids);
          updateEvents(ids.popular_event_ids);
        }
      })
      .catch(() => {
        setHasError(true);
      });
  }, []);

  const updateEvents = (popularEventIds) => {
    setIsLoading(true);
    getEvents(popularEventIds)
      .then((events) => {
        setEvents(events);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setHasError(true);
      });
  };

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
