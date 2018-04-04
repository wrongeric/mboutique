import React from 'react';
import mail  from '../assets/images/mail.png';
import phone from '../assets/images/phone.png';
import facebook from '../assets/images/facebook.png';
import twitter from '../assets/images/twitter.png';
import '../assets/css/footer.css';


const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer_email"><img src={mail} />order@mboutique.com</div>
                <div className="footer_phone_number"> <img src={phone} />949.800-3111</div>
                <div className="footer_follow_us">Follow us<img src={facebook} className="facebook" /><img src={twitter} className="twitter" /></div>
            </div>
            <p className="footer_copyright">Copyright @ 2014 MBoutique. All rights reserved.</p>
        </footer>
    )
}

export default Footer