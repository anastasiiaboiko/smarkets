const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Nicely format RFC 3339 datetimes
export const convertDate = (datetime) => {
  const date = new Date(datetime);

  return `${days[date.getDay()]}, ${
    months[date.getMonth()]
  } ${date.getDate()} ${date.getFullYear()}`;
};

export const convertTime = (datetime) => {
  const date = new Date(datetime);

  return `${("0" + date.getHours()).slice(-2)}:${(
    "0" + date.getMinutes()
  ).slice(-2)}`;
};

// Calculate remaining time from now to the start of an event
export const getRemainingTime = (state, datetime) => {
  const unixTime = Date.parse(datetime);
  const date = new Date(datetime);
  const hoursLeft = Math.floor((unixTime - Date.now()) / 1000 / 60 / 60);

  // If state is "upcoming", calculate the time. Otherwise return state
  switch (state) {
    case "upcoming":
      if (hoursLeft >= 24) {
        return `${days[date.getDay()]}`;
      } else if (hoursLeft < 1 && hoursLeft >= 0) {
        return `In ${Math.floor((unixTime - Date.now()) / 1000 / 60)} minutes`;
      } else if (hoursLeft < 0) {
        return "Live";
      }

      return `In ${hoursLeft} hours`;
    default:
      return `${state}`;
  }
};
