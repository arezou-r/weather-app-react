import FormattedDate from "./FormattedDate";

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
            <img
              src={props.info.iconUrl}
              alt={props.info.description}
              className="float-left"
            />
            <span className="tempreture">
              {Math.round(props.info.temperature)}
            </span>
            <span className="unit">°C | °F</span>
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
