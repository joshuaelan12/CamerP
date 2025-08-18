import React, { useState } from 'react'
import Sidebar from '../side-bar/Sidebar';
import { FaToggleOff } from 'react-icons/fa';

import './AirtimeData.css';

const Airtime = () => {
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
      <div className='airtime'>
          <span className={toggleSideBar ? 'toggle-on' : 'toggle-off'}>
          <Sidebar isOpen={toggleSideBar} toggleSideBar={handleToggleSideBar}/>
          </span>
          <div className={toggleSideBar ? 'airtime-content toggle-off' : 'airtime-content toggle-on'}>
              <div className='sidebar-toggle-button' onClick={handleToggleSideBar}>
              <FaToggleOff size={25} />
              </div>
           

            <div className='airtime-card'>
              
                <h2>Buy Airtime</h2>
              
              <form className='airtime-form' onSubmit={handleSubmit}>
              
              <label>Provider</label>
                <select className='select-package' name='provider' id='provider' 
                onChange={(e) => {
                  setSelectedValue(e.target.value);
                }
            }                               
                required>
                    <option value=''>Select Provider</option>
                    <option value='MTN'>MTN</option>
                    <option value='ORANGE'>ORANGE </option>
                    <option value='CAMTEL'>CAMTEL</option>
                    <option value='NEXTEL'>NEXTEL </option>
                    
                    </select>

                    <label>Amount</label>
                <input name='amount' id='amount'  type='number' 
                placeholder='Enter Amount'></input>

                 

                <label>Mobile Phone Number</label>
                <input name='phone' id='phone' type='text' 
                placeholder='e.g., 67000000'></input>

                <p className='subtitle'>Enter the 9-digit number to be charged (without country code)</p>

                
                <button className='pay-btn'>Buy Now</button>

                
              </form>

            </div>
         </div>

    </div>
  )
}

export default Airtime