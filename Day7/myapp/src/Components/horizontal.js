// HorizontalNavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const HorizontalNavBar = () => {
 return (
    <div className="horizontal-nav-bar">
      <div className="horizontal-nav-bar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
 );
};

export default HorizontalNavBar;