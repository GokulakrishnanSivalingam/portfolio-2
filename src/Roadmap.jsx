import React from 'react';
import './Roadmap.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Map() {
  return (
    <div className="roadmap-container">
      <h1>My Journey</h1>
      <div className="timeline">
        <div className="timeline-item left" data-aos="fade-right" data-aos-duration="1000" data-aos-offset="300">
          <div className="timeline-content">
            <h2>2021</h2>
            <h3>Started Programming</h3>
            <p>Began learning programming fundamentals and web development basics</p>
          </div>
        </div>

        <div className="timeline-item right" data-aos="fade-left" data-aos-duration="1000" data-aos-offset="300">
          <div className="timeline-content">
            <h2>2022</h2>
            <h3>Frontend Development</h3>
            <p>Mastered HTML, CSS, JavaScript and started learning React</p>
          </div>
        </div>

        <div className="timeline-item left" data-aos="fade-right" data-aos-duration="1000" data-aos-offset="300">
          <div className="timeline-content">
            <h2>2023</h2>
            <h3>Full Stack Development</h3>
            <p>Learned Node.js, Express, and MongoDB for backend development</p>
          </div>
        </div>

        <div className="timeline-item right" data-aos="fade-left" data-aos-duration="1000" data-aos-offset="300">
          <div className="timeline-content">
            <h2>2024</h2>
            <h3>Advanced Projects</h3>
            <p>Building full-stack applications and exploring new technologies</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;
