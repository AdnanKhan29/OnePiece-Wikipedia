import React from "react";
import "./App.css";
import Enroll from "./components/Enroll";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Enroll />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
