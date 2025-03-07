import React from 'react';
import './Skills.css';
import h2 from "../img/h.jpeg";
import css from "../img/css.jpeg";
import js from "../img/js1.jpeg";
import node from "../img/node1.jpeg";
import r from "../img/r.jpeg";
import db from "../img/mongo.jpeg";

const Skills = () => {
  const skills = [
    { name: 'HTML', percentage: 90, image: h2 },
    { name: 'CSS', percentage: 85, image: css },
    { name: 'JavaScript', percentage: 80, image: js },
    { name: 'React', percentage: 85, image: r },
    { name: 'Node.js', percentage: 75, image: node },
    { name: 'MongoDB', percentage: 70, image: db },
  ];

  return (
    <div className="skills-section">
      <h1>Skills</h1>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index} data-aos="fade-up">
            <div className="skill-image">
              <img src={skill.image} alt={skill.name} />
              <div className="percentage-circle">
                <svg viewBox="0 0 36 36" className="circular-chart">
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#eee"
                    strokeWidth="3"
                  />
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#1367b1"
                    strokeWidth="3"
                    strokeDasharray={`${skill.percentage}, 100`}
                  />
                  <text x="18" y="20.35" className="percentage">{skill.percentage}%</text>
                </svg>
              </div>
            </div>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills; 