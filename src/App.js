import React from "react";
import { GlobalStyles } from "./fonts/fonts";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import AboutUs from "./pages/AboutUs";
import WorkWithUs from "./pages/WorkWithUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/work_with_us" element={<WorkWithUs />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
