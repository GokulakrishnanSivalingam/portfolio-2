import React, { useState, useEffect } from 'react';
import './App.css';
import AOS from 'aos';

function Contact(){
    const[email,setEmail]=useState('');
    const[message,setMessage]=useState('');
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        AOS.init({ duration: 1000 ,once:true});
      }, []);
    
      const toggleMenu = () => {
        setIsOpen(!isOpen);
      };
   async function  handle()
   {
    const resp = await fetch("http://localhost:1000/contact",{
        method:"POST",
        header:{
        "Content-Type":"application/json"
        },
        body:JSON.stringify({
            email,message

        })
    })
    if(resp.ok)
    {
        Navigate("/");
    }
    else{
console.log('error')
    }
   }
     
    
        
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
      <div className="container-contact">
                <form action="">
                    <div className="cont-contact">
                        <label htmlFor="">email</label><br />
                        <input type="email"  onchange={(e)=>setEmail(e.target.value)} placeholder="enter your email"/> <br />
                        <label htmlFor="">message</label><br />
                        <textarea name="" id="" onchange={(e)=>setMessage(e.target.value)} rows={6} cols={40} placeholder="enter your message"></textarea><br />
                        <button type='submit'  onclick={handle}>send</button>
                    </div>
                </form>
            </div>
        </div>
    );

}
export default Contact