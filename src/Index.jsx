import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Project from "./Project.jsx";
import Contact from "./Contact.jsx"
import Stats from "./Stats.jsx";

function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/stats" element={<Stats/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default Index;
