import '../Asserts/Cssfiles/Header.css'
import { Heart } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom'
import '../Asserts/Cssfiles/Signin.css'
import { useState } from 'react';
// import LogIn from './Login';
import { LogIn } from 'lucide-react';
function Header() {
    const handleSignIn = () => {
        closeSignInPopup();
    };

    const closeSignInPopup = () => {
        const signInPopup = document.getElementById('signInPopup');
        signInPopup.style.display = 'none';
    };

    const openSignInPopup = () => {
        const signInPopup = document.getElementById('signInPopup');
        signInPopup.style.display = 'block';
    };
    const [isLoginPopupVisible, setLoginPopupVisibility] = useState(false);

    const openLoginPopup = () => {
        setLoginPopupVisibility(true);
    };

    const closeLoginPopup = () => {
        setLoginPopupVisibility(false);
    };
    return (
        <>

            <div className='header-top'>

                <div class="main-topic">

                    <p><b>Craft Your's </b></p>

                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Search for Your's Wish" class="search-text" />
                </div>

                <div className="buttonx" onClick={openSignInPopup}>
                    <b>SignUp</b>
                </div>
                <div id="signInPopup" className="signInPopup">
                    <div className="formR">
                        <p className="title">SignUp</p>
                    <div class="sh">
                    <b>Signup today & get 15%off-</b>
                </div>
                        
                        <input type="email" id="email" placeholder="Enter Your Email" className="input" required />
                        <input type="text" id="username" placeholder="Enter Name" className="input" required />
                        <input type="password" id="password" placeholder="Create a password" className="input" required />
                        <input type="password" id="confirm-password" placeholder="Re Enter The Password" className="input" required />
                        <button type="button" className="btnR" onClick={handleSignIn} required>
                            SignUp
                        </button>
                    </div>
                </div>
{/*     
            <button  class='buttonx' onClick={openLoginPopup}className={isLoginPopupVisible} ><b>Log In</b></button>
                 {isLoginPopupVisible && <LogIn onClose={closeLoginPopup} />} */}
                <div class="icons">
                    <Heart />
                    <ShoppingCart />
                    <LogIn />
                </div>
            </div>
        </>
    )
}
export default Header