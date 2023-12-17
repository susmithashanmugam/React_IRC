
import '../asserts/cssfiles/signin.css';
const SignIn = ()=>
    {
    return(
    <>
   <div class="form">
    <p class="title">Sign In</p>
    <label for="username">Username:</label>
    <input type="text" id="username" class="input" required/>
    <label for="password">Password:</label>
    <input type="password" id="password" class="input" required/>
    <button type="submit">Sign In</button>
    </div>
    </>
    )
}
export default SignIn