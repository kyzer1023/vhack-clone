import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MeetTheTeam from "./components/MeetTheTeam";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MeetTheTeam />} />
      </Routes>
    </Router>
  );
}

export default App;
