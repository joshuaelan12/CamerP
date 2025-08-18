import React, { useState } from 'react'
import Sidebar from '../side-bar/Sidebar';
import { FaToggleOff } from 'react-icons/fa';

import './Internet.css';

const Internet = () => {
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
      <div className='internet'>
          <span className={toggleSideBar ? 'toggle-on' : 'toggle-off'}>
          <Sidebar isOpen={toggleSideBar} toggleSideBar={handleToggleSideBar}/>
          </span>
          <div className={toggleSideBar ? 'internet-content toggle-off' : 'internet-content toggle-on'}>
              <div className='sidebar-toggle-button' onClick={handleToggleSideBar}>
              <FaToggleOff size={25} />
              </div>
           

            <div className='internet-card'>
              
                <h2>Buy Internet Data</h2>
              
              <form className='internet-form' onSubmit={handleSubmit}>
              
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

                 <label>Bundle Package</label>
                <select className='select-package' name='package' id='package' 
                onChange={(e) => {
                  setSelectedValue(e.target.value);
                }
            }                               
                required>
                    <option value=''>Select Package</option>
                    
                    
                    </select>

                <label>Mobile Phone Number</label>
                <input name='phone' id='phone' type='text' 
                placeholder='e.g., 67000000'></input>

                <p className='subtitle'>Enter the 9-digit number to be charged (without country code)</p>

                
                <button className='pay-btn'>Pay Now</button>

                
              </form>

            </div>
         </div>

    </div>
  )
}

export default Internet