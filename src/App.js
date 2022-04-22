import React from "react";
import { GlobalStyles } from "./fonts/fonts";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Information from "./pages/Information";
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
          <Route path="/informacoes" element={<Information />} />
          <Route path="/trabalhe_conosco" element={<WorkWithUs />} />
          <Route path="/matricula" element={<Registration />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
