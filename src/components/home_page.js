import React from 'react';
import Header from './header';
import WelcomeBanner from './welcomeBanner';
import Home from './welcomeInfo';
import Footer from './footer';
import Calendar from './weeklycalendar';

const HomePage = () => {
    return (
        <div className="container">
            <WelcomeBanner/>
            <Home/>
            <Calendar/>
        </div>
    )
}
export default HomePage