import React from 'react';
import './vrsection.css';
import { FaCheckCircle } from 'react-icons/fa';
import building3dimg from '../assets/building-3d.png';
import heroBg from '../assets/hero-bg.png';

function VRSection() {
  return (
    <section className="vr-section" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="vr-overlay">
        <div className="vr-container">
          
          <div className="vr-left">
            <h2>Experience Your Project in Virtual Reality</h2>
            <p>
              Walk through your construction project before it's built. Our VR technology lets you 
              visualize every detail, make changes in real-time, and ensure everything meets your 
              expectations.
            </p>
            <ul className="vr-features">
              <li><FaCheckCircle /> Immersive 3D visualization</li>
              <li><FaCheckCircle /> Real-time modifications</li>
              <li><FaCheckCircle /> Multi-user collaboration</li>
              <li><FaCheckCircle /> Cost-saving insights</li>
            </ul>
            <button className="vr-btn">Book Free Consultation</button>
          </div>

          <div className="vr-right">
            <div className="vr-card">
              <img src={building3dimg} alt="3D Building Model" />
              <div className="vr-badge badge-top">Active Projects<br/><span>1,247</span></div>
              <div className="vr-badge badge-bottom">Success Rate<br/><span>98%</span></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default VRSection;