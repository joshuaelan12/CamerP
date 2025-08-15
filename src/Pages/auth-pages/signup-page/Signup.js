import React from 'react'

import './Signup.css'


import { Link } from 'react-router-dom'


const SignUp = () => {
  return (
    <div className='signup-container'>
        <div className='signup-card'>
            <h1 className='signup-title'>SignUp</h1>
            <p className='sub-title'> Create an account to start managing your bills.</p>

            <form className='signup-form'>
                <label htmlFor='email'>Email</label>
                <input  className='input' name='email' placeholder='m@example.com' id='email' required/>

                <label htmlFor='password'>Password</label>
                <input className='input' name='password'  id='password' required/>

                <label htmlFor='password'>Confirm Password</label>
                <input className='input' name='password'  id='password' required/>


                <Link to={'/login'} className='signup-btn'>Sign Up</Link>

            </form>

            <p className='owns-account'>Already have an account? <a href='/login'>Login</a></p>

        </div>

    </div>
  )
}

export default SignUp