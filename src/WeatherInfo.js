import React from "react";
import Date from "./Date";
import Weather from "./Weather";
import axios from "axios";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <h4>{props.data.city}</h4>
      <ul>
        <li>
          <Date/>
        </li>
      </ul>
    </div>
  );
}
