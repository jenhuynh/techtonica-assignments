import logo from "./logo.svg";
// import WeatherCard from "./components/WeatherCard";
import "./App.css";
import Forecast from "./components/Forecast/Forecast";
// import WeatherList from "./components/WeatherList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Happy Weather App</h1>
      </header>
      <main>
        <Forecast />
        {/* dt is in unix-seconds but javascript uses milliseconds, multiply with 1000 */}
        {/* <WeatherCard
          dt={1602104400 * 1000}
          temp_min="22.67"
          temp_max="24.39"
          main="Clear"
          icon="01d"
        />  */}
      </main>
      <footer>Weather App by Jen Huynh</footer>
    </div>
  );
}

export default App;
