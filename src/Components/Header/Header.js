import React from 'react';
import './Header.css'
import logo from'../../images/Logo.svg'

const Header = () => {
    return (
        <nav>
            <img src={logo} alt="" />
            <div className="links">
                <a href="/shop">Shop</a>
                <a href="/orderReview">Order Review</a>
                <a href="/manageInventory">Manage Inventor</a>
                <a href="/about">About</a>
            </div>
       </nav>
    );
};

export default Header;