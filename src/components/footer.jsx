import React from 'react';
import './footer.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <img src="/Construction-Website/buildhood.png" alt="BluePeak" className="footer-logo" />
          <p>Premium construction materials with guaranteed quality, price protection, and 24/7 support for your projects.</p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Our Services</h4>
          <ul>
            <li><a href="#">Residential Construction</a></li>
            <li><a href="#">Commercial Construction</a></li>
            <li><a href="#">Maintenance Services</a></li>
            <li><a href="#">Interior Planning & Designing</a></li>
            <li><a href="#">Renovation & Remodeling</a></li>
            <li><a href="#">Architectural Plans & Approvals</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact Us</h4>
          <ul className="contact-list">
            <li><FaMapMarkerAlt /> 123 Construction Ave, Building District, City 12345</li>
            <li><FaPhoneAlt /> +91-1234567890</li>
            <li><FaEnvelope /> info@supportconstruction.com</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2026 BluePeak Infra & Constructions. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;