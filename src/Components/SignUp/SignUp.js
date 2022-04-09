import React from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc';

const SignUp = () => {
    return (
        <div className='form-container'>
            <h1 className='form-title'>Sign Up</h1>
            <div className="form-inputs">
                <label htmlFor="email" >Email</label>
                <input type="email" name='email' />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" />
                <label htmlFor="confirmpassword">Confirm Pasword</label>
                <input type="password" name="password" />
                <button className='login-button'>Login</button>
                <p>already have an account ?
                <Link className='acc-link' to='/login'> Login</Link>
                </p>

            </div>
          <p><hr /></p>

            <button className='google-button'> <FcGoogle className='google-icon' /> Continue with Google </button>
        </div>
    );
};

export default SignUp;