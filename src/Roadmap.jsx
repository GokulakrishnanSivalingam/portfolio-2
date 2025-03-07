import React, { useEffect } from 'react';
import './Roadmap.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Map() {
  // Check if device is mobile
  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: false,
      easing: 'ease-out-cubic'
    });
  }, []);

  return (
    <div className="roadmap-container">
      <h1>My Journey</h1>
      <div className="timeline">
        {timelineData.map((item, index) => (
          <div 
            key={index}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            data-aos={isMobile ? "fade-right" : index % 2 === 0 ? "fade-right" : "fade-left"}
            data-aos-delay={isMobile ? index * 100 : 0}
          >
            <div className="timeline-content">
              <h2>{item.year}</h2>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const timelineData = [
  {
    year: '2021',
    title: 'Started Programming',
    description: 'Began learning programming fundamentals and web development basics'
  },
  {
    year: '2022',
    title: 'Frontend Development',
    description: 'Mastered HTML, CSS, JavaScript and started learning React'
  },
  {
    year: '2023',
    title: 'Full Stack Development',
    description: 'Learned Node.js, Express, and MongoDB for backend development'
  },
  {
    year: '2024',
    title: 'Advanced Projects',
    description: 'Building full-stack applications and exploring new technologies'
  }
];

export default Map;
