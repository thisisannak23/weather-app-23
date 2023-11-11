import React from "react";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <div className="displayedResults">
        <h3>
          <span id="searchResult">Currently in </span>
          {props.data.city}
        </h3>
      </div>
        <p className="text-capitalize">{props.data.description}</p>
      <div className="row">
        <div className="col-6">
          <img src={props.data.icon} alt={props.data.description} />
          <span id="currentTemperature">
            {Math.round(props.data.temperature)}
          </span>{" "}
          <span id="units">°F</span>
          <br/>
        </div>
        <div className="col-6">
          <ul>
            <li>Real Feel: {Math.round(props.data.realFeel)}°F</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)}mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
