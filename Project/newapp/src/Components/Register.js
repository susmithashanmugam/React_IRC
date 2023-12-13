import '../Asserts/cssfiles/Register.css'
function Register() {
  return (
    <>
     <div class="formR">
                <p class="title">Register</p>
                <label for="email"></label>
                <input type="email" id="email" placeholder='Enter Your Email' class="input" required />
                <label for="username"></label>
                <input type="text" id="username" placeholder="Enter Name" class="input" required />
                <label for="password"></label>
                <input type="password" id="password" placeholder="Create a password" class="input" required />
                <label for="confirm-password"></label>
                <input type="password" id="confirm-password" placeholder="Re Enter The Password" class="input" required />
                <button type="submit" class = "btnR">Register</button>
            </div>
    </>
  )
}
export default Register