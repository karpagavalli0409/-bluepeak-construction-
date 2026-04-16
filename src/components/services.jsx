import React from 'react';
import './services.css';
import residentialImg from '../assets/residential.png';
import commercialImg from '../assets/commercial.png';
import maintenanceImg from '../assets/maintenance.png';
import interiorImg from '../assets/interior.png';
import renovationImg from '../assets/renovation.png';
import architecturalImg from '../assets/architectural.png';

const servicesData = [
  {
    id: 1,
    title: 'Residential Construction',
    img: residentialImg,
    desc: 'Turnkey home builds with quality materials and timely delivery.'
  },
  {
    id: 2,
    title: 'Commercial Construction', 
    img: commercialImg,
    desc: 'Robust and scalable spaces designed for business growth.'
  },
  {
    id: 3,
    title: 'Maintenance Services',
    img: maintenanceImg,
    desc: 'Complete repair and upkeep solutions for your property.'
  },
  {
    id: 4,
    title: 'Interior Planning & Designing',
    img: interiorImg,
    desc: 'Interior solutions that bring elegance to your lifestyle.'
  },
  {
    id: 5,
    title: 'Renovation & Remodeling',
    img: renovationImg,
    desc: 'Upgrade and modernize existing structures with functional designs.'
  },
  {
    id: 6,
    title: 'Architectural Plans',
    img: architecturalImg,
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