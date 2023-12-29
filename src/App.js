import React from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/nav_pages/Home";
import APKkalkyp from "./components/pages/nav_pages/APKkalkyp";
import BilligAlkohol from "./components/pages/nav_pages/BilligAlkohol";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/APKkalkyl" element={<APKkalkyp />} />
          <Route path="/BilligAlkohol" element={<BilligAlkohol />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
