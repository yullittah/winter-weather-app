import React from "react";
import "./weather.css";
import "./App.css";
export default function Weather() {
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
      <h1>Weather App </h1>
      <ul>
        <li>Wednesday 0700hrs</li>
        <li>Mostly cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="cloudy weather icon"
            />

            <span className="Temperature">15 </span>
            <span className="Units">°C{"  "}|{"  "}°F</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation 15mm</li>
            <li>wind 10km/hr</li>
            <li>humidity 98%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
