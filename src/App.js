import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Saint Louis" />
        <footer>
          This project was coded by Anna and is{" "}
          <a
            href="https://github.com/thisisannak23/weather-app-23"
            rel="noopener noreferrer"
          >
            open sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
