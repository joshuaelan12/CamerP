import React, { useState } from 'react'
import Sidebar from '../side-bar/Sidebar';
import { FaToggleOff } from 'react-icons/fa';

import './Tv.css';

const Tv = () => {
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
      <div className='tv'>
          <span className={toggleSideBar ? 'toggle-on' : 'toggle-off'}>
          <Sidebar isOpen={toggleSideBar} toggleSideBar={handleToggleSideBar}/>
          </span>
          <div className={toggleSideBar ? 'tv-content toggle-off' : 'tv-content toggle-on'}>
              <div className='sidebar-toggle-button' onClick={handleToggleSideBar}>
              <FaToggleOff size={25} />
              </div>

              <div className='tv-card'>
                <h1>TV Subscription - Canal+ / MTN TV</h1>

                <form className='tv-form' onSubmit={handleSubmit}>
                    

                    <label>Subscriber Number / Account ID</label>
                    <input name='number' type='number' 
                    placeholder='Enter your subscriber number' required></input>

                    <label htmlFor='package'>Subscription Package</label>
                    <select className='select-package' name='package' id='package' 
                    onChange={(e) => {
                      setSelectedValue(e.target.value);
                    }
                }
                    required>
                        <option value=''>Select Package</option>
                        <option value='250'>Daily (250 FCFA)</option>
                        <option value='100'>Weekly (1000 FCFA)</option>
                        <option value='2500'>Monthly (2500 FCFA)</option>

                        </select>


                    <label>Amount (XAF)</label>
                    <input name='amount' type='number' value={selectedValue} placeholder={selectedValue}></input>

                    <label>Mobile Wallet Number</label>
                    <input name='wallet' type='text' 
                    placeholder='e.g., 67000000'></input>

                    <p className='subtitle'>Enter the 9-digit number to be charged (without country code)</p>

                    <label>Payment Method</label>

                    <button className='pay-btn'>Subscribe Now</button>



                </form>

              </div>
              </div>

    </div>
  )
}

export default Tv