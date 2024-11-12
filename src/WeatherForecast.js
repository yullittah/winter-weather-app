import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";
export default function WeatherForecast(props) {
  console.log(props);
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    //console.log(forecast);
    return (
      <div className="WeatherForecast">
        {" "}
        <div className="row">
          <div className="col">
            {" "}
            <div className="WeatherForecast=day">
              {forecast[0].temperature.time}
            </div>{" "}
            <div className="time"> {forecast[0].time}</div>
            <WeatherIcon life={forecast[0].weather[0].icon} size={36} />
            <div className="WeatherForecast-temperature">
              <span className="WeatherForecast-temperature-max">
                {forecast[0].temperature.maximum}° {"    "}
              </span>
              <span className="WeatherForecast-temperature-min">
                {forecast[0].temperature.minimum}°
              </span>
            </div>{" "}
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "79233a5db60c4d7o756058f6bt5c7434";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }

  return null;
}
