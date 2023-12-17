import '../Asserts/Cssfiles/Header.css'
import { Heart } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom'
function Header() {
    return (
        <>

            <div className='header-top'>

                <div class="main-topic">

                    <p><b>your's Personal<br/> Creators</b></p>

                </div>
                    <div className="search-bar">
                        <input type="text" placeholder="Search for Your's Wish" class="search-text"/>
                    </div>
               
                    <div class="buttonx">
                        Sign in
                    </div>
                    <div class="buttonx">
                        LogIn
                    </div>
                    <div class="icons">
                <Heart />
                <ShoppingCart />
                </div>
            </div>
           
            <nav class ="head-list">
                <ul>
                    <li>
                       Our Special Sale
                    </li>
                    <li>
                        Prints
                    </li>
                    <li>
                       Portraits
                    </li>
                    <li>
                       Paintings
                    </li>
                    <li>
                      Glass Art
                    </li>
                    <li>
                      Sculptures
                    </li>
                    <li>
                      Illustrations
                    </li>
                    <li>
                     Crafts Supplies
                    </li>
                    <li>
                     Offer's
                    </li>
                </ul>
            </nav>
        </>
    )
}
export default Header