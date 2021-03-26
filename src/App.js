import React from "react";
import "./App.css";
import { Cards } from "./containers/Cards/Cards";
function App() {
  return (
    <div
      className="App"
      style={{ height: window.innerHeight, width: window.innerWidth }}
    >
      <Cards />
    </div>
  );
}

export default App;
