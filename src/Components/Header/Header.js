import React from 'react';
import './Header.css'
import logo from'../../images/Logo.svg'
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { signOut } from 'firebase/auth';
import toast from 'react-hot-toast';

const Header = () => {
    const [user] = useAuthState(auth)
    const navigate  = useNavigate()
    const handleLogout = () => {
        signOut(auth)
            .then(() => {
            toast.success('Logout Succesful')
            })
            .catch(() => {
            toast.error('Something went wrong')
        })
    }
    const handleLogin = () => {
        navigate ('/login')
    }
    return (
        <nav>
            <img src={logo} alt="" />
            <div className="links">
                <Link to="/shop">Shop</Link>
                <Link to="/orderReview">Order Review</Link>
                <Link to="/manageInventory">Manage Inventor</Link>
                <Link to="/about">About</Link>
                { user?<button className='header-button' onClick={handleLogout}>Logout</button>
                :
                    <button onClick={handleLogin} className='header-button' >Login</button>}
            </div>
       </nav>
    );
};

export default Header;