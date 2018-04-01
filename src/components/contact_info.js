import React, {Component} from 'react';
import macaronsImage from '../assets/images/macarons-image.png';
import '../assets/css/contact_info.css';

class ContactInfo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            form: {
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
            }
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const {value, name} = event.target;
        const {form} = this.state;
        form[name] = value;

        this.setState({
            form: {...form}
        })
    }

    handleSubmit(event){
        event.preventDefault();
        console.log('handleSubmit called, form values are: ', this.state.form);
    }

    render(){
        const {name, email, phone, subject, message} = this.state;
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
                    <div>Send your questions, comments and flavor suggestions or place an order!</div>
                    </div>
                </div>
                <div className="contactFormContainer">

                    <form>
                        <p className="contactFormHeader">Contact Form</p>
                        <input name="name" label="Name" type="text" placeholder="Name" onChange={this.handleInputChange} value={name} />
                        <input name="email" label="Email" type="email" placeholder="Email" onChange={this.handleInputChange} value={email} />
                        <input name="phone" label="Phone" type="tel" placeholder="Phone Number" onChange={this.handleInputChange} value={phone}  />
                        <input name="subject" label="Subject" type="text" placeholder="Subject" onChange={this.handleInputChange} value={subject}  />
                        <textarea className="textArea" name="message" label="Message" type="text" placeholder="Message" onChange={this.handleInputChange} value={message}  />
                        <div className='col-xs-3'>
                            <button type='button' className={'margin-left form-button'} onClick={this.handleSubmit}>Send</button>
                        </div>
                    </form>

                </div>
                <div className="contactInfoImage">
                    <img src={macaronsImage}/>
                </div>

            </div>
        )
    }
}

export default ContactInfo;