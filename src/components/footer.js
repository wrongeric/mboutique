import React from 'react';
import mail  from '../assets/images/mail.png';
import phone from '../assets/images/phone.png';
import facebook from '../assets/images/facebook.png';
import twitter from '../assets/images/twitter.png';
import '../assets/css/footer.css';


const Footer = () => {
    return (
        <div className="footer">
            <br />
            <ul className="footer_info">

                <li className="footer_email">order@mboutique.com<img src={mail} /></li>

                <li className="footer_phone_number"> 949.800-3111 <img src={phone} /></li>

                <li className="footerfollowus">Follow us<img src={facebook} class="facebook" /><img src={twitter} class="twitter" /></li>
            </ul>
            <br />
            <p className="footer_copyright">Copyright @ 2014 MBoutique. All rights reserved.</p>
        </div>
    )
}

export default Footer