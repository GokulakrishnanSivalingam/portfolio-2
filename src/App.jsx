import React, { useState, useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import pdf from'./img/Gokulakrishnan-resume.pdf'
import dis from "./img/discuss.gif"
import p1 from "./img/p2.gif";
import css from "./img/css.png";
import h2 from "./img/html.png";
import js from "./img/js.png";
import node from "./img/node.png";
import db from "./img/mongo.png";
import ex from "./img/ex.png";
import zee from'./img/zee.png';
import {Link} from 'react-router-dom';
import { GrLinkNext } from "react-icons/gr";
import r from "./img/react.png";
import p from "./img/p.jpeg";
import Map from './Roadmap.jsx'
import stream from "./img/stream1.png";
import github from "./img/github.png";
import git from "./img/git.png";
import cr from "./img/cr.png"
import farm from "./img/farm.png"
import { LuExternalLink } from "react-icons/lu";
import { ImGithub } from "react-icons/im";
import Three from './Three.jsx';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";




function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
    AOS.init({ duration: 1000, once: true });

    // Add scroll event listener
    const handleScroll = () => {
      const sections = ['home', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= window.innerHeight / 2;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div >
     <center><nav className="navbar">
     <div className="logu">GK</div> 
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
     <li><a href="/">home</a></li>  
           <li><Link to="/project">projects</Link></li>
          <li><a href="mailto:sivalingamgokulakrishnan@gmail.com">Contact</a></li>
         <li><a href="https://github.com/GokulakrishnanSivalingam?tab=overview&from=2024-09-01&to=2024-09-30">Github</a></li>
         <li><a href="https://www.linkedin.com/in/gokulakrishnan-s-01890b312/">Linked-in</a></li>
        </ul>
        
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav></center>

      <div className="cont" id="home">
        <div className="info" data-aos="fade-up" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <h1 className={isHovered ? 'text-focus' : ''}>Hello there!, Iam Gokulakrishnan </h1>
        
          <p>
            Aspring talent in web development using React for building dynamic, responsive front-end interfaces and Express.js for efficient backend APIs.
          </p>
          <a href={pdf} download className={isHovered ? 'button-hover' : ''}> <button>Resume  <GrLinkNext/></button></a>
        </div>
        <div className="info2" >
          {mounted && <Three />}
        </div>
      </div>
      <Map/>
<h1>thing i do</h1>
<div className="container1">
  <div className="domain" data-aos="fade-up">
    <img src="https://i.pinimg.com/originals/e8/d8/3e/e8d83e14bb6d1874f85d36213b1dac40.gif" alt="" />
    <p>frontend development</p>
  </div>
  <div className="domain" data-aos="fade-up">
    <img src="https://i.pinimg.com/originals/fa/da/ac/fadaaccbe42be76393b341017b735367.gif" alt="" />
    <p>backend development</p>
  </div>
  <div className="domain" data-aos="fade-up" >
    <img src='https://i.pinimg.com/originals/05/cd/9a/05cd9a0bb4c72e5ba98ece031987955d.gif'alt="" />
    <p>App development</p>
  </div>
</div>
      <h1>Skills I Have </h1><div className="con-skills">
      <div className="skills" >
      <div className="skills-img" > <a href="https://www.html.com" > <img src={h2} alt="HTML" data-aos="fade-up"/></a> </div>
      <div className="skills-img" ><a href="https://developer.mozilla.org/en-US/docs/Web/CSS"> <img src={css} alt="CSS"data-aos="fade-up" /></a> </div>
     <div className="skills-img" ><a href="https://www.javascript.com"> <img src={js} alt="JavaScript" data-aos="fade-up"/></a> </div>
      <div className="skills-img" ><a href="https://react.dev/"><img src={r} alt="React" data-aos="fade-up"/></a> </div>
      <div className="skills-img" ><a href="https://nodejs.org/en"> <img src={node} alt="Node.js" data-aos="fade-up"/></a> </div>
     <div className="skills-img" ><a href="https://expressjs.com/"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxt7JGfZWdh-XHj43XQEGB4JNWQEcxFSw7Ag&s" alt="Express.js" data-aos="fade-up"/></a> </div>
      <div className="skills-img" ><a href="https://www.mongodb.com"> <img src={db} alt="MongoDB" data-aos="fade-up"/></a> </div>
     <div className="skills-img" > <a href="https://www.postman.com/"> <img src="data:image/png;base64,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" alt="" data-aos="fade-up"/></a> </div>
           <div className="skills-img" ><a href="https://www.github.com/"> <img src={github} alt="" data-aos="fade-up"/></a> </div>
            <div className="skills-img" ><a href="https://www.postman.com/"> <img src={git} alt="" data-aos="fade-up"/></a> </div>
        <div className="skills-img" ><a href="https://www.vercel.com/"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnjSqXz_mKhvp-05665z75rscs15in6GXTGuC9GlBnp5-AoUFLnw9Or6MfcZmewqW331w&usqp=CAU" alt="" data-aos="fade-up"/></a> </div>
           <div className="skills-img" > <a href="https://www.nodemon.com/"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRykRTdDJ3ww4V5zBUAMxY3Fyzg_7RXyOVNg&s" alt="" data-aos="fade-up"/></a> </div>
      </div></div>
      
      <h1>Projects </h1>
      <div className="project-count" data-aos="fade-up">
        <div className="count" >
          <h1>20+</h1>
          <p>Total projects</p>
        </div>       
        <div className="count" >
          <h1>13</h1>
          <p>Static projects</p>
        </div>  
        <div className="count" >
          <h1>7</h1>
          <p>Dynamic projects</p>
        </div>               
      </div>
    <div className="proj"> <h1>Projects Demo</h1></div> 
      <div className="container" >
      <div className="project" data-aos="fade-up">
 <img src={cr} alt="" />
 <div className="v">   <p>Crisis Management</p> <a href="https://crisiz.online"> <button><LuExternalLink/></button></a> </div>
        
        </div>
        <div className="project" data-aos="fade-up">
 <img src={zee} alt="" />
 <div className="v">   <p>Clothes e-com</p><a href="https://zeeshirts.vercel.app">
 <p></p> <button><LuExternalLink/></button></a> </div>
          </div>
          <div className="project" data-aos="fade-up">
 <img src={farm} alt="" />
 <div className="v">   <p>Farm Fresh</p>       <a href="https://farmfreshs.vercel.app/"> <button><LuExternalLink/></button></a> </div>
        
        </div>
   
      
      </div>
      <center><Link to="/project"><button >see more</button></Link></center>
      <center> <div className="discuss" data-aos="fade-right">
  <div className="discuss-img"> <img src={dis} alt="" /></div> 
  <div className="discuss-button"> <h2>Have a project mind !! </h2><button><a href="mailto:sivalingamgokulakrishnan@gmail.com">let discuss</a>
    </button></div> 
   </div></center><div className="github">
   <center> <h1 >Github Stats</h1></center>
<div className="stats" data-aos="fade-up">  <img 
        src="https://github-readme-stats.vercel.app/api?username=GokulakrishnanSivalingam&hide_border=false&include_all_commits=false&count_private=false" 
        alt="GitHub Stats" 
       
      /></div> 
      
      <div className="stats" data-aos="fade-up"> <img 
        src="https://github-readme-streak-stats.herokuapp.com/?user=GokulakrishnanSivalingam&hide_border=false" 
        alt="GitHub Streak" 
        
      /></div> 
      
      <div className="stats" data-aos="fade-up"> <img 
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=GokulakrishnanSivalingam&hide_border=false&include_all_commits=false&count_private=false&layout=compact" 
        alt="Top Languages" 
       
      /></div>
      <h1 >Leetcode Stats</h1> 
      <div className="stats" data-aos="fade-up"> <img 
        src="https://leetcard.jacoblin.cool/Gokula_krishnan_007?theme=light&font=changa&ext=activity" 
        alt="Top Languages" 
       
      /></div></div>
    
      
      <footer>
      <div className="footer-container">
    <div className="footer-section logo">
      <h1>GK</h1>
      <p>Aspiring web developer crafting elegant solutions with React and Express.js</p>
      <div className="socials">
        <a href="https://github.com/GokulakrishnanSivalingam" className="social-icon" target="_blank" rel="noopener noreferrer">
     <div className="i"><ImGithub/></div>  
        </a>
        <a href="https://www.linkedin.com/in/gokulakrishnan-s-01890b312/" className="social-icon" target="_blank" rel="noopener noreferrer">
        <div className="i"> <FaLinkedin/></div>
        </a>
        <a href="mailto:sivalingamgokulakrishnan@gmail.com" className="social-icon">
        <div className="i"> <IoMdMail/></div>
        </a>
        <a href="https://instagram.com/__gokul_bala__" className="social-icon" target="_blank" rel="noopener noreferrer">
         <div className="i"> <FaInstagram/></div>
        </a>
      </div>
    </div>
   
    <div className="footer-section contact">
      <h2>Contact Info</h2>
      <div className="contact-info">
        <IoMdMail/>
        <p>sivalingamgokulakrishnan@gmail.com</p>
      </div>
      <div className="contact-info">
        <IoCall/>
        <p>+91 9876543210</p>
      </div>
      <div className="contact-info">
<FaLocationDot/>
      <p>Tamil Nadu, India</p>
      </div>
    </div>
  </div>
</footer>

    </div>
  );
}

export default App;