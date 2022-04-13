import React, { useState } from 'react';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import useFirebase from '../Hooks/useFirebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../firebase.init';
import toast from 'react-hot-toast';


const Login = () => {
    const navigate = useNavigate()
    const { signInWithGoogle } = useFirebase()
    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })

    const handleEmail = (email) => {
        if (/^\S+@\S+\.\S+$/.test(email)) {
            setEmail({ value: email, error: '' })
        }
        else {
            setEmail({ value: '', error: 'Email is invalid' })
        }

    }
    const handlePassword = (password) => {
        if (password.length > 5) {
            setPassword({ value: password, error: '' })
        }
        else {
            setPassword({ value: '', error: 'Password is Invalid' })
        }
    }
    const handleSignIn = (e) => {

        e.preventDefault()
        if (email && password) {


            signInWithEmailAndPassword(auth, email.value, password.value)
                .then(() => {
                    toast.success('Login Successful', { id: 'login' })
                    navigate('/')

                })
                .catch(() => {
                    toast.error('Invalid email and password', { id: 'error5' })
                })
        }


    }

    return (
        <div className='form-container'>
            <h1 className='form-title'>Login</h1>
            <form onSubmit={handleSignIn}>
                <div className="form-inputs">
                    <label htmlFor="email" >Email</label>
                    {
                        email?.error && <small className='error-message'>{email.error}</small>
                    }
                    <input onBlur={(e) => handleEmail(e.target.value)} type="email" name='email' required />
                    <label htmlFor="password">Password</label>
                    {
                        password?.error && <small className='error-message'>{password.error} </small>
                    }
                    <input onBlur={(e) => handlePassword(e.target.value)} type="password" name="password" required />

                    <button className='login-button'>Login</button>
                    <p>New user ?
                        <Link className='acc-link' to='/signup'> Create New Account</Link>
                    </p>

                </div>
            </form>
            <hr />

            <button onClick={signInWithGoogle} className='google-button'> <FcGoogle className='google-icon' /> Continue with Google </button>
        </div>
    );
};

export default Login;