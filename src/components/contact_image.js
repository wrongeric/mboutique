import React from 'react';
import ContactImage from '../assets/images/contact-image.png';
import '../assets/css/contact_image.css';


const ContactHeader = () => {
    return (
        <div className="contactImageContainer">
            <img className="contactImage" src={ContactImage} />
        </div>
    )
}

export default ContactHeader;