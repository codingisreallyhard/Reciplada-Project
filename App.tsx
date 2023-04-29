import React from "react";

import { Routes, Route } from "react-router-dom";
import NavbarFunction from "./components/Navbar";
import About from "./pages/About";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Services from "./pages/Services";

function App() {
  return (
    <>
      <div>
        <NavbarFunction />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Recipes" element={<Recipes />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
    </>
  );
}

export default App;
