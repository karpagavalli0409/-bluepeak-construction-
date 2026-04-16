import React from 'react';
import './navbar.css';
import logo from '../assets/buildhood.png'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        
        
        <div className="nav-logo">
          <img src={logo} alt="Buildhood Logo" />
          
        </div>

        
        <ul className="nav-menu">
          <li><a href="#" className="active">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Right Side Button */}
        <div className="nav-button">
          <button className="free-consult-btn">Free Consultation</button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;