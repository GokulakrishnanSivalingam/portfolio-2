import react,{useState} from "react";
import "./contact.css"
function Contact(){
    const[email,setEmail]=useState('');
    const[message,setMessage]=useState('');

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