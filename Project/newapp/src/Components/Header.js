import '../Asserts/cssfiles/Header.css'
import SignIn from './Signin'
import img1 from '../Asserts/images/logo.png'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <>

            <div className='head'>

                <div class="name">

                    <p><b>your's Personal Creators</b></p>

                </div>
                <div class="place">
                    <div className="search-bar">
                        <input type="text" placeholder="Search for Your's Wish" />
                    </div>
                </div>
                <Link to='/Signin'>
                    <div class="buttonx">
                        Sign in
                    </div>
                </Link>
                <div class="region">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png" style={{ width: '2rem', height: '3rem' }} />
                </div>
            </div>
        </>
    )
}
export default Header