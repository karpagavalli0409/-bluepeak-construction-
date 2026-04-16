import React from 'react';
import './whychooseus.css';
import { FaHardHat, FaShieldAlt, FaClock, FaHeadset } from 'react-icons/fa';

const reasons = [
  {
    id: 1,
    icon: <FaHardHat />,
    title: 'Quality Work',
    desc: 'Premium materials & craftsmanship'
  },
  {
    id: 2,
    icon: <FaShieldAlt />,
    title: 'Safety First',
    desc: 'Strict safety protocols on site'
  },
  {
    id: 3,
    icon: <FaClock />,
    title: 'On Time Delivery',
    desc: 'Projects completed on schedule'
  },
  {
    id: 4,
    icon: <FaHeadset />,
    title: '24/7 Support',
    desc: 'Always available for clients'
  }
];

function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <div className="why-container">
        <h2 className="why-title">Why Choose Us</h2>
        <div className="why-grid">
          {reasons.map((item) => (
            <div className="why-card" key={item.id}>
              <div className="why-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;