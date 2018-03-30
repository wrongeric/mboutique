import React from 'react';
import MacaronImage from '../assets/images/our-macarons-image.png';


const OurMacaronImage = () => {
    return (
        <div className="welcomeContainer">
            <img className={welcomeImage} src={MacaronImage} />
        </div>
    )
}

export default OurMacaronImage