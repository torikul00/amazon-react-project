import React, { useState } from 'react';
import './SignUp.css'
import { Link, useNavigate, } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc';

import useFirebase from '../Hooks/useFirebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../firebase.init';
import toast from 'react-hot-toast';

const SignUp = () => {
    const navigate = useNavigate()
    const { signInWithGoogle } = useFirebase()
    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })
    const [confirmPassword, setConfirmPassword] = useState({ value: '', error: '' })

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
    const handleConfirmPassword = (confirmPassword) => {
        if (password.value === confirmPassword) {
            setConfirmPassword({ value: confirmPassword, error: '' })
        }
        else {
            setConfirmPassword({ value: '', error: 'Password did not match' })
        }
    }


    const handleSubmit = (e) => {

        if (email && password && confirmPassword) {

            e.preventDefault()
            createUserWithEmailAndPassword(auth, email.value, password.value)
                .then(() => {
                    toast.success('SignUp Succesful',{id:'success'})
                    navigate('/')
                })
                .catch((err) => {
                    if (err.message.includes('email-already-in-use')) {
                      toast.error('Email already registered',{id:'exist'})
                   }
                    else {
                        toast.error('Something went wrong' ,{id:'error1'})
                   }
                })

        }

    }


    return (
        <div className='form-container'>
            <h1 className='form-title'>Sign Up</h1>

            <form onSubmit={handleSubmit}>
                <div className="form-inputs">
                    <label htmlFor="email"  >Email</label>
                    {
                        email?.error && <small className='error-message'>{email.error}</small>
                    }
                    <input onBlur={(e) => handleEmail(e.target.value)} type="email" name='email' required placeholder='Email' />
                    <label htmlFor="password">Password</label>
                    {
                        password?.error && <small className='error-message'>{password.error} </small>
                    }
                    <input onBlur={(e) => handlePassword(e.target.value)} type="password" name="password" required placeholder='password' />
                    <label htmlFor="confirmpassword">Confirm Pasword</label>
                    {
                        confirmPassword?.error && <small className='error-message'>{confirmPassword.error}</small>
                    }
                    <input onBlur={(e) => handleConfirmPassword(e.target.value)} type="password" name="confirmpassword" required placeholder='Confirm Password' />

                    <button className='login-button'>Sign Up</button>
                    <p>already have an account ?
                        <Link className='acc-link' to='/login'> Login</Link>
                    </p>
                </div>
            </form>
            <hr />

            <button onClick={signInWithGoogle} className='google-button'> <FcGoogle className='google-icon' /> Continue with Google </button>
        </div>
    );
};

export default SignUp;