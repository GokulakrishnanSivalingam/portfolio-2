import React, { useState, useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import pdf from'./img/gokulakrishnan.pdf'
import { FaHome } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import dis from "./img/discuss.gif"
import { MdFileDownload } from "react-icons/md";
import p1 from "./img/p2.gif";
import css from "./img/css.jpeg";
import h2 from "./img/h.jpeg";
import js from "./img/js1.jpeg";
import node from "./img/node1.jpeg";
import db from "./img/mongo.jpeg";
import ex from "./img/ex1.jpeg";
import r from "./img/r.jpeg";
import p from "./img/p.jpeg";
import ecom from "./img/ecom.png";
import stream from "./img/stream1.png";
import cal from "./img/cals.png"

function App() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="navbar">
     <div className="logo">Portfolio</div> 
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
     <li><a href="/">home</a></li>  
          <li><a href="mailto:sivalingamgokulakrishnan@gmail.com">Contact</a></li>
         <li><a href="https://github.com/GokulakrishnanSivalingam?tab=overview&from=2024-09-01&to=2024-09-30">Github</a></li>
         <li><a href="https://www.linkedin.com/in/gokulakrishnan-s-01890b312/">Linked-in</a></li>
        </ul>
        
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>

      <div className="cont">
        <div className="info" data-aos="fade-down">
          <h1>Hello,Iam Gokulakrishnan </h1>
        
          <p>
            Aspring talent in web development using React for building dynamic, responsive front-end interfaces and Express.js for efficient backend APIs.
          </p>
          <a href={pdf} download> <button>Resume  </button></a>
        </div>
        <div className="info2" data-aos="">
          <img src={p1} alt="Profile" />
        </div>
      </div>

      <h1>Skills I Have </h1><div className="con-skills">
      <div className="skills" data-aos="fade-up">
      <a href="https://www.html.com" > <img src={h2} alt="HTML" data-aos="fade-up"/></a> 
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"> <img src={css} alt="CSS"data-aos="fade-up" /></a> 
      <a href="https://www.javascript.com"> <img src={js} alt="JavaScript" data-aos="fade-up"/></a> 
      <a href="https://react.dev/"><img src={r} alt="React" data-aos="fade-up"/></a> 
      <a href="https://nodejs.org/en"> <img src={node} alt="Node.js" data-aos="fade-up"/></a> 
      <a href="https://expressjs.com/"> <img src={ex} alt="Express.js" data-aos="fade-up"/></a> 
      <a href="https://www.mongodb.com"> <img src={db} alt="MongoDB" data-aos="fade-up"/></a> 
      <a href="https://www.postman.com/"> <img src={p} alt="" data-aos="fade-up"/></a> 
      </div>
      </div>
    <div className="proj"> <h1>Projects  I Have</h1></div> 
      <div className="container" >
      <div className="project" data-aos="fade-down">
         <a href="https://movie-stream-gules.vercel.app/"><img src={stream} alt="" /></a> 
          <p>movie streaming site</p>
        </div>
        <div className="project" data-aos="fade-down">
        <a href="https://gokulakrishnansivalingam.github.io/e-comerce/mobile.html"><img src={ecom} alt="" /></a>
          <p>Ecommerce (front-end)</p>
        </div>
       
        <div className="project" data-aos="fade-down">
       <a href="https://gokulakrishnansivalingam.github.io/cgpa-calculator/loginpage.html">  <img src={cal} alt="" /></a> 
          <p>CGPA Calculator</p>
        
        </div>
      
      
      </div>
      <center> <div className="discuss" data-aos="fade-right">
    <img src={dis} alt="" />
   <h2>Have a project mind !! </h2><button><a href="mailto:sivalingamgokulakrishnan@gmail.com">let discuss</a>
    </button>
   </div></center> 
      <footer>
      <div class="footer-container">
    <div class="footer-section logo">
      <h1>Portfolio</h1>
      <p>Elegance meets excellence. Discover the difference with us.</p>
      <div class="socials">
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
      </div>
    </div>
    
    <div class="footer-section newsletter">
      <h2>contact</h2>
      <p>if any queries contact me</p>
      <form action="#" method="post">
        <input type="text" name="email" placeholder="Enter your email" required/>
    

      </form>
    </div>
  </div>
  
</footer>

    </div>
  );
}

export default App;
