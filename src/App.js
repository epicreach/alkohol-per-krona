import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/nav_pages/Home";
import APKkalkyp from "./components/pages/nav_pages/APKkalkyp";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/APKkalkyl" element={<APKkalkyp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
