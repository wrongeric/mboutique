import React, {Component} from 'react';
import Logo from '../assets/images/logo.png';
import {NavLink, Route} from 'react-router-dom';
import Contact from './contact_info';
import App from './app';


const Header = () => {
    return (
                <div className="header">
                    <nav className="nav-bar">
                        <ul className="navmenu nav-tabs nav nav-item">
                            <li><NavLink exact to={"/"} className='nav-link  nav-item'>WELCOME</NavLink></li>
                            <li><NavLink exact to={"/our-macarons"} className='nav-link  nav-item'>OUR MACARONS</NavLink></li>
                            <li className="nav-item"><a>GIFTS & PARTIES</a></li>
                            <li><NavLink to={"/contact_info"} className='nav-link nav-item'>CONTACT</NavLink></li>
                        </ul>
                    </nav>
                </div>
    )
}

export default Header;