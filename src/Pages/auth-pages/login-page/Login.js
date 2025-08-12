import React from 'react'

import './Login.css'


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

                <button className='signin-btn'>Sign in</button>

            </form>

            <p className='no-account'>Don't have an account? <a href='/signup'>Sign Up</a></p>

        </div>

    </div>
  )
}

export default Login