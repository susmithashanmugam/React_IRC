// VerticalNavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const VerticalNavBar = () => {
 return (
    <div className="vertical-nav-bar">
      <div className="vertical-nav-bar-links">
        <Link to="/">Address Number</Link>
      </div>
    </div>
 );
};

export default VerticalNavBar; 