export const getPopularEvents = async () => {
    const response = await fetch("https://cors-anywhere.herokuapp.com/https://api.smarkets.com/v3/popular/event_ids/sport/football/");
    return await response.json();
}

export const getEvent = async (id) => {
    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.smarkets.com/v3/events/${id}/`)
    return await response.json();
}