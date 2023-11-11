import React, { useState } from "react";
import "./Date.css";
import axios from "axios";
import city from "./Weather.js";

export default function Date() {
  const [ready, setReady] = useState(false);
  const [date, setDate] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setDate({
      ready: true,
      city: { city },
      month: response.data.month,
      weekDay: response.data.day_of_week,
      year: response.data.year,
      hour: response.data.hour,
      minute: response.data.minute,
      day: response.data.day,
    });
    setReady(true);
  }

  if (Date.ready) {
    return (
      <div className="dateTime">
        <h4>
          {date.weekDay}, {date.month} {date.day}, {date.year}
        </h4>
        <p>
          {date.hour}:{date.minute}
        </p>
      </div>
    );
  } else {
    const apiKey = "9vuJUzOUowYGoDPQhQ+kmw==mQ5WveFDbmBYuZqC";
    let apiUrl = `https://${apiKey}.api-ninjas.com/v1/worldtime?city=${city}`;

    axios.get(apiUrl).then(handleResponse);
    return "...";
  }
}
