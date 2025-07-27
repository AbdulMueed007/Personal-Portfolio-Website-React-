import Navbar from "./components/Navbar.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Herosection from "./components/Herosection.js";
import Footer from "./components/Footer.js";
import About from "./components/About.js";
import Education from "./components/Education.js";
import Skills from "./components/Skills.js";
import Project from "./components/Project.js";
import Contact from "./components/Contact.js";
import React from "react";

function App() {
  return (
    <>
      <Router>
              <Navbar name="MyPortfolio" />
        <Routes>
            <Route path="/" element=
            {
               <>
                <Herosection />
               </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/hero" element={<Herosection />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
