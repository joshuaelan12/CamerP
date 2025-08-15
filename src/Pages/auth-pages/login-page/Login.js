import React from 'react'

import './Login.css'

import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <div className='login-container'>
        <div className='login-card'>
            <h1 className='login-title'>Login</h1>
            <p className='sub-title'> Enter your email below to login to your account</p>

            <form className='login-form'>
                <label htmlFor='email'>Email</label>
                <input  className='input' name='email' placeholder='m@example.com' id='email' required/>

                <label htmlFor='password'>Password</label>
                <input className='input' name='password'  id='password' required/>

                <Link to='/sidebar' className='signin-btn'>Sign in</Link>

            </form>

            <p className='no-account'>Don't have an account? <a href='/signup'>Sign Up</a></p>

        </div>

    </div>
  )
}

export default Login