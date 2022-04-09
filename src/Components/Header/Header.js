import React from 'react';
import './Header.css'
import logo from'../../images/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <img src={logo} alt="" />
            <div className="links">
                <Link to="/shop">Shop</Link>
                <Link to="/orderReview">Order Review</Link>
                <Link to="/manageInventory">Manage Inventor</Link>
                <Link to="/about">About</Link>
                <Link to="/login">Login</Link>
            </div>
       </nav>
    );
};

export default Header;