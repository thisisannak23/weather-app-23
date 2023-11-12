import React from "react";
import Conversion from "./Conversion";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <div className="displayedResults">
        <h3>
          <span id="searchResult">Currently in </span>
          <span>{props.data.city}</span>
        </h3>
      </div>
      <p>
        <FormattedDate date={props.data.date} />
      </p>
      <p className="text-capitalize">{props.data.description}</p>
      <div className="row">
        <div className="col-6">
          <img src={props.data.icon} alt={props.data.description} />
          <Conversion celsius={props.data.temperature} />
          <br />
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
