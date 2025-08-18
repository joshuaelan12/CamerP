import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import {MdDashboard, MdSupportAgent} from 'react-icons/md'
import {FaCreditCard, FaPhone, FaUser, FaBolt, FaTint, FaTv, FaToggleOn} from 'react-icons/fa'
import {BsClockHistory} from 'react-icons/bs'
import {FiLogOut, FiWifi} from 'react-icons/fi'



import logo from '../side-bar/images/camerpay.png'

import './Sidebar.css'
import '../dashboard/Dashboard.css'

const Sidebar = ({ toggleSideBar}) => {

    const [billsDropdown, setBillsDropdown] = useState(false);

    const handleBillsDropdown = () => {
        
        setBillsDropdown(!billsDropdown);
    }



  return (
    <div className='sidebar'>
        <div className='sidebar-content1'>
            <div className='logo'>
                <img className='brand-logo' src={logo} alt="logo"></img>
                <span className='brand-name'>CamerPay</span>

                <span className='toggle-side none1' onClick={toggleSideBar}>
                    <FaToggleOn size={25}/>
                </span>

            </div>

            <div className='sidebar-links'>

                <Link to={'/dashboard'} className='sidebar-link' onClick={toggleSideBar}> <MdDashboard /> Dashboard</Link>
                
                <div onClick={handleBillsDropdown} className={ billsDropdown ? 'sidebar-link bills-dropdown' : 'sidebar-link' }>
                     <span className='credit-card'><FaCreditCard /> Pay Bills</span>
                     <div className={ billsDropdown ? 'bill-pages' : 'none' } >

                        <Link to={'/electricity'} className='bill-links' onClick={toggleSideBar}><FaBolt /> Electricity</Link>
                        <Link to={'/water'} className='bill-links' onClick={toggleSideBar}><FaTint /> Water</Link>
                        <Link to={'/tv'} className='bill-links' onClick={toggleSideBar}><FaTv /> TV</Link>
                        <Link to={'/internet'} className='bill-links' onClick={toggleSideBar}><FiWifi /> Internet</Link>

                     </div>
                     
                     </div>
                <Link to={'/airtime-data'} className='sidebar-link' onClick={toggleSideBar}> <FaPhone />Buy Airtime </Link>
                <Link className='sidebar-link' onClick={toggleSideBar}> <BsClockHistory />Transaction History</Link>
                <Link className='sidebar-link' onClick={toggleSideBar}> <FaUser /> My Profile</Link>
                <Link className='sidebar-link' onClick={toggleSideBar}> <MdSupportAgent /> Support</Link>
                
            </div>

        </div>

        <div className='sidebar-content2'>
            <div className='action-buttons'>

                <Link className='View-profile-btn sidebar-link' onClick={toggleSideBar}> <FaUser /> View Profile</Link>
                <Link className='logout-btn sidebar-link' onClick={toggleSideBar}> <FiLogOut /> Logout</Link>


            </div>

        </div>
    </div>
  )
}

export default Sidebar; 