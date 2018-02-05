import React, {Component} from 'react';
import Logo from '../assets/images/logo.png';
import '../assets/css/homepage.css';


const Header = () => {
    return (
            <div className="headerContainer">
                <div className="header">
                        <ul className="navmenu">
                            <li className="logoContainer"><img className='logo' src={Logo}></img></li>
                            <li><a>WELCOME</a></li>
                            <li><a>OUR MACARONS</a></li>
                            <li><a>GIFTS & PARTIES</a></li>
                            <li><a>CONTACT</a></li>
                        </ul>
                </div>
                {/*<div className="welcomeImage">*/}
                    {/*<img src={welcomeImage}></img>*/}
                {/*</div>*/}
            </div>

    )
}

export default Header;