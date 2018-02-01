import React from 'react';
import welcomeImage from './welcome-image.png';

const Welcome = () => {
    return (
        <div className={"welcomeContainer"}>
            <img className={welcomeImage} src={welcomeImage} />
            {/*<div className={"welcomeContainer"}></div>*/}
        </div>
    )
}

export default Welcome
