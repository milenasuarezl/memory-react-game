import React from "react";

import "./App.css";
import { Game } from "./components/Game";
import { Score } from "./components/Score";

function App() {
  return (
    <div className="App">
      <Game />
      <Score correct={10} incorrect={5} />
    </div>
  );
}

export default App;
