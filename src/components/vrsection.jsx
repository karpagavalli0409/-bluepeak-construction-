import React from 'react';
import './VRSection.css';
import { FaCheckCircle } from 'react-icons/fa';

function VRSection() {
  return (
    <section className="vr-section">
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
              <img src="/Construction Website/building-3d.png" alt="3D Building Model" />
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