import '../Asserts/Cssfiles/home.css'
import '../Asserts/Cssfiles/Cards.css'
import { Link } from 'react-router-dom';
import { AlignJustify } from 'lucide-react';
import React, { useState } from 'react'
import VNav from './VNav';
import Header from './Header';
import Footer from './Footer';
function Home() {
    const [isVNavVisible, setVNavVisibility] = useState(false);
    const [selectedNavItem, setSelectedNavItem] = useState(null);

    const handleMouseEnter = () => {
        setVNavVisibility(true);
    };

    const handleMouseLeave = () => {
        // Do not close the VNav on mouse leave
    };

    const handleAlignJustifyClick = () => {
        setVNavVisibility(!isVNavVisible);
    };

    const handleVNavItemClick = (item) => {
        setSelectedNavItem(item);
        setVNavVisibility(false);
    };

    const handleVNavBarBackClick = () => {
        // Add logic to handle the back action
        // For example, close the VNav on back click
        setVNavVisibility(false);
    };

    return (
        <>
            <Header />
            <nav class="head-list">
                <ul>
                <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='navlinks'>
                        <AlignJustify onClick={handleAlignJustifyClick} />
                        {isVNavVisible && <VNav isVisible={isVNavVisible} onItemClick={handleVNavItemClick} onBackClick={handleVNavBarBackClick} />}
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
            {isVNavVisible && <VNav />}
            <div class="header1">
                <b><p>Gifts Glore: Unwrap the joy of Giving!!</p></b>
                {/* {selectedNavItem && <p>Selected Item: {selectedNavItem}</p>} */}
            </div>
            <hr />
            <div class="product-grid">
                <div class="product">
                    <Link to='frames'>
                    <div class="zoom">
                        <img src="https://i.etsystatic.com/20482270/r/il/f516f5/4127587895/il_794xN.4127587895_e63o.jpg" alt="Product Image 1" style={{ height: '180px', width: '170px' }} />
                    </div>
                    </Link>
                    <h2>Personalised Frame</h2>
                </div>
                <div class="product">
                <Link to='cari'>
                    <div class="zoom">
                        <img src="https://gulbonda.com/wp-content/uploads/2021/08/SET-OF-5-scaled-600x600.jpg" alt="Product Image 5" style={{ height: '180px', width: '170px' }} />
                    </div>
                </Link>
                    <h2>Caricature</h2>
                </div>
                <div class="product">
                    <Link to='homed'>
                    <div class="zoom">
                        <img src="https://i.pinimg.com/564x/d4/86/96/d486967c533e1d31565c65eddfda9d6e.jpg" alt="Product Image 3" style={{ height: '180px', width: '170px' }} />
                    </div>
                    </Link>
                    <h2>Home Decor</h2>
                </div>
                <div class="product">
                    <Link to='texture'>
                    <div class="zoom">
                        <img src="https://i.etsystatic.com/37148405/r/il/ae60e8/4972074518/il_794xN.4972074518_iifl.jpg" alt="Product Image 4" style={{ height: '180px', width: '170px' }} />
                    </div>
                    </Link>
                    <h2>Texture Art</h2>
                </div>
                
                <div class="product">
                    <Link to='/mugs'>
                    <div class="zoom">
                        <img src="https://i.pinimg.com/564x/b9/48/20/b948202965c652fa97a5c0ed3c38619c.jpg" alt="Product Image 2" style={{ height: '180px', width: '170px' }} />
                    </div>
                    </Link>
                    <h2> Mugs </h2>
                </div>
                
                <div class="product">
                    <Link to='/resign'>
                    <div class="zoom">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbHFIqr0hQsPt2sKP5Adg395fZpKJeGNZJ2ToJFbD0s-HtyokI8Crf5HI8ERYRNHL9Byo&usqp=CAU" alt="Product Image 6" style={{ height: '180px', width: '170px' }} />
                    </div>
                    </Link>
                    <h2>Resign Art</h2>
                </div>
            </div>
            {/* <hr /> */}
            {/* Cards  */}
            <div class="wrapper">
                <h1>Hottest Selling Products!</h1>
                <div class="cols">
                    <div class="col" ontouchstart="this.classList.toggle('hover');">
                        <div class="container">
                            <div class="front" style={{ backgroundImage: 'url(https://i.etsystatic.com/45939599/r/il/4bd2d5/5557719581/il_794xN.5557719581_m5rd.jpg)' }}>

                            </div>
                            <div class="back">
                                <div class="inner">
                                    <p>Name Necklace, 24k Gold Custom Necklace Jewelry</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col" ontouchstart="this.classList.toggle('hover');">
                        <div class="container">
                            <div class="front" style={{ backgroundImage: 'url(https://i.pinimg.com/564x/90/6f/91/906f91bf5307ec908872ce5d095bbed9.jpg)' }}>

                            </div>
                            <div class="back">
                                <div class="inner">
                                    <p>Key Chains</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col" ontouchstart="this.classList.toggle('hover');">
                        <div class="container">
                            <div class="front" style={{ backgroundImage: 'url(https://i.pinimg.com/564x/68/3a/46/683a469999760982138b766f2b3b1b5d.jpg)' }}>

                            </div>
                            <div class="back">
                                <div class="inner">
                                    <p>Anti lost Hooks for Airpods</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col" ontouchstart="this.classList.toggle('hover');">
                        <div class="container">
                            <div class="front" style={{ backgroundImage: 'url(https://leafyaffair.com/cdn/shop/files/Product18_4_db762614-9e47-4c75-aca8-68ccf51cdb35_720x.jpg?v=1685963250)' }}>

                            </div>
                            <div class="back">
                                <div class="inner">
                                    <p>Resign Customised Earrings</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <Footer/>
        </>
    )
}
export default Home