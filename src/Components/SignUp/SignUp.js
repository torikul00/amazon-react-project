import React, { useState } from 'react';
import './SignUp.css'
import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const SignUp = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)
   
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }
    if(user){
        navigate('/shop');
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        if (password !== confirmPassword) {
            setError('Your password did not match')
            return
        }
        else { setError('') }

        createUserWithEmailAndPassword(email,password)

    }
  
    return (
        <div className='form-container'>
            <h1 className='form-title'>Sign Up</h1>
           
            <form onSubmit={handleSubmit}>
                <div className="form-inputs">
                    <p style={{color:'red'}}>{error }</p>
                <label htmlFor="email"  >Email</label>
                <input onBlur={handleEmail} type="email" name='email' required />
                <label htmlFor="password">Password</label>
                <input onBlur={handlePassword} type="password" name="password" required />
                <label htmlFor="confirmpassword">Confirm Pasword</label>
                <input onBlur={handleConfirmPassword} type="password" name="password" required />
                <button className='login-button'>Sign Up</button>
                <p>already have an account ?
                    <Link className='acc-link' to='/login'> Login</Link>
                </p>

            </div>
            </form> 
            <hr />

            <button className='google-button'> <FcGoogle className='google-icon' /> Continue with Google </button>
        </div>
    );
};

export default SignUp;