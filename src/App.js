import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import DungeonPage from "./pages/DungeonPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:expansion/:season/:dungeon" element={<DungeonPage />} />
      </Routes>
    </Router>
  );
}

export default App;
