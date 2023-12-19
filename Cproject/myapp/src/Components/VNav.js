import React from 'react';
import { Link } from 'react-router-dom';
import '../Asserts/Cssfiles/VNav.css';
import { ChevronLeftCircle } from 'lucide-react';
function VNav({ isVisible, onItemClick, onBackClick }) {
    const handleItemClick = (item) => {
        if (onItemClick) {
            onItemClick(item);
        }
    };

    return (
        <>
        <nav className={`vnav ${isVisible ? 'visible' : ''}`}>
            <div className="back-icon" onClick={onBackClick}>
            {/* <ChevronLeftCircle /> */}
               
            </div>
            <ul>
                
                <li>
                    <Link to='/signin'>
                    BestSellers
                    </Link>
                </li>
                <li>
                    New Releases
                </li>
                <li>
                    Delivery In One Day
                </li>
                <li>
                    Festival
                </li>
                <li>
                    Personal Occasions
                </li>
                <li>
                    Special Days
                </li>
            </ul>
        </nav>
        </>
    )
}
export default VNav