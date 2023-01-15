export default function WeatherForecastDay(props) {
  console.log(props.forecastData);
  function day() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let date = new Date(props.forecastData.time * 1000);
    let day = date.getDay();
    return days[day];
  }

  function maxTemp() {
    let temperature = Math.round(props.forecastData.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.forecastData.temperature.minimum);
    return `${temperature}°`;
  }

  return (
    <div>
      <div className="weatherForecast-day">{day()}</div>
      <img
        src={props.forecastData.condition.icon_url}
        alt={props.forecastData.condition.description}
        className="float-left"
      />
      <div className="weatherForecast-temp">
        <span className="weatherForecast-temp-max">{maxTemp()}</span>
        <span className="weatherForecast-temp-min">{minTemp()}</span>
      </div>
    </div>
  );
}
