import React from 'react';
import Header from './header';
import Welcome from './welcomeImage';
import Home from './welcomeInfo';
import Footer from './footer';
import Calendar from './weeklycalendar';

const HomePage = () => {
    return (
        <div className="container">
            <Welcome/>
            <Home/>
            <Calendar/>
        </div>
    )
}
export default HomePage