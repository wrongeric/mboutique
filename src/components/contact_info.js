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
                    <p>
                        Monday - Friday } 10am - 9pm
                        <br/>
                        Saturday | 10am - 8pm
                        <br/>
                        Sunday | 11am -7pm
                        <br/>
                        Closed Thanksgiving Day,
                        <br/>
                        Christmas Day, and Easter
                        <br/>
                        <br/>
                        1625 Post st
                        <br/>
                        San Francisco, CA 94115
                        <br/>
                        <br/>
                        949 800-3111
                        <br/>
                        <a className="orderLink">order@mboutique.com</a>
                        <br/>
                        <br/>
                        Send your questions, comments and flavor
                        <br/>
                        suggestions or place an order!;
                    </p>
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
                            <button type='button' className={'btn-danger margin-left'} onClick={this.handleSubmit}>Send</button>
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