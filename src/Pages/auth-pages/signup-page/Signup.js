import React from 'react'

import './Signup.css'


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


                <button className='signup-btn'>Sign Up</button>

            </form>

            <p className='owns-account'>Already have an account? <a href='/login'>Login</a></p>

        </div>

    </div>
  )
}

export default SignUp