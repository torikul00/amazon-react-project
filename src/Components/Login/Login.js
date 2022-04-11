import React, { useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc';
import auth from '../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const location = useLocation()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const from = location.state?.from?.pathname || '/';
    if (user) {
        navigate(from, {replace: true});
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleSignIn = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(email, password);
       
    }

    return (
        <div className='form-container'>
            <h1 className='form-title'>Login</h1>
            <form onSubmit={handleSignIn}>
                <div className="form-inputs">
                    <label htmlFor="email" >Email</label>
                    <input onBlur={handleEmail} type="email" name='email' required />
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePassword} type="password" name="password" required />
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <button className='login-button'>Login</button>
                    <p>New user ?
                        <Link className='acc-link' to='/signup'> Create New Account</Link>
                    </p>

                </div>
            </form>
          <hr />

            <button  className='google-button'> <FcGoogle className='google-icon' /> Continue with Google </button>
        </div>
    );
};

export default Login;