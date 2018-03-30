import React from 'react';
import Header from './header';
import Footer from './footer';
import ContactImage from './contact_image';
import ContactInfo from './contact_info';


const ContactPage = () => (
    <div className="container">
        <ContactImage />
        <ContactInfo />
    </div>
);

export default ContactPage;
