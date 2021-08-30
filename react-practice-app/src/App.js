import logo from "./logo.svg";
import "./App.css";
import Parent from "./Parent.js";
import Child from "./Child.js";

export default function App() {
  return (
    <div className="App">
      <Parent />
      <Child />
    </div>
  );
}
