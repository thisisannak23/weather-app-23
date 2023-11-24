import React from "react";
import FormattedDate from "./FormattedDate";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h3 id="searchResult">{props.data.city}</h3>
      <ul className="dateDescription">
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">
          <strong>{props.data.description}</strong>
        </li>
      </ul>
      <div className="row" id="currentInfo">
        <div className="col-6">
          <img src={props.data.iconUrl} alt={props.data.description} />
          <div className="currentTemp">
            {Math.round(props.data.temperature)}° F
          </div>
          <br />
        </div>

        <div className="col-6">
          <ul>
            <li>
              <strong>Real Feel</strong>: {Math.round(props.data.realFeel)}° F
            </li>
            <li>
              <strong>Humidity</strong>: {props.data.humidity}%
            </li>
            <li>
              <strong>Wind</strong>: {Math.round(props.data.wind)}mph
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
