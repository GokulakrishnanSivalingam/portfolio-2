import React, { useState, useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import zee from'./img/zee.png'
import ecom from './img/ecom.png';
import stream from "./img/stream1.png";
import cal from "./img/cals.png"

function Project() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 ,once:true});
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="navbar">
     <div className="logo">GK</div> 
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

    <div className="proj"> <h1>Projects  I Have</h1></div> 
      <div className="container" >
      <div className="project" data-aos="fade-down">
         <a href="https://jetplex.vercel.app"><img src={stream} alt="" /></a> 
          <p>movie streaming site</p>
        </div>
        <div className="project" data-aos="fade-down">
       <a href="https://zeeshirts.vercel.app">  <img src={zee} alt="" /></a> 
          <p>Clothes e-com</p></div>
       
        <div className="project" data-aos="fade-down">
       <a href="https://gokulakrishnansivalingam.github.io/cgpa-calculator/loginpage.html">  <img src={cal} alt="" /></a> 
          <p>CGPA Calculator</p>
        
        </div>
        <div className="project" data-aos="fade-down">
       <a href="https://gokulakrishnansivalingam.github.io/cgpa-calculator/loginpage.html">  <img src={ecom} alt="" /></a> 
          <p>E-commerce(frontend)</p>
        
        </div>
   
      
      </div>
      
    
      
      <footer>
      <div class="footer-container">
    <div class="footer-section logo">
      <h1>GK</h1>
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

export default Project;
