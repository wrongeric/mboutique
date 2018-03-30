import React from 'react';
import GiftsImage from '../assets/images/gifts-parties-image.png';

const GiftsBanner = () => {
    return (
        <div className="gifts-image-container">
            <img className="giftsImage" src={GiftsImage}></img>
        </div>
    )
}

export default GiftsBanner;