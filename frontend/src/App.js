import React from "react";
import "./App.css";
import Enroll from "./components/Enroll";
import SearchF from "./components/SearchF";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchName from "./components/SearchName";
import Fruits from "./components/Fruits";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/enroll" element={<Enroll />} />
          <Route path="/" element={<SearchF />} />
          <Route path="/searchname" element={<SearchName />} />
          <Route path="/fruits" element={<Fruits />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
