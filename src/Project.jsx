import React, { useState, useEffect } from 'react';
import './App.css';
import AOS from 'aos';
function Project() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
      AOS.init({ duration: 1000 ,once:true});
    }, []);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    return(
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
         <img src='https://i.pinimg.com/originals/69/85/32/6985323e5c178590219eeeb1031a30d9.gif' alt="" />
         <div className="v"> <p>movie streamer</p><a href="https://jetplex.vercel.app"> <button>visit</button></a> </div>
        </div>
        <div className="project" data-aos="fade-down">
 <img src="https://i.pinimg.com/originals/d4/27/e5/d427e5864d143acdc5f636f9b59cd322.gif" alt="" />
 <div className="v">   <p>Clothes e-com</p><a href="https://zeeshirts.vercel.app"> <button>visit</button></a> </div>
          </div>
        <div className="project" data-aos="fade-down">
 <img src="https://i.pinimg.com/originals/64/30/6e/64306e132fc5ba2bf1dc8375540fd449.gif" alt="" />
 <div className="v">   <p>CGPA Calculator</p>       <a href="https://gokulakrishnansivalingam.github.io/cgpa-calculator/loginpage.html"> <button>visit</button></a> </div>
        
        </div>
   
      
      </div>
</div>
    );
  
}
export default Project