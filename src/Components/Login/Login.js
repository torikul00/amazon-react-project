import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    return (
        <div className='form-container'>
            <h1 className='form-title'>Login</h1>
            <div className="form-inputs">
                <label htmlFor="email" >Email</label>
                <input type="email" name='email' />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" />
                <button className='login-button'>Login</button>
                <p>New user ?
                <Link className='acc-link' to='/signup'> Ceate New Account</Link>
                </p>

            </div>
          <p><hr /></p>

            <button className='google-button'> <FcGoogle className='google-icon' /> Continue with Google </button>
        </div>
    );
};

export default Login;