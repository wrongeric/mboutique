import React from 'react';
import ContactImage from '../assets/images/contact-image.png';


const ContactHeader = () => {
    return (
        <div className="contactImageContainer">
            <img className="contactImage" src={ContactImage} />
        </div>
    )
}

export default ContactHeader;