import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { apiBaseUrl } from '../../index';
import toast from 'react-hot-toast';

function Navbar() {
    const [navAction, setNavAction] = useState(false);
    const navHandler = (e) => {
        e.preventDefault();
        setNavAction(!navAction);
    }

    // logout handler
    const logoutHandler = async (e) => {
        e.preventDefault();
        try
        {
            const response = await axios.get(`${apiBaseUrl}/api/v1/user/logout`,{
                withCredentials : true
            });
            location.reload();
            toast.success("User Logout Successfully");
        }
        catch(error)
        {
            toast.error(`Error Logout : ${error.response ? error.response.data : error.message}`)
        }
    }
  return (
    <nav>
        <div className='logo_div'>
            <a href='#' className='nav_toggle_btn open_nav' onClick={(e) => navHandler(e)}>&#9776;</a>
            <NavLink to='/' className='logo'>Todo</NavLink>
        </div>

        <ul className={navAction ? 'show' : ''}>
            <div className='close_nav_div'>
                <a href='#' className='nav_toggle_btn close_nav' onClick={(e) => navHandler(e)}>&#10005;</a>
            </div>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/addtask">Add Task</NavLink></li>
            <li><a href="#" onClick={e => logoutHandler(e)}>Logout</a></li>
        </ul>
    </nav>
  )
}

export default Navbar;