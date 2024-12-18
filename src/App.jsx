

import React, { useState, useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import pdf from'./img/GOKUL.pdf'
import dis from "./img/discuss.gif"
import p1 from "./img/p2.gif";
import css from "./img/css.jpeg";
import h2 from "./img/h.jpeg";
import js from "./img/js1.jpeg";
import node from "./img/node1.jpeg";
import db from "./img/mongo.jpeg";
import ex from "./img/ex1.jpeg";
import zee from'./img/zee.png';
import {Link} from 'react-router-dom';
import { GrLinkNext } from "react-icons/gr";
import r from "./img/r.jpeg";
import p from "./img/p.jpeg";
import Map from './Roadmap.jsx'
import stream from "./img/stream1.png";
import cal from "./img/cals.png"
import farm from "./img/farm.png"
import { LuExternalLink } from "react-icons/lu";
import { ImGithub } from "react-icons/im";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 ,once:true});
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div >
      <nav className="navbar">
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
      </nav>

      <div className="cont">
        <div className="info" data-aos="fade-up" >
          <h1 >Hello there!, Iam Gokulakrishnan </h1>
        
          <p>
            Aspring talent in web development using React for building dynamic, responsive front-end interfaces and Express.js for efficient backend APIs.
          </p>
          <a href={pdf} download> <button>Resume  <GrLinkNext/></button></a>
        </div>
        <div className="info2" >
          <img src={p1} alt="Profile" />
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
      <a href="https://www.html.com" > <img src={h2} alt="HTML" data-aos="fade-up"/></a> 
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"> <img src={css} alt="CSS"data-aos="fade-up" /></a> 
      <a href="https://www.javascript.com"> <img src={js} alt="JavaScript" data-aos="fade-up"/></a> 
      <a href="https://react.dev/"><img src={r} alt="React" data-aos="fade-up"/></a> 
      <a href="https://nodejs.org/en"> <img src={node} alt="Node.js" data-aos="fade-up"/></a> 
      <a href="https://expressjs.com/"> <img src={ex} alt="Express.js" data-aos="fade-up"/></a> 
      <a href="https://www.mongodb.com"> <img src={db} alt="MongoDB" data-aos="fade-up"/></a> 
      <a href="https://www.postman.com/"> <img src={p} alt="" data-aos="fade-up"/></a> 
           <a href="https://www.github.com/"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAACUCAMAAAAwLZJQAAAAaVBMVEUBAQH///8AAADw8PD7+/vGxsbR0dHd3d3z8/P29vbo6Ojh4eHs7OzV1dVUVFRpaWlfX18gICCWlpa6urqoqKg+Pj4mJiYuLi4PDw+AgIB4eHiurq6goKA3NzdDQ0PAwMCKiooXFxdKSkry6dUBAAAIZklEQVR4nO1c27aqOgyFyEVBQC4iiAry/x95WtSlQNMbxbXHGWs+7JclzdwtTWbSFMv6wx/+8IcFgE/8NpkZPrhV6S1+4HT/1yg/qKS3JHP9MAj2mweCIAyjy7k/Wf8GV0LhGHe5t7Ex+G2W9PffZDpM1Kku/I2DsnxgG+RZ/GvzSsyWibsXkXxh43fH36BK5jIptpIkX8i7/qtU6cTc60iVJoETZLfvTSs1lAWySz7Fpk2/xBTgloWaLB/T2hzWZ0rX7ewvoTnManZaeVbJ8AdPd9E/se9WZUqc+8UAywHteutvZNXf2BcrTSpRHBcTq/6Gd1uFKSSRUZoEm848U4BEw8ELkVWGqZJl363A07bdq1GmcHdXoUkQHg0yhTJfiyfRq+b8FBy99XgSP3U2xBROwZo8CRIjTOG66nxSBCaYfoEncajLmUJl3M2zsFu69wGKb/C07ei6iChYxtSSCN4iptCtE49YcPUXn2SaZuUSH9rulPBkbKQwDANhxYGPXRCG/nyIrS5TuDdzIw5Vu33dRHgNhwsnbLtDSQZhBGX/qEk0YbygDQxSv7omuc60enX/yJYhYTyea00pAGMoJ4HnH8EqM0WF6rRx9Uo/4Mryzzr6BICx8B+rQxPnW6GQ4O/a80eRBO4sQRaq+yii6FlvoVt+jgTWbaJTfS/P86Yg/7j++PkgST+nC6BjvToX5Sll7njbuVijgcgMDZmUswm8S1KW5b161Z+re1qWceeGAX3TN920kANnloveHJSJZqzlc+rJ/5hab9yi7gHFNclab17Fg5gpHiNFogDMkLQ7z8eB6sQr0NG/lSXjMeaS2XasxBSAHeNZRC1hHYH5A6jY8jFKVZjCjS3qt4mxRAyATdRRyfUBMrY3V3/XOTaQxNZlvCfoIEekxmRyRpGlp+JEfpAOGYP5jmoSTbHUQWHjA5Z2miR6RKPaXdYIxNgQTmauWIDXslpJIwAtNoSdKzkPrpEaTR7CmyTRHi84RCdTRCs8a9xN4x8yBOabKBxT2x6unOK1nIeCklO5C9UiHM8Kp+4W9FJEe1xkOqbqWWTdeFNaSxHFnOgwgMHIBLgdV4oovucjk9VhYCvJB2QM4f/RrblIPxg64eU3iZQESvTpibxfTJSd7QxoJIiir6jcXlRiivoXT7z2+Cuql3VzbaGxOhTWIqBEvYbZhR+MwR6xJVY/cMCeDVY4DkQ3vljns7NYissaRFlVowFFxTeH1AXoYpgT9x/mkFRUHO7xE2TdUhvfXIptXZFMgxTTCp4pgTcyZ+nOCx4tjEnmkTlUPu8FMg1/aURvtyZTbO+KtgSaKBvMlkb20MxJ4EjhhohRpQKGAtEDFu4FkhRixN9/nWgnIIo9+HWi2f+eaGZek1i8zaRL9NvuSZ9oLl0RUuG5AlGVsqUCUUwDCYmyjwDstWI93kUnck+Yw/+2ehI6fCyEms6Vn+ZQaSEkqv2kHlF0AYWiBC8KSKTa6kTPmLVAJPNQ4Wzv1yCKtqwIhTOnvrpCDAU0NxemIpyKtcCz6fDE61ytKKHAQ4XtGY/2nHqeMGKjgnQ4tjPcPXtHd65EAcLCa4GN2XDPiZ8SR4S8sxtRZqhKFA9LMnGQVxk360qZjTpPSLSV8Urrtsl4D8BpnZLxMKwuohc8c1qPW8K3ZaQaq8frB8aq47y6uC152IDG38eamGGK12EppDYDrmgoHCPOFKDkNnjLHYil3MsBewON0yBomA/ljhg54X6Y08vS6z3k/eStu3QiyV97gmLRRTSAquZ3H87awNCRRBcu6K0JTab0CrEraOgUn928Bpse3jmzkfNxS6A8zSrmuc8H5I81YLT2UZFd8qnC3biJ2i3vx6/jRqKRU177jOJ9RPsUq/Iw3ac7P6sqObKv/sfak2mNlToDfw78meKFwyXe9Hyq55MRFUl/rbhkHxyvt+QieSVqp5CXj+MwvcQFp7yGmGFqG0ZFV8dXbLngfjzUXeGF0s3bSrWjcR1iS5mm9yrFcjFn52EdQFDm863Iw06tGwTq0dMN9ZzJPimR8gTn9gy76xqH4gWH6bmvR1trmzMmeXitydArEVVtCphMqZ2TLUM3ObtiwJsFTvsAA8o3RuA+SWga+jmPpGP2F/L1OBzk+/XVuyxmwtY5gwWFnTCsCpI+XpPLFOrt7fM25y0N00XM0FaCGi9+MjtDdNK62jBZ5cuzX32aPDoXUROA9G1ivQtt0/GH9wcO+XF6eV1U1cDr7RNopuPTtsfh3JZ4gz2U3e7nL7vNWRRKAHO/E2gfE0wvntDyBVG99AJ/dS7cKIrcPDuKRQnWyT7Bgr4qKMeLT4+mBwGStQdIr6eSCKvkIiz0SHrSJcnYxEftHkPRFIBIh97zY5q2iN8sKaLNkkxsmug11ZNpXAIc/DCBKhEcCMkSzZcdYUI1yhx++iAGP3XrLTmNL0E0WvpBgGkZMvu45CWdiIiJ7iwDl5fHW7/oNaKciGho4PsaRNyP5zR8Rag3lhLdG6oTTd1gULw/jWbdT0dh1igg6uhEeKadalaRCNqmyLouK5o2FFfM+USJkzNWyyyZx2TPZEh0Giggao7nsPocpbaMaGT2izrE86MlDiFRTgh1GuOffsG12hKitfkP6lE3xV5+faK+me9+zMzBmanUtYkWptzS3GDCEpZC98QmusY3lN4WWZOqRdTJy3U/SgbXfFp/11h6xzub9Uosq9VhkgEJb7XOiO7rtd7OsVlIImcB0TD70rcIqRbp3HeOslch6viF+Fa2OZDof2hfSUooynI/jln82uQHsyQw3JqvA+oCJE6FHrf1nX3TqxxPGMKjunNpCpkKMdzID+v0F2g+7QNUcralf7gWpOfod2n+4Q9/eOM/95lye2PPZ30AAAAASUVORK5CYII=" alt="" data-aos="fade-up"/></a> 
            <a href="https://www.postman.com/"> <img src="data:image/png;base64,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" alt="" data-aos="fade-up"/></a> 
        <a href="https://www.vercel.com/"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnjSqXz_mKhvp-05665z75rscs15in6GXTGuC9GlBnp5-AoUFLnw9Or6MfcZmewqW331w&usqp=CAU" alt="" data-aos="fade-up"/></a> 
            <a href="https://www.nodemon.com/"> <img src="data:image/png;base64,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" alt="" data-aos="fade-up"/></a> 
      </div>
      </div>
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
 <img src={farm} alt="" />
 <div className="v">   <p>Farm Fresh</p>       <a href="https://farmfreshs.vercel.app/"> <button><LuExternalLink/></button></a> </div>
        
        </div>
        <div className="project" data-aos="fade-up">
 <img src={zee} alt="" />
 <div className="v">   <p>Clothes e-com</p><a href="https://zeeshirts.vercel.app">
 <p></p> <button><LuExternalLink/></button></a> </div>
          </div>
        <div className="project" data-aos="fade-up">
 <img src={cal} alt="" />
 <div className="v">   <p>CGPA Calculator</p>       <a href="https://gokulakrishnansivalingam.github.io/cgpa-calculator/loginpage.html"> <button><LuExternalLink/></button></a> </div>
        
        </div>
   
      
      </div>
      <center><Link to="/project"><button data-aos="fade-up">see more</button></Link></center>
      <center> <div className="discuss" data-aos="fade-right">
  <div className="discuss-img"> <img src={dis} alt="" /></div> 
  <div className="discuss-button"> <h2>Have a project mind !! </h2><button><a href="mailto:sivalingamgokulakrishnan@gmail.com">let discuss</a>
    </button></div> 
   </div></center> <h1 className='statsh'>Github Stats</h1><div className="github">
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
        
    

      </form>
    </div>
  </div>
  
</footer>

    </div>
  );
}

export default App;
