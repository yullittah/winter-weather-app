import React, { useState } from "react";

export default function Units(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="degrees">
        {" "}
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">°C</span> |
        <span className="unit">
          {" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="degrees">
        {" "}
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          <a href="/" onClick={showCelsius}>
            °C
          </a>
        </span>{" "}
        |<span className="unit"> °F </span>
      </div>
    );
  }
}
