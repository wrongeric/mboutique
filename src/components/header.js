import React, {Component} from 'react';
import Logo from '../assets/images/logo.png';
import {NavLink, Route} from 'react-router-dom';
import Contact from './contact_info';
import App from './app';


const Header = () => {
    return (
                <div className="header">
                    <nav className="navigation">
                        <ul className="nav-list">
                            <li className="nav-item">
                                <NavLink exact to={"/"} className='nav-link'>WELCOME</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to={"/our-macarons"} className='nav-link'>OUR MACARONS</NavLink>
                            </li>
                            <li className="nav-item"><NavLink exact to={"/gifts_parties"} className='nav-link'>GIFTS & PARTIES</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/contact_info"} className='nav-link nav'>CONTACT</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
    )
}

export default Header;