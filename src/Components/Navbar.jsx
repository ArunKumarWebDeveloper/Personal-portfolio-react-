import React from "react";
import useDarkMode from "../hooks/Darkmode"; 
import logo from '../assets/logo.png';

function Navbar() {
  const [DarkMode, setDarkMode] = useDarkMode(); // ✅ Use the hook correctly

  return (
   
    <nav className="custom-navbar" aria-label="Main Navigation">
      <div className="logo-container">
        <a href="#">
          <img src= {logo} alt="Arun Kumar R Logo" className="logo" />
        </a>
      </div>
      <ul className="nav-links" id="navLinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#certificates">Certificates</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
       
      <button onClick={() => setDarkMode(prev => !prev)} id="darkMode">
        <img src="/dark-mode.png" alt="Toggle Dark Mode" />
      </button>
    </nav>
  );
}

export default Navbar;

