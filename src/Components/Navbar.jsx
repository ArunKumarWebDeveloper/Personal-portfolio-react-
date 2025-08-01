import React from "react";
import useDarkMode from "../hooks/Darkmode"; 
import useMobileMenu from './../hooks/useMobileMenu'; 


function Navbar() {
   const { isMenuOpen, toggleMenu, hamburgerRef, navLinksRef } = useMobileMenu();
  const [DarkMode, setDarkMode] = useDarkMode(); // ✅ Use the hook correctly

  return (
   
    <nav className="custom-navbar" aria-label="Main Navigation" >
      <div className="logo-container">
        <a href="#">
          <img src= "/logo.png" alt="Arun Kumar R Logo" className="logo" />
        </a>
      </div>
   <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`} id="navLinks" ref={navLinksRef}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#certificates">Certificates</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
       
<div className="nav-actions">

      <button onClick={() => setDarkMode(prev => !prev)} id="darkMode">
        <img class="dark-mode-icon" src={DarkMode ? '/sun.png' : '/moon.png'} alt="Toggle Dark Mode" />
      </button>
      <div
        className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`}
        id="hamburgerMenu"
        ref={hamburgerRef} 
        onClick={toggleMenu} 
         >
        <span></span>
        <span></span>
        <span></span>
      </div>
      </div>
    </nav>
 
  );
}

export default Navbar;





