import React, { useState, useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import zee from'./img/zee.png';
import stream from "./img/stream1.png";
import cal from "./img/cals.png"
import music from "./img/music.png"
import klite from "./img/klite.png"
import ln from "./img/avlearn.png"
import co from "./img/co.png"
import farm from "./img/farm.png";
import cr from "./img/cr.png"
import { LuExternalLink } from "react-icons/lu";


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


      <div className="container" >
       <div className="project" data-aos="fade-up">
        <img src={cr} alt="" />
        <div className="v">   <p>Crisis Management</p> <a href="https://www.crisiz.online"> <button><LuExternalLink/></button></a> </div>
               
               </div>
      
        <div className="project" data-aos="fade-up">
 <img src={zee} alt="" />
 <div className="v">   <p>Clothes e-com</p><a href="https://ttshirts.vercel.app">
 <p></p> <button><LuExternalLink/></button></a> </div>
          </div>
          <div className="project" data-aos="fade-up">
 <img src={farm} alt="" />
 <div className="v">   <p>Farm Fresh</p>       <a href="https://farmfreshs.vercel.app/"> <button><LuExternalLink/></button></a> </div>
        </div>
          <div className="project" data-aos="fade-up">
         <img src={stream} alt="" />
         <div className="v"> <p>movie streamer</p><a href="https://jetplex.vercel.app"> <button><LuExternalLink/></button></a> </div>
        </div>

        <div className="project" data-aos="fade-up">
 <img src={cal} alt="" />
 <div className="v">   <p>CGPA Calculator</p>       <a href="https://gokulakrishnansivalingam.github.io/cgpa-calculator/loginpage.html"> <button><LuExternalLink/></button></a> </div>
        </div>

        <div className="project" data-aos="fade-up">
 <img src={ln} alt="" />
 <div className="v"><p>Gamification</p><a href="https://avlearns.vercel.app"> <button><LuExternalLink/></button></a> </div>
        
        </div>
      
        <div className="project" data-aos="fade-up">
 <img src={co} alt="" />
 <div className="v">   <p>Developer Site</p>       <a href="https://commercial-site-nine.vercel.app/"> <button><LuExternalLink/></button></a> </div>
        
        </div>
        <div className="project" data-aos="fade-up">
 <img src={music} alt="" />
 <div className="v">   <p>Music player</p>       <a href="https://music-player-pi-kohl.vercel.app/"> <button><LuExternalLink/></button></a> </div>
        
        </div>
        <div className="project" data-aos="fade-up">
 <img src={klite} alt="" />
 <div className="v">   <p>k-lite contact</p>       <a href="https://contact-company.vercel.app/"> <button><LuExternalLink/></button></a> </div>
        
        </div>
   
      
      </div>
</div>
    );
  
}
export default Project