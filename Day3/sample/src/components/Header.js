import '../asserts/cssfiles/header.css'
import img1 from '../asserts/images/logo.png'
function Head() {
    return (
        <>
            <div className='navbar'>

                <div class="topimg">

                    <img src={img1} alt="image" style={{ width: '100px', height: 'auto' }}></img>

                </div>
                <div class="place">
                    <div className="search-bar">
                        <input type="text" placeholder="Search for yours" />
                    </div>
                </div>
                
                <div class="buttonx">
                    Sign in
                </div>
            </div>
        </>
    )
}
export default Head