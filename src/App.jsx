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
<h1>what i do</h1>
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
      <center><a href="/project"><button>see more</button></a></center>
 
      <center> <div className="discuss">
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
