import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°F`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°F`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecastDay">{day()}</div>
      <div className="WeatherForecastIcon">
        <img
          src={props.data.condition.icon_url}
          alt={props.data.condition.description}
        />
      </div>
      <div className="WeatherForecastTemperature">
        <span className="WeatherForecastTemperature-max">
          {maxTemperature()}
        </span>
        <span>
          <strong> | </strong>
        </span>
        <span className="WeatherForecastTemperature-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
