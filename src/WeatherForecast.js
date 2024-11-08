import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherForecast from "./WeatherForecast.css";
import axios from "axios";
export default function WeatherForecastDaily(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        {" "}
        <div className="row">
          <div className="col">
            {" "}
            <div className="WeatherForecast=day">thur</div>{" "}
            <WeatherIcon code="01d" size={36} />
            <div className="WeatherForecast-temperature">
              <span className="WeatherForecast-temperature-max">
                19° {"    "}
              </span>
              <span className="WeatherForecast-temperature-min">10°</span>
            </div>{" "}
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "79233a5db60c4d7o756058f6bt5c7434";
    let longitude = props.coords;
    let latitude = props.coords;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  return null;
}
