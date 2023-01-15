import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <h1>{props.info.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.info.date} />
        </li>
        <li className="text-capitalize">{props.info.description}</li>
      </ul>
      <div className="row mt-4">
        <div className="col">
          <div className="d-flex align-aitem-center">
            {/* <WeatherIcon code={props.info.iconCode} size={52} /> */}
            <img
              src={props.info.iconUrl}
              alt={props.info.description}
              className="float-left"
            />
            <WeatherTemperature celsius={props.info.temperature} />
          </div>
        </div>
        <div className="col">
          <ul>
            <li>Humidity: {props.info.humidity}%</li>
            <li>Wind: {Math.round(props.info.wind)}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
