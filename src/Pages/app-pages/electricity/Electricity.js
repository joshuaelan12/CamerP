import React, { useState } from 'react'
import Sidebar from '../side-bar/Sidebar';
import { FaToggleOff } from 'react-icons/fa';

import './Electricity.css'


const Electricity = () => {
    const [toggleSideBar, setToggleSideBar] = useState(false);

    const handleToggleSideBar = () => {
  
      setToggleSideBar(!toggleSideBar);
  
    }
  
  
    return (
      <div className='electricity'>
          <span className={toggleSideBar ? 'toggle-on' : 'toggle-off'}>
          <Sidebar isOpen={toggleSideBar} toggleSideBar={handleToggleSideBar}/>
          </span>
          <div className={toggleSideBar ? 'electricity-content toggle-off' : 'electricity-content toggle-on'}>
              <div className='sidebar-toggle-button' onClick={handleToggleSideBar}>
              <FaToggleOff size={25} />
              </div>
              <div className='header'>
                  <h1 className='header-title'>Pay ENEO Electricity Bill</h1>
              </div>
              <form className='electricity-form'>
               
               <label>Meter Number</label>
               <input type="text" name='meter-number' placeholder='Enter your meter number'></input>
               
               <label>Amount (XAF) </label>
               <input type="text" name='amount' placeholder='Enter your amount'></input>

               <label>Mobile Wallet Number</label>
               <input type="text" name='mobile-number' placeholder='eg., 670000000'></input>
               <p className='subtitle'>Enter the 9-digit Number (without country code)</p>

               <label>Payment Provider</label>
               <input name='payment-provider' placeholder='Select Payment Provider'></input>
               
               <label>Payment Method</label>
               <input name='payment-method' placeholder='Select Payment Method'></input>

               <button className='pay-btn'>Pay</button>




              </form>
            </div>
      </div>
  )
}

export default Electricity