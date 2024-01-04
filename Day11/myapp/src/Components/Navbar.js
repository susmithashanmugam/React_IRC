import { useRef, useState } from 'react'
// import { toast, ToastContainer } from 'react-toastify'
const NavBar = () => {
    const [visible, setVisible] = useState(false);
    const toggle = () => {
        setVisible(!visible)
    }

    // const nameInputRef = useRef(null)
    const email = useRef(null)
    const password = useRef(null)
    const username=useRef(null)
    const [errors,setErrors] = useState({
        email: '',
        password: '',
        username: ''
    })

    const SignUp = (e) => {
        e.preventDefault();

        const formData = {
            email: email.current.value,
            password: password.current.value,
            username: username.current.value,
        }
        console.log(formData.email.length)
        if(formData.email.length === 0)
        {
            setErrors({ ...errors,email: 'email is empty !'});
        }
        else if(formData.email.length < 16)
        {
            setErrors({...errors,email: 'min 6 chars'});
        }
        else 
        {
            setErrors({ ...errors,email: ''});
        }
        if (formData.username.length < 8) {
            setErrors({ ...errors, username: 'Please enter more than 8 characters!' });
        } else {
            setErrors({ ...errors, username: '' });
        }
        email.current.value = ''
        password.current.value = ''
        username.current.value = ''
    }
   
    return (
        <>
            <div>
                <div className="navbar">
                    {/* {/* <div className="navtitle">
                        Hello world
                    </div> */}
                    <ul className="navlinks">

                         {/* <li>
                            Home
                        </li>

                        <li>
                            About
                        </li> */}
                        <li onClick={toggle}>
                            Login
                        </li>  
                        <li onClick={toggle}>
                            SignUp
                        </li>
                    </ul>
                </div>
                {visible ? (
                    <div className='card-wrapper'>
                        <div className="">
                            <h2 className="auth-title">SignUp</h2>
                            <form className="auth-container h-30v shadow" onSubmit={SignUp}>
                                <input type="email" name="" id="email" placeholder="email" className="auth-input" ref={email} />
                                {
                                    errors.email === '' ?
                                    ''
                                    :
                                    <span className='error-comp'>
                                        {errors.email}
                                    </span>
                                }
                                <input type="text" name="" id="username" placeholder="UserName" className="auth-input" ref={username} />
                                {
                                    errors.username === '' ?
                                    ''
                                    :
                                    <span className='error-comp'>
                                        {errors.username}
                                    </span>
                                }
                                <input type="text" name="" id="password" placeholder="Password" className="auth-input" ref={password} />
                                <input type="password" name="" id="password" placeholder="Re Enter the password" className="auth-input" ref={password} />
                                <input type="number" name="" id="number" placeholder="Age" className="auth-input" ref={password} />
                                <span className='btn-container'>
                                    <input type="submit" value="Sign-Up" className="auth-btn w-50" />
                                    <button className='cancel-btn w-50' onClick={toggle}>Cancel</button>
                                </span>
                            </form>
                        </div>
                    </div>
                ) : ('')
                }
            </div>
            {/* <ToastContainer/> */}
        </>
    )
}

export default NavBar