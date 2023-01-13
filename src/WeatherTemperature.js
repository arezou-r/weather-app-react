import { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenhiet(event) {
    event.preventDefault();
    setUnit("fahrenhiet");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenhiet() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="weatherTemperature">
        <span className="tempreture">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C {""}|{" "}
          <a href="/" onClick={convertToFahrenhiet}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="weatherTemperature">
        <span className="tempreture">{Math.round(fahrenhiet())}</span>
        <span className="unit">
          <a href="/" onClick={convertToCelsius}>
            °C{" "}
          </a>
          | °F
        </span>
      </div>
    );
  }
}
