import React from 'react';
import './services.css';

const servicesData = [
  {
    id: 1,
    title: 'Residential Construction',
    img: '/construction-website/residential.png',
    desc: 'Turnkey home builds with quality materials and timely delivery.'
  },
  {
    id: 2,
    title: 'Commercial Construction', 
    img: '/construction-website/commercial.png',
    desc: 'Robust and scalable spaces designed for business growth.'
  },
  {
    id: 3,
    title: 'Maintenance Services',
    img: '/construction-website/maintenance.png',
    desc: 'Complete repair and upkeep solutions for your property.'
  },
  {
    id: 4,
    title: 'Interior Planning & Designing',
    img: '/construction-website/interior.png',
    desc: 'Interior solutions that bring elegance to your lifestyle.'
  },
  {
    id: 5,
    title: 'Renovation & Remodeling',
    img: '/construction-website/renovation.png',
    desc: 'Upgrade and modernize existing structures with functional designs.'
  },
  {
    id: 6,
    title: 'Architectural Plans',
    img: '/construction-website/architectural.png',
    desc: 'Detailed custom blueprints and approvals for every concept.'
  }
];

function Services() {
  return (
    <section className="services" id="services">
      <div className="services-container">
        <h2 className="services-title">Our Services</h2>
        <div className="services-grid">
          {servicesData.map((service) => (
            <div className="service-card" key={service.id}>
              <img src={service.img} alt={service.title} />
              <div className="service-overlay">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;