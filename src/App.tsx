import React, { Component }  from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./asset/css/style.css"
import "./asset/css/animate.min.css"
import "./asset/css/demo-style.css"
import "./asset/css/easydropdown.css"
import "./asset/css/magnific-popup.css"
import "./asset/css/roadmap.css"
import "./asset/css/splitting-cells.css"
import "./asset/css/splitting.css"
import "./asset/css/swiper.min.css"
import Landing from "./Component/Pages/Landing";
import Dashboard from "./Component/Pages/Dashboard";


function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
