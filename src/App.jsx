import React, { useState, useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import pdf from'./img/GokulakrishnaS.pdf'
import dis from "./img/discuss.gif"
import p1 from "./img/p2.gif";
import css from "./img/css.jpeg";
import h2 from "./img/h.jpeg";
import js from "./img/js1.jpeg";
import node from "./img/node1.jpeg";
import db from "./img/mongo.jpeg";
import ex from "./img/ex1.jpeg";
import zee from'./img/zee.png'

import r from "./img/r.jpeg";
import p from "./img/p.jpeg";

import stream from "./img/stream1.png";
import cal from "./img/cals.png"

function App() {
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

      <div className="cont">
        <div className="info" data-aos="fade-down">
          <h1>Hello Developers ! ,Iam Gokulakrishnan </h1>
        
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
      <div className="skills" >
      <a href="https://www.html.com" > <img src={h2} alt="HTML" data-aos="fade-up"/></a> 
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"> <img src={css} alt="CSS"data-aos="fade-up" /></a> 
      <a href="https://www.javascript.com"> <img src={js} alt="JavaScript" data-aos="fade-up"/></a> 
      <a href="https://react.dev/"><img src={r} alt="React" data-aos="fade-up"/></a> 
      <a href="https://nodejs.org/en"> <img src={node} alt="Node.js" data-aos="fade-up"/></a> 
      <a href="https://expressjs.com/"> <img src={ex} alt="Express.js" data-aos="fade-up"/></a> 
      <a href="https://www.mongodb.com"> <img src={db} alt="MongoDB" data-aos="fade-up"/></a> 
      <a href="https://www.postman.com/"> <img src={p} alt="" data-aos="fade-up"/></a> 
           <a href="https://www.github.com/"> <img src="data:image/png;base64,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" alt="" data-aos="fade-up"/></a> 
            <a href="https://www.postman.com/"> <img src="data:image/png;base64,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" alt="" data-aos="fade-up"/></a> 
      </div>
      </div>
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
   
      
      </div>
 
      <center> <div className="discuss" data-aos="fade-right">
    <img src={dis} alt="" />
   <h2>Have a project mind !! </h2><button><a href="mailto:sivalingamgokulakrishnan@gmail.com">let discuss</a>
    </button>
   </div></center> <h1>Github Stats</h1><div className="github">
<div className="stats" data-aos="fade-down">  <img 
        src="https://github-readme-stats.vercel.app/api?username=GokulakrishnanSivalingam&hide_border=false&include_all_commits=false&count_private=false" 
        alt="GitHub Stats" 
       
      /></div> 
      
      <div className="stats" data-aos="fade-down"> <img 
        src="https://github-readme-streak-stats.herokuapp.com/?user=GokulakrishnanSivalingam&hide_border=false" 
        alt="GitHub Streak" 
        
      /></div> 
      
      <div className="stats" data-aos="fade-down"> <img 
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=GokulakrishnanSivalingam&hide_border=false&include_all_commits=false&count_private=false&layout=compact" 
        alt="Top Languages" 
       
      /></div> </div>
    
      
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

export default App;
