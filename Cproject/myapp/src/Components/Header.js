import '../Asserts/Cssfiles/Header.css'
import React, { useState } from 'react'
import VNav from './VNav';
import { Heart } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom'
import { AlignJustify } from 'lucide-react';

function Header() {
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

            <div className='header-top'>

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
                <p>Find things you'll love. </p>
                {selectedNavItem && <p>Selected Item: {selectedNavItem}</p>}
            </div>
            <hr />
        </>
    )
}
export default Header