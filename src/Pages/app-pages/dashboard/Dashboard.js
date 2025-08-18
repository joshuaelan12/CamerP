import React, { useState } from 'react'

import Sidebar from '../side-bar/Sidebar'
import './Dashboard.css'
import { FaBolt, FaPhone, FaTint, FaToggleOff, FaWifi } from 'react-icons/fa'
import { FiTv } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Dashboard = () => {

  const [toggleSideBar, setToggleSideBar] = useState(false);

  const handleToggleSideBar = () => {

    setToggleSideBar(!toggleSideBar);

  }


  return (
    <div className='dashboard' >
        <span className={toggleSideBar ? 'toggle-on' : 'toggle-off'}>
        <Sidebar isOpen={toggleSideBar} toggleSideBar={handleToggleSideBar}/>
        </span>
        <div className={toggleSideBar ? 'dashboard-content toggle-off' : 'dashboard-content toggle-on'}>
            <div className='sidebar-toggle-button' onClick={handleToggleSideBar}>
            <FaToggleOff size={25} />
            </div>
            <div className='header'>
                <h1 className='header-title'>Welcome back, Joshua Elangwe!</h1>
                <p className='subtitle'>What would you like to do today?</p>
            </div>
            <div className='dasboard-card-section'>

              <Link className='dashboard-card ' to={'/electricity'}>
                
                <div  className='card-header'>
                  <div className='card-title'>
                    <FaBolt className='dashboard-icons' size={25}/>
                    <h2>Electricity</h2>
                  </div>
                  <div className='arrow'>→</div>
                </div>
                <p className='subtitle card-sub'>Click here to pay your electricity 
                  bill or top-up.</p>
              </Link>

              <Link  to={'/water'} className='dashboard-card'>
                
                <div  className='card-header'>
                  <div className='card-title'>
                    <FaTint className='dashboard-icons' size={25}/>
                    <h2>Water</h2>
                  </div>
                  <div className='arrow'>→</div>
                </div>
                <p className='subtitle card-sub'>Click here to pay your water 
                  bill or top-up.</p>
              </Link>

              <Link to={'/tv'} className='dashboard-card'>
                
                <div  className='card-header'>
                  <div className='card-title'>
                    <FiTv className='dashboard-icons' size={25}/>
                    <h2>TV</h2>
                  </div>
                  <div className='arrow'>→</div>
                </div>
                <p className='subtitle card-sub'>Click here to pay your tv 
                  bill or top-up.</p>
              </Link>

              <Link className='dashboard-card'>
                
                <div  className='card-header'>
                  <div className='card-title'>
                    <FaWifi className='dashboard-icons' size={25}/>
                    <h2>Internet</h2>
                  </div>
                  <div className='arrow'>→</div>
                </div>
                <p className='subtitle card-sub'>Click here to pay your internet 
                  bill or top-up.</p>
              </Link>

              <Link className='dashboard-card'>
                
                <div  className='card-header'>
                  <div className='card-title'>
                    <FaPhone className='dashboard-icons' size={25}/>
                    <h2>Airtime & Data</h2>
                  </div>
                  <div className='arrow'>→</div>
                </div>
                <p className='subtitle card-sub'>Click here to pay your airtime & data 
                  bill or top-up.</p>
              </Link>      

            </div>

        </div>
    </div>
  )
}

export default Dashboard