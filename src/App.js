import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PlayerPage from "../src/components/playerPage/playerPage.js";
import TeamPage from "../src/components/team/teamPage.js";
import GameTeamsPage from "../src/components/game/gameTeams.js";
import GamePanelPage from "../src/components/gamesPanel/gamesPanel.js";
import Rental from "./components/rental/rental.js";
import Schedule from "./components/schedule/Schedule.js";
import League from "./components/league/league.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../src/components/home/home.js";

function App() {
  //return <Home></Home>;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<GamePanelPage />} />
      </Routes>
    </Router>
  );
}

export default App;
