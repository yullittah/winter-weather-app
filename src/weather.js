import React, { useState } from "react";
import "./weather.css";
import "./App.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setweatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response);
    setweatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
    });
  }
  if (weatherData.ready) {
    return (
      <div className="app">
        <form>
          <div className="row">
            <div className="col-9">
              {" "}
              <input
                type="search"
                placeholder="Enter a city . . ."
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{props.city}</h1>
        <ul>
          <li>
            <FormattedDate date={weatherData.date} />
          </li>

          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img src={weatherData.iconUrl} alt={weatherData.description} />

              <span className="Temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="Units">
                °C{"  "}|{"  "}°F
              </span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Wind speed:{weatherData.wind}km/hr</li>
              <li>Humidity:{weatherData.humidity}%</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "62bc298785543e137bc6756e514eb1c3";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }
  return <div>loading...</div>;
}
