import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];

  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let hours = props.date.getHours();
  if (hours > 12) {
    hours = `${hours - 12}:${minutes} pm`;
  }
  if (hours < 13) {
    hours = `${hours}:${minutes} am`;
  } else {
    <p>loading...</p>;
  }

  return (
    <div>
      {day} {hours}
    </div>
  );
}
