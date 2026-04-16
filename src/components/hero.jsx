import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-container">
        
        
        <div className="hero-left">
          <h1>Build Your Future with <span>Confidence</span></h1>
          <p>Premium construction materials with guaranteed quality checks, price protection, and 24/7 project tracking.</p>
          <button className="hero-btn">Book Free Consultation</button>
        </div>

        
        <div className="hero-right">
          <form className="hero-form">
            <h3>Talk to Our Expert</h3>
            
            <input type="text" placeholder="Name" />
            <input type="tel" placeholder="+91 Phone Number" />
            
            <select defaultValue="">
              <option value="" disabled>Project Type</option>
              <option value="residential">Residential Construction</option>
              <option value="commercial">Commercial Construction</option>
              <option value="renovation">Renovation</option>
            </select>

            <select defaultValue="">
              <option value="" disabled>Location</option>
              <option value="chennai">Chennai</option>
              <option value="bangalore">Bangalore</option>
              <option value="hyderabad">Hyderabad</option>
              <option value="mumbai">Mumbai</option>
              <option value="delhi">Delhi NCR</option>
              <option value="other">Other Cities</option>
            </select>

            <button type="submit">Book Free Consultation</button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default Hero;