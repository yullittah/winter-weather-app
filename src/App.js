import WeatherApp from "./weather";
import "./weather.css";
import "./App.css";
function App() {
  return (
    <div className="App">
      <WeatherApp city="Harare" />
      <footer>
        coded by Yullittah and open sourced on{" "}
        <a
          href="https://github.com/yullittah/weather-app-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>{" "}
      </footer>{" "}
    </div>
  );
}

export default App;
