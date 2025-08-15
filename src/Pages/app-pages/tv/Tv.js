import React, { useState } from 'react'
import Sidebar from '../side-bar/Sidebar';
import { FaToggleOff } from 'react-icons/fa';

const Tv = () => {
    const [toggleSideBar, setToggleSideBar] = useState(false);

    const handleToggleSideBar = () => {
  
      setToggleSideBar(!toggleSideBar);
  
    }
  
  
    return (
      <div className='tv'>
          <span className={toggleSideBar ? 'toggle-on' : 'toggle-off'}>
          <Sidebar isOpen={toggleSideBar} toggleSideBar={handleToggleSideBar}/>
          </span>
          <div className={toggleSideBar ? 'tv-content toggle-off' : 'tv-content toggle-on'}>
              <div className='sidebar-toggle-button' onClick={handleToggleSideBar}>
              <FaToggleOff size={25} />
              </div>
              </div>

    </div>
  )
}

export default Tv