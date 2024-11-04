import React, { useEffect } from "react";
import "./Roadmap.css";
import { FaCircle } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const timelineData = [
  
  {
    yearRange: "2019 - 2020",
    title: "10TH",
    location: "Senthamangalam, Villupuram",
    description: "I studied my 10th standard at SSV Higher Secondary School in Villupuram.",
  },
  {
    yearRange: "2021 - 2022",
    title: "12TH",
    location: "Senthamangalam, Villupuram",
    description: "I studied my 12th standard at SSV Higher Secondary School in Villupuram.",
  },
  {
    yearRange: "2022 - Present",
    title: "Velammal Engineering College",
    location: "Ambattur, Chennai",
    description: "I am currently pursuing my engineering degree in Computer Science Engineering at Velammal Engineering College, Chennai.",
  },
];

function Roadmap() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="timeline-container">
      <div className="timeline">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="timeline-content" data-aos="flip-down">
              <span className="timeline-date">{item.yearRange}</span>
              <h2>{item.title}</h2>
              <p className="location">{item.location}</p>
              <p className="dis">{item.description}</p>
            </div>
            <div className="timeline-marker">
              <FaCircle size={12} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Roadmap;
