export const getPopularEvents = async () => {
    const popularEvents = await fetch("https://cors-anywhere.herokuapp.com/https://api.smarkets.com/v3/popular/event_ids/sport/football/");
    const popularEventIds = await popularEvents.json();
    const events = await Promise.all(popularEventIds.popular_event_ids.map(id => fetch(`https://cors-anywhere.herokuapp.com/https://api.smarkets.com/v3/events/${id}/`)));
    const eventJsons = await Promise.all(events.map(event => event.json()));
    return eventJsons;
}