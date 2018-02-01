import React from 'react';
import Header from './header';
import Welcome from './welcomeImage';
import Home from './welcomeInfo';
import Footer from './footer';

const App = () => (
    <div className="container">
        <Header />
        <Welcome />
        <Home />
        <Footer />
    </div>
);

export default App;
