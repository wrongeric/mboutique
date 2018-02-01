import React from 'react';
import Header from './header';
import Welcome from './welcomeImage';
import WelcomeInfo from './welcomeInfo';

const App = () => (
    <div className="container">
        <Header />
        <Welcome />
        <WelcomeInfo />
    </div>
);

export default App;
