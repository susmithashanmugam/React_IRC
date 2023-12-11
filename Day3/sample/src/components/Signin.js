import '../asserts/cssfiles/signin.css'
function Signin()
{
    return(
        <>
         <h1>Sign In</h1>
         <button>Login</button>
        <form className="container">
            <label for="email">Email address</label>
            <input type="email" id="email" required/>
            <label for="password">Password</label>
            <input type="password" id="password" required/>
            <input type="checkbox" id="stay-signed-in"/>
            <label for="stay-signed-in">Stay signed in</label>
            <button type="submit">Sign In</button>
        </form>
              <a href="#">Register</a>
             <a href="#">Forgot your password?</a>
         
    </>
    )
}
export default Signin;