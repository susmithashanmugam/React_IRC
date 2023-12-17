// Navbar.js
import React, { useState } from 'react';
// import './Navbar.css';

const Navbar = () => {
  const [isVerticalNavVisible, setVerticalNavVisible] = useState(false);

  const handleMouseOver = () => {
    setVerticalNavVisible(true);
  };

  const handleMouseOut = () => {
    setVerticalNavVisible(false);
  };

  return (
    <div className="body">
      <div className="header">
        <ul className="horizontal-nav">
          <li
            id="showVerticalNav"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Hover Me
          </li>
        </ul>
        {isVerticalNavVisible && (
          <div className="vertical-nav">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
