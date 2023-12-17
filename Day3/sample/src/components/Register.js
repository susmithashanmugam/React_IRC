import '../asserts/cssfiles/Register.css'
function Register() {
    return (
        <>
            <div class="formR">
                <p class="title">Register</p>
                <label for="email"></label>
                <input type="email" id="email" placeholder='Enter Your Email' class="inputR" required />
                <label for="username"></label>
                <input type="text" id="username" placeholder="Enter Name" class="inputR" required />
                <label for="password"></label>
                <input type="password" id="password" placeholder="Create a password" class="inputR" required />
                <label for="confirm-password"></label>
                <input type="password" id="confirm-password" placeholder="Re Enter The Password" class="inputR" required />
                <button type="submit" class = "btnR">Register</button>
            </div>
        </>
    )
}
export default Register