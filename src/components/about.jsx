import React from 'react';
import './About.css';
import { FaUsers, FaTasks, FaSmile, FaHeadset, FaBullseye, FaEye, FaShieldAlt, FaStar, FaHandshake, FaUserTie } from 'react-icons/fa';

const stats = [
  { icon: <FaUsers />, number: '500+', text: 'Happy Clients' },
  { icon: <FaTasks />, number: '1,200+', text: 'Projects Completed' },
  { icon: <FaSmile />, number: '98.5%', text: 'Satisfaction Rate' },
  { icon: <FaHeadset />, number: '24/7', text: 'Support Available' },
];

const coreValues = [
  { icon: <FaShieldAlt />, title: 'Integrity', desc: 'We maintain complete transparency in pricing, communication, and project execution to build lasting trust.' },
  { icon: <FaStar />, title: 'Quality', desc: 'Strict quality checks and premium materials ensure every structure is strong, safe, and durable.' },
  { icon: <FaHandshake />, title: 'Commitment', desc: 'We are dedicated to delivering projects on time while maintaining the highest construction standards.' },
  { icon: <FaUserTie />, title: 'Customer Focus', desc: 'We design and build every project around our client’s vision, needs, and long term satisfaction.' },
];

const team = [
  { img: '/Construction Website/team1.png', name: 'Robert Anderson', role: 'Chief Executive Officer' },
  { img: '/Construction Website/team2.png', name: 'Jennifer Martinez', role: 'Head of Design' },
  { img: '/Construction Website/team3.png', name: 'Michael Thompson', role: 'Project Manager' },
  { img: '/Construction Website/team4.png', name: 'Sarah Williams', role: 'Head of Design' },
];

function About() {
  return (
    <section className="about-page" id="about">
      <div className="about-container">
        {/* 1. Simple Heading - Services mathiri */}
        <h2 className="about-title">About Us</h2>
        <p className="about-subtitle">
          BluePeak Infra & Constructions was founded with a clear mission — to bring transparency, quality, and reliability into the construction industry. We don't just construct buildings, we create strong foundations for dreams.
        </p>

        {/* 2. Stats */}
        <div className="stats-container">
          {stats.map((stat, i) => (
            <div className="stat-card" key={i}>
              <div className="stat-icon">{stat.icon}</div>
              <h3>{stat.number}</h3>
              <p>{stat.text}</p>
            </div>
          ))}
        </div>

        {/* 3. Our Story */}
        <div className="story-section">
          <div className="story-text">
            <h3>Our Story</h3>
            <p>What began as a small team of dedicated engineers and designers has grown into a trusted partner for residential and commercial projects, delivering structured planning, transparent pricing, and strict quality control at every stage. Over the years, we have successfully completed hundreds of projects, introduced advanced 3D design and VR walkthrough experiences, and built long-lasting relationships based on trust and performance.</p>
          </div>
          <div className="story-images">
            <img src="/Construction Website/about-story1.png" alt="Our team" className="story-img1"/>
            <img src="/Construction Website/about-story2.png" alt="Client meeting" className="story-img2"/>
          </div>
        </div>

        {/* 4. Mission & Vision */}
        <div className="mv-section">
          <div className="mv-card mission">
            <FaBullseye />
            <h4>Mission</h4>
            <p>To deliver high-quality residential and commercial construction services with transparency, precision, and timely execution. We are committed to maintaining strict quality standards, fair pricing, and structured project management.</p>
          </div>
          <div className="mv-card vision">
            <FaEye />
            <h4>Vision</h4>
            <p>To become a trusted and leading construction brand known for innovation, reliability, and excellence in engineering — building spaces that stand strong, inspire confidence, and create lasting value for generations.</p>
          </div>
        </div>

        {/* 5. Core Values */}
        <div className="values-section">
          <h3>Our Core Values</h3>
          <div className="values-grid">
            {coreValues.map((value, i) => (
              <div className="value-card" key={i}>
                <div className="value-icon">{value.icon}</div>
                <h4>{value.title}</h4>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Team */}
        <div className="team-section">
          <h3>Meet Our Team</h3>
          <p>Experienced professionals dedicated to your success</p>
          <div className="team-grid">
            {team.map((member, i) => (
              <div className="team-card" key={i}>
                <img src={member.img} alt={member.name} />
                <h4>{member.name}</h4>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 7. CTA */}
      <div className="about-cta">
        <h2>Join Our Growing Family</h2>
        <p>Be part of a team that's building the future of construction</p>
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

export default About;