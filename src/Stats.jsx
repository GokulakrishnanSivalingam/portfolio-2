import React, { useState, useEffect } from 'react';
import './App.css';
import AOS from 'aos';

function Stats() {
    const [isOpen, setIsOpen] = useState(false);
    
        useEffect(() => {
          AOS.init({ duration: 1000 ,once:true});
        }, []);
      
        const toggleMenu = () => {
          setIsOpen(!isOpen);
        };
  return (
    <div>
      <center><nav className="navbar">
     <div className="logu">GK</div> 
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
      </nav></center>
      <div className="github">
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
       
      /></div> </div>
    </div>
  )
}

export default Stats
