import axios from "axios";
import { useState } from "react";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const apiKey = "d57ba12fe2c36fb7d6e4a542d490147c";

  function handleResponse(response) {
    console.log(response.dada);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>Tehran</h1>
        <ul>
          <li></li>
          <li className="text-capitalize"></li>
        </ul>
        <div className="row mt-4">
          <div className="col">
            <div className="d-flex align-aitem-center">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/snow_light.png"
                alt="img"
                className="float-left"
              />
              <span className="tempreture">6</span>
              <span className="unit">°C | °F</span>
            </div>
          </div>
          <div className="col">
            <ul>
              <li>Humidity: {}%</li>
              <li>Wind: {}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
