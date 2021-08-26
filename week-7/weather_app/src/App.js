import logo from "./logo.svg";
import "./App.css";
import Forecast from "./components/Forecast/Forecast";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Happy Weather App</h1>
      </header>
      <main>
        <Forecast />
      </main>
      <footer>Weather App by Jen Huynh</footer>
    </div>
  );
}

export default App;
