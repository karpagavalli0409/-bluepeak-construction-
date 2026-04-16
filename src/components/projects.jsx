import React, { useState } from 'react';
import './projects.css';
import { FaArrowRight } from 'react-icons/fa';
import pro1 from '../assets/pro1.png';
import pro2 from '../assets/pro2.png';
import pro3 from '../assets/pro3.png';
import pro4 from '../assets/pro4.png';
import pro5 from '../assets/pro5.png';
import pro6 from '../assets/pro6.png';

const projectsData = [
  {
    id: 1,
    title: 'Lakeview Villa - Chennai',
    location: 'Chennai | 3,200 Sq.ft',
    img: pro1,
    category: 'Residential'
  },
  {
    id: 2,
    title: 'Metro Business Hub - Bangalore',
    location: 'Bangalore | 12,000 Sq.ft',
    img: pro2,
    category: 'Commercial'
  },
  {
    id: 3,
    title: 'Green Meadows Residence',
    location: 'Coimbatore | 2,400 Sq.ft',
    img: pro3,
    category: 'Residential'
  },
  {
    id: 4,
    title: 'Skyline Retail Plaza',
    location: 'Hyderabad | 8,500 Sq.ft',
    img: pro4,
    category: 'Commercial'
  },
  {
    id: 5,
    title: 'Heritage Home Renovation',
    location: 'Chennai | 1,800 Sq.ft',
    img: pro5,
    category: 'Renovation'
  },
  {
    id: 6,
    title: 'Palm Grove Apartments',
    location: 'Trichy | 15,000 Sq.ft',
    img: pro6,
    category: 'Residential'
  }
];

const categories = ['All', 'Residential', 'Commercial', 'Interior', 'Renovation'];

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        {/* Ippo Services mathiri simple heading */}
        <h2 className="projects-title">Our Projects</h2>
        <p className="projects-subtitle">
          Every project reflects our commitment to quality, transparency, and timely delivery. 
          Explore our completed and ongoing projects across residential and commercial sectors.
        </p>

        <div className="filter-buttons">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={activeFilter === cat ? 'active' : ''}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div className="project-card" key={project.id}>
              <img src={project.img} alt={project.title} />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.location}</p>
                <a href="#">View Project <FaArrowRight /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;