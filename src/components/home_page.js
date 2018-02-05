import React from 'react';
import Header from './header';
import Welcome from './welcomeImage';
import Home from './welcomeInfo';
import Footer from './footer';
import Calendar from './weeklycalendar';

const HomePage = () => {
    return (
        <div>
            <Header/>
            <Welcome/>
            <Home/>
            <br/>
            <br/>
            <Calendar/>
            <br/>
            <br/>
            <Footer/>
        </div>
    )
}
export default HomePage