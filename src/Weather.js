import "./Weather.css";

export default function Weather() {
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
        <li></li>
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
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
