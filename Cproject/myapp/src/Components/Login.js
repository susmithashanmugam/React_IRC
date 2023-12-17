import '../Asserts/Cssfiles/Login.css'
const LogIn = ()=>
    {
    return(
    <>
   <div class="form">
    <p class="title">Sign In</p>
    
    <input type="text" id="username" placeholder="Enter Username"class="input" required/>
    
    <input type="password" id="password" placeholder="Enter Your Password" class="input" required/>
    <button type="submit" class = "btn">Sign In</button>
    </div>
    </>
    )
}
export default LogIn