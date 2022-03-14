import { render, screen } from "@testing-library/react";
import App from "./App";

test("App renders", () => {
  render(<App />);
  const headingElement = screen.getByText(/Soccer top events/i);
  expect(headingElement).toBeInTheDocument();
});
