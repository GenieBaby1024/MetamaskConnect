import React, { Component }  from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./Component/Pages/Landing";


function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* <Route path="/builder/builder_scenes" element={<BuilderScenes />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
