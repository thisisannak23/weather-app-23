import React from "react";
import Conversion from "./Conversion";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h3 id="searchResult">{props.data.city}</h3>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src={props.data.iconUrl} alt={props.data.description} />
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
