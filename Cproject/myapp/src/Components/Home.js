import '../Asserts/Cssfiles/home.css'
import '../Asserts/Cssfiles/Header.css'
import { Heart } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
function Home() {
    return (
        <>

            <div class="header-top">
                <div class="main-topic">

                    <p><b>your's Personal<br /> Creators</b></p>

                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Search for Your's Wish" class="search-text" />
                </div>
                <Link to='/signin'>
                    <div class="buttonx">
                        <b>SignIn</b>
                    </div>
                </Link>
                <Link to='/login'>
                <div class="buttonx">
                    <b>LogIn</b>
                </div>
                </Link>
                <div class="icons">
                    <Heart />
                    <ShoppingCart />
                </div>
            </div>

            <nav class="head-list">
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
            <div class="header1">
                <p>Find things you'll love. </p>
            </div>
            <hr />
            <div class="product-grid">
                <div class="product">
                    <div class="zoom">
                        <img src="https://i.etsystatic.com/20482270/r/il/f516f5/4127587895/il_794xN.4127587895_e63o.jpg" alt="Product Image 1" style={{ height: '180px', width: '170px' }} />
                    </div>
                    <h2>Personalised Frame</h2>
                </div>
                <div class="product">
                    <div class="zoom">
                        <img src="https://gulbonda.com/wp-content/uploads/2021/08/SET-OF-5-scaled-600x600.jpg" alt="Product Image 5" style={{ height: '180px', width: '170px' }} />
                    </div>
                    <h2>Caricature</h2>
                </div>
                <div class="product">
                    <div class="zoom">
                        <img src="https://i.pinimg.com/564x/d4/86/96/d486967c533e1d31565c65eddfda9d6e.jpg" alt="Product Image 3" style={{ height: '180px', width: '170px' }} />
                    </div>
                    <h2>Home Decor</h2>
                </div>
                <div class="product">
                    <div class="zoom">
                        <img src="https://i.etsystatic.com/37148405/r/il/ae60e8/4972074518/il_794xN.4972074518_iifl.jpg" alt="Product Image 4" style={{ height: '180px', width: '170px' }} />
                    </div>
                    <h2>Texture Art</h2>
                </div>
                <div class="product">
                    <div class="zoom">
                        <img src="https://i.pinimg.com/564x/b9/48/20/b948202965c652fa97a5c0ed3c38619c.jpg" alt="Product Image 2" style={{ height: '180px', width: '170px' }} />
                    </div>
                    <h2> Mugs </h2>
                </div>
                <div class="product">
                    <div class="zoom">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbHFIqr0hQsPt2sKP5Adg395fZpKJeGNZJ2ToJFbD0s-HtyokI8Crf5HI8ERYRNHL9Byo&usqp=CAU" alt="Product Image 6" style={{ height: '180px', width: '170px' }} />
                    </div>
                    <h2>Resign Art</h2>
                </div>
            </div>
        </>
    )
}
export default Home