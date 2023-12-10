import './Asserts/cssfiles/style.css'
function App()
{
    return(
        <div>
            <div class="heading">
               <h2>Welcome back</h2>
            </div>
            <div class="container">
            <form>
                <h4>Sign up!</h4>
                <input type="text" name="Enter youe Username" placeholder="Username" class="auth-input"/>
                <input type="password" name="Enter your Password" placeholder="Username" class="auth-input"/>
                <input type="submit" value="Register" class="auth-btn"></input>
            </form>
            </div>
        </div>
    )
}
export default App
