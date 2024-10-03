import React, { useState, useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


import node from "./img/node1.jpeg";
import db from "./img/mongo.jpeg";
import ex from "./img/ex1.jpeg";
import r from "./img/r.jpeg";
import p from "./img/p.jpeg";
import ecom from "./img/ecom.png";

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
          <li><a href="">Contact</a></li>
          <li><a href="">Project</a></li>
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
 
  
  <div style={styles.h1}>  <h1>Projects</h1></div>  
      <div className="container" >
        <div className="project" data-aos="fade-down">
        <a href="https://gokulakrishnansivalingam.github.io/e-comerce/mobile.html"><img src={ecom} alt="" /></a>
          <p>Ecommerce (front-end)</p>
        </div>
        <div className="project" data-aos="fade-down">
          <img src={node} alt="" />
          <p>Project 2</p>
        </div>
        <div className="project" data-aos="fade-down">
          <img src={ex} alt="" />
          <p>Project 3</p>
        
        </div>
        <div className="project" data-aos="fade-down">
          <img src={r} alt="" />
          <p>Project 4</p>
        
        </div>
        <div className="project" data-aos="fade-down">
          <img src={p} alt="" />
          <p>Project 5</p>
        
        </div>
        <div className="project" data-aos="fade-down">
          <img src={db } alt="" />
          <p>Project 6</p>
        
        </div>
      
      </div>
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
const styles = {
    h1: {
        marginTop:"90px",
    }
}

export default App;
