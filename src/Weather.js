import React, { useState } from "react";
import "./Weather.css";
import Date from "./Date";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      city: /*response.data.city,*/ "Chicago",
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      realFeel: response.data.temperature.feels_like,
      icon: response.data.condition.icon_url,
    });
    setReady(true);
  }

  if (weatherData.ready) {
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
        <WeatherInfo data={weatherData} />
        <div className="displayedResults">
          <h3>
            <span id="searchResult">Results for </span>
            {weatherData.city}
          </h3>
          <p>
            <Date/>
          </p>
        </div>
        <ul>
          <li>
            <></>
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img src={weatherData.icon} alt={weatherData.description} />
            <span id="currentTemperature">
              {Math.round(weatherData.temperature)}
            </span>{" "}
            <span id="units">degrees</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Real Feel: {Math.round(weatherData.realFeel)}</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind {Math.round(weatherData.wind)}mph</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "86b147443toea07840aa2fbf50e2a306";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "loading...";
  }
}
