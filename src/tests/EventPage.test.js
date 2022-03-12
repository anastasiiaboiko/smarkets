import { render, screen } from "@testing-library/react";
import EventPage from "../components/EventPage";
import { MemoryRouter } from "react-router-dom";

const defaultEvent = {
  id: "77777777",
  name: "Liverpool vs Milan",
  start_datetime: "1992-11-07T19:00:00Z",
  state: "ended",
  type: "football_match",
};

test("Event page renders", () => {
  render(
    <MemoryRouter initialEntries={[{ state: defaultEvent }]}>
      <EventPage />
    </MemoryRouter>
  );
  const headingElement = screen.getByText(/Liverpool vs Milan/i);
  expect(headingElement).toBeInTheDocument();
});
