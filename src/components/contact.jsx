import React, { useState } from 'react';
import './Contact.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    location: 'Chennai',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Message sent successfully!');
  };

  return (
    <section className="contact-page" id="contact">
      <div className="contact-container">
        {/* 1. Heading - ippo correct ah center la varum */}
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-subtitle">
          Have a project in mind? Get in touch with BluePeak Infra & Constructions today. 
          Our experts are ready to guide you from planning to completion.
        </p>

        {/* 2. Wrapper - Idhukulla dhan 2 column iruku */}
        <div className="contact-wrapper">
          {/* Left: Info Cards */}
          <div className="contact-info">
            <h3>We're here to help, <span>anytime</span></h3>
            
            <div className="info-grid">
              <div className="info-card">
                <FaMapMarkerAlt />
                <h4>Office Address</h4>
                <p>BluePeak Infra & Constructions<br/>Chennai, Tamil Nadu, India</p>
              </div>
              <div className="info-card">
                <FaPhoneAlt />
                <h4>Phone Number</h4>
                <p>+1 (555) 123-4567<br/>+1 (555) 987-6543</p>
              </div>
              <div className="info-card">
                <FaEnvelope />
                <h4>Email Address</h4>
                <p>info@bluepeak.com<br/>support@bluepeak.com</p>
              </div>
              <div className="info-card">
                <FaClock />
                <h4>Business Hours</h4>
                <p>Monday - Friday: 9:00 AM - 6:00 PM<br/>Saturday: 9:00 AM - 4:00 PM<br/>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-form">
            <h3>Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" name="email" placeholder="Enter Email Address" onChange={handleChange} required />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" name="phone" placeholder="+91 Phone Number" onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Project Type</label>
                  <select name="projectType" onChange={handleChange}>
                    <option value="">Select type</option>
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Renovation">Renovation</option>
                    <option value="Interior">Interior</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Location</label>
                <select name="location" value={formData.location} onChange={handleChange}>
                  <option value="Chennai">Chennai</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Coimbatore">Coimbatore</option>
                  <option value="Trichy">Trichy</option>
                </select>
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea name="message" placeholder="Tell us about your project..." rows="4" onChange={handleChange}></textarea>
              </div>

              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>

      {/* 3. Map - Idhu keela varum. Scroll panna dhan theriyum */}
      <div className="map-section">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d80.0681984!3d13.0479877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4f13.1" 
          width="100%" 
          height="400" 
          style={{border:0}} 
          allowFullScreen="" 
          loading="lazy"
          title="BluePeak Location">
        </iframe>
      </div>

      {/* 4. CTA */}
      <div className="contact-cta">
        <h2>Ready to Start Your Construction Journey?</h2>
        <p>Book a free technical consultation and get a transparent cost estimate for your project</p>
        <button>Book Free Consultation Today</button>
        <div className="cta-badges">
          <span>• ISO Certified</span>
          <span>• Quality Assured</span>
          <span>• Trusted Partner</span>
        </div>
      </div>
    </section>
  );
}

export default Contact;