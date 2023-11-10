import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input
          type="search"
          placeholder="Enter a City:"
          className="formControl"
        />
        <input type="submit" value="Search" className="button" />
      </form>
      <h1>Saint Louis</h1>
      <ul>
        <li>Wednesday 12:20</li>
        <li>Mostly cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="sunny"
          />
          60 degrees.
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 100%</li>
            <li>Wind 45mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
