import React from 'react';
import welcomeImage from './welcome-image.png';

const WelcomeBanner = () => {
    return (
        <div className="welcomeContainer">
            <img className={welcomeImage} src={welcomeImage} />
        </div>
    )
}

export default WelcomeBanner