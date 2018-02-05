import React, {Component} from 'react';
import Logo from '../assets/images/logo.png';
import '../assets/css/homepage.css';
import {NavLink, Route} from 'react-router-dom';
import Contact from './contact_info';
import App from './app';


const Header = () => {
    return (
            <div className="headerContainer">
                <div className="header">
                        <ul className="navmenu nav-tabs nav nav-item">
                            <li className="logoContainer"><img className='logo' src={Logo}></img></li>
                            <li><NavLink exact to={"/"} className='nav-link'>WELCOME</NavLink></li>
                            <li><a>OUR MACARONS</a></li>
                            <li><a>GIFTS & PARTIES</a></li>
                            <li><NavLink to={"/contact_info"} className='nav-link'>CONTACT</NavLink></li>
                        </ul>
                </div>

            </div>

    )
}

export default Header;