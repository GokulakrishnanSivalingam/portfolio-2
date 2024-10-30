import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Project from "./Project.jsx";


function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/project" element={<Project />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default Index;
