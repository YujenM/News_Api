import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icon from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import {navbarinfo} from './Navbarinfo'
import logo from './Images/Marvellogo.png'
import './Nav.css'

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <div>
            <div className='Navbar'>
                <Link to="#" className='menubars'>
                    <FontAwesomeIcon icon={icon.faBars} size='xl' onClick={showSidebar} />
                </Link>
                <div className='marvellogo'>
                    <img className='marvellogoimg' src={logo} alt='Logo'></img>
                </div>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                    <Link to='#' className='menu-bars'>
                        <FontAwesomeIcon className='menubars' icon={icon.faTimes} />
                    </Link>
                    </li>
                    {navbarinfo.map((item, index) => (
                    <li key={index} className={item.cName}>
                        <Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                    </li>
                    ))}
                </ul>
            </nav>
        </div>
        );
    };

export default Navbar;
