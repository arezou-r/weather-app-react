import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast() {
  let apiKey = "3794cado846aa024tdda83fba00effa9";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=Tehran&key=${apiKey}&units=metric`;

  function handleResponse(response) {
    console.log(response);
  }

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="weatherForecast">
      <div className="row">
        <div className="col">
          <div className="weatherForecast-day">Thu</div>

          <div className="weatherForecast-temp">
            <span className="weatherForecast-temp-max">19°</span>
            <span className="weatherForecast-temp-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
