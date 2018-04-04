import React, {Component} from 'react';
import macaronsImage from '../assets/images/macarons-image.png';
import '../assets/css/contact_info.css';
import Form from './contact_form';


class ContactInfo extends Component {

    constructor(props) {
        super(props);

    }

    render(){

        return (
            <div className="contactInfoContainer">
                <div className="contactInfo">
                    <p className="visitUs">Visit Us</p>
                    <div className="visitUsInfo">
                        <div>Monday - Friday | 10am - 9pm</div>
                        <div>Saturday | 10am - 8pm</div>
                        <div>Sunday | 11am -7pm</div>
                        <div>Closed Thanksgiving Day,</div>
                        <div className="holiday">Christmas Day, and Easter</div>
                        <div>1625 Post St.</div>
                        <div>San Francisco, CA 94115</div>
                        <div>949 800-3111</div>
                        <div className="order-div">
                            <a className="orderLink">order@mboutique.com</a>
                        </div>
                    </div>
                    <div className="send-questions">
                        <p>Send your questions, comments and flavor suggestions or place an order! </p>
                    </div>
                </div>
                <Form />
                {/*<div className="contactInfoImage">*/}
                    {/*<img src={macaronsImage}/>*/}
                {/*</div>*/}
            </div>
        )
    }
}

export default ContactInfo;