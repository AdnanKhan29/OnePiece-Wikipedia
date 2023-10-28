import React from "react";
import "./App.css";
import Enroll from "./components/Enroll";
import SearchF from "./components/SearchF";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchName from "./components/SearchName";
import Fruits from "./components/Fruits";
import ImageGallery from "./components/ImageGallery";
import Imagetest from "./components/Imagetest";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/enroll" element={<Enroll />} />
          <Route path="/" element={<SearchF />} />
          <Route path="/searchname" element={<SearchName />} />
          <Route path="/fruits" element={<Fruits />} />
          <Route path="/image" element={<Imagetest />} />
          <Route path="/gallery" element={<ImageGallery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
