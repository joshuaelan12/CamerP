import React from 'react'

import { Link } from 'react-router-dom'

import './Welcome.css'
import logo from './images/camerpay.png'

const Welcome = () => {
  return (
    <div className='Welcome'>
        
        <header className='welcomeHeader'>

          <div className='logo'>
            <img className='brand-logo' src={logo} alt="logo"></img>
            <span className='brand-name'>CamerPay</span>

          </div>

          <div className='auth-buttons'>
            <Link to='/login' className='login-btn'>Login</Link>
            <Link to='/signup' className='signup-btn'>SignUp</Link>

          </div>

        </header>

        <div className='welcome-content'>
          <div className='welcome-card'>
            <h1 className='welcome-title'>Welcome to <span>CamerPay</span></h1>
            <p className='subtitle'>The simplest way to pay your bills in Cameroon.</p>

            <p>Tired of long queues and complicated payment processes? 
              CamerPay brings all your bill payments into one place.
              Pay for electricity, water, TV subscription, and top up your
              airtime and data instantly and securely.
            </p>

            <img className='welcome-picture' src={logo} alt="logo"></img>
            <Link to='/signup' className='signup-btn getstarted-btn'>Get Started  <span className='arrow'>→</span></Link>

</div>


          

        </div>


    </div>
  )
}

export default Welcome