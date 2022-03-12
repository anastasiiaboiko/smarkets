import { render, screen } from "@testing-library/react";
import EventItem from "../components/EventItem";
import { MemoryRouter } from "react-router-dom";

const defaultEvent = {
  events: [
    {
      id: "77777777",
      name: "Liverpool vs Milan",
      start_datetime: "1992-11-07T19:00:00Z",
      state: "ended",
      type: "football_match",
    },
  ],
};

test("Event item renders", () => {
  render(
    <MemoryRouter>
      <EventItem event={defaultEvent} />
    </MemoryRouter>
  );
  const headingElement = screen.getByText(/Liverpool vs Milan/i);
  expect(headingElement).toBeInTheDocument();
});
