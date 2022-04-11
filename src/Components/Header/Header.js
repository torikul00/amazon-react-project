import React from 'react';
import './Header.css'
import logo from'../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth)
    const handleLogout = () => {
        signOut(auth)
    }
    return (
        <nav>
            <img src={logo} alt="" />
            <div className="links">
                <Link to="/shop">Shop</Link>
                <Link to="/orderReview">Order Review</Link>
                <Link to="/manageInventory">Manage Inventor</Link>
                <Link to="/about">About</Link>
                { user?<button onClick={handleLogout}>Logout</button>
                :
                    <Link to="/login">Login</Link>}
            </div>
       </nav>
    );
};

export default Header;