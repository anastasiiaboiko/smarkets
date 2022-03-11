import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import EventPage from "./components/EventPage";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/event/:id" element={<EventPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
