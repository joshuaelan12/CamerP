import React, { useState } from 'react'
import Sidebar from '../side-bar/Sidebar';
import { FaToggleOff } from 'react-icons/fa';

import './Water.css';

const Water = () => {
    const [toggleSideBar, setToggleSideBar] = useState(false);

    const handleToggleSideBar = () => {
  
      setToggleSideBar(!toggleSideBar);
  
    }

    const [selectedValue, setSelectedValue] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      alert(`You selected: ${selectedValue}`);
    };
  
  
    return (
      <div className='water'>
          <span className={toggleSideBar ? 'toggle-on' : 'toggle-off'}>
          <Sidebar isOpen={toggleSideBar} toggleSideBar={handleToggleSideBar}/>
          </span>
          <div className={toggleSideBar ? 'water-content toggle-off' : 'water-content toggle-on'}>
              <div className='sidebar-toggle-button' onClick={handleToggleSideBar}>
              <FaToggleOff size={25} />
              </div>
           

            <div className='water-card'>
              
                <h2>Pay CamWater Bill</h2>
              
              <form className='water-form' onSubmit={handleSubmit}>
                <label>Costumer ID/ Contract Number</label>
                <input name='number' type='number' 
                placeholder='Enter your 10 digit contact number' required></input>

                <label htmlFor='amount'>Amount (XAF)</label>
                <input name='amount' type='number'  placeholder='Enter Amount'></input>

                <label>Mobile Wallet Number</label>
                <input name='wallet' type='text' 
                placeholder='e.g., 67000000'></input>

                <p className='subtitle'>Enter the 9-digit number to be charged (without country code)</p>

                <label>Payment Provider</label>
                <select className='select-package' name='package' id='package' 
                onChange={(e) => {
                  setSelectedValue(e.target.value);
                }
            }                               
                required>
                    <option value=''>Select Provider</option>
                    <option value='MTN'>MTN</option>
                    <option value='ORANGE'>ORANGE MONEY</option>
                    
                    </select>

                <label>Payment Method</label>

                <button className='pay-btn'>Pay Now</button>





                
              </form>

            </div>
         </div>

    </div>
  )
}

export default Water