import React, { Component }  from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./asset/css/style.css"
import Landing from "./Component/Pages/Landing";
import Planet from "./Component/Pages/Planet";


function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/planet" element={<Planet />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
