import React from "react";
import FormattedDate from "./FormattedDate";
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>

        <li className="text-capitalize">{props.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img src={props.data.iconUrl} alt={props.data.description} />

            <span className="Temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="Units">
              °C{"  "}|{"  "}°F
            </span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Wind speed:{props.data.wind}km/hr</li>
            <li>Humidity:{props.data.humidity}%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}