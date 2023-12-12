import React,{useState} from 'react';
import '../Asserts/cssfiles/Signin.css';
const SignIn = ()=>
{
    const [action,setAction] = useState("Sign up");
    
    return(
    <>
   <div className="container">
    <div className="header">
        <div className="text">
         {action}
        </div>
        <div className="underline"></div>
    </div>
    <div className="inputs">
      
    <div className="input">
         <input type="text" placeholder='Name'/>
    </div>
    <div className="input">
         <input type="email" placeholder='EmailId'/>
    </div>
    <div className="input">
         <input type="password" placeholder="PassWord"/>
    </div>
    </div>
    <div className="submit-container">
        <div className={action ==="Login" ?"submit gray":"submit"} onClick={()=>{setAction("Sign up")}}>Sign Up</div>
        <div className={action === "Sign up"?"submit gray":"submit"}  onClick={()=>{setAction("Login")}}>Login</div>
    </div>
   </div>
   /* */
   <form class="main-form first">
  <div class="main-form__title">
    <h1>Sign-up</h1>
  </div>
  <div class="main-form__body">
    <input class="main-form__input" type="text" placeholder="Username" />
    <input class="main-form__input" type="email" placeholder="Email Address" />
    <input class="main-form__input" type="password" placeholder="Password" />
    <input class="main-form__input" type="password" placeholder="Repeat Password" />
    <button class="btn">Clear</button>
    <button class="btn">Register</button>
  </div>
</form>  
<script src='//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
    </>
    )
}
export default SignIn