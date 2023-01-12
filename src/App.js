import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by Arezou Ruohi and is
          <a
            href="https://github.com/arezou-r/weather-app-react"
            target="_blank"
            rel="noreferer noreferrer"
          >
            {" "}
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
