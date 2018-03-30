import React from 'react';
import Header from './header';
import WelcomeBanner from './welcomeBanner';
import WelcomeInfo from './welcomeInfo';
import Footer from './footer';
import Calendar from './weeklycalendar';

const HomePage = () => {
    return (
        <div className="container">
            <WelcomeBanner/>
            <WelcomeInfo/>
            <Calendar/>
        </div>
    )
}
export default HomePage