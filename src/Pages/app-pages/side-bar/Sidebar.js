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

                <Link to={'/dashboard'} className='sidebar-link'> <MdDashboard /> Dashboard</Link>
                
                <div onClick={handleBillsDropdown} className={ billsDropdown ? 'sidebar-link bills-dropdown' : 'sidebar-link' }>
                     <span className='credit-card'><FaCreditCard /> Pay Bills</span>
                     <div className={ billsDropdown ? 'bill-pages' : 'none' } >

                        <Link to={'/electricity'} className='bill-links'><FaBolt /> Electricity</Link>
                        <Link to={'/tv'} className='bill-links'><FaTint /> Water</Link>
                        <Link to={'/tv'} className='bill-links'><FaTv /> TV</Link>
                        <Link className='bill-links'><FiWifi /> Internet</Link>

                     </div>
                     
                     </div>
                <Link className='sidebar-link'> <FaPhone /> Airtime and Data</Link>
                <Link className='sidebar-link'> <BsClockHistory />Transaction Histoy</Link>
                <Link className='sidebar-link'> <FaUser /> My Profile</Link>
                <Link className='sidebar-link'> <MdSupportAgent /> Support</Link>
                
            </div>

        </div>

        <div className='sidebar-content2'>
            <div className='action-buttons'>

                <Link className='View-profile-btn sidebar-link'> <FaUser /> View Profile</Link>
                <Link className='logout-btn sidebar-link'> <FiLogOut /> Logout</Link>


            </div>

        </div>
    </div>
  )
}

export default Sidebar; 