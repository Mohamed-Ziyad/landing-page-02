import React from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home";
import { BrowserRouter as Router } from "react-router-dom";
import "swiper/css/bundle";

const container = document.getElementById("root");
const root = createRoot(container);

function App() {
  return (
    <Router>
      <React.StrictMode>
        <Home />
      </React.StrictMode>
    </Router>
  );
}

root.render(<App tab="home" />);
