import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
        <nav className=''>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/mealDb">MealDb</Link>
        </nav>
    );
};

export default Header;