import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input
          type="search"
          placeholder="Enter a City"
          className="formControl"
        />
        <input type="submit" value="Search" className="button" />
      </form>
      <div className="displayedResults">
        <h3>
          <span id="searchResult">Results for </span>Saint Louis
        </h3>
      </div>
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
          <span id="tempNum">60</span> <span id="units">degrees</span>
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
