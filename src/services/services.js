export const getPopularEventIds = async () => {
  const popularEventIds = await fetch(
    "https://cors-anywhere.herokuapp.com/https://api.smarkets.com/v3/popular/event_ids/sport/football/"
  );

  return popularEventIds.json();
};

export const getEvents = async (popularEventIds) => {
  const events = await Promise.all(
    popularEventIds.map((id) =>
      fetch(
        `https://cors-anywhere.herokuapp.com/https://api.smarkets.com/v3/events/${id}/`
      )
    )
  );
  const eventJsons = await Promise.all(events.map((event) => event.json()));
  return eventJsons;
};
