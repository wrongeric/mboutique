import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';

class Form extends Component {
    constructor(props) {
        super(props);

    }

    sendData(values,dispatch,props){
        console.log("Form Submitted:", values);
        props.reset();
    }

    renderInput(props) {
        return (
            <div className="form-group">
                <label>{props.label}</label>
                <input {...props.input} type={props.type ? props.type: 'text'} className="form-control" />
                <p className="error-text">{props.meta.touched && props.meta.error}</p>
            </div>
        )
    }

    renderTextArea(props){
        return (
            <div className="form-group">
                <label>{props.label}</label>
                <textarea {...props.input} type={props.type ? props.type: 'text'} className="form-control" />
                <p className="error-text">{props.meta.touched && props.meta.error}</p>
            </div>
        )
    }

    render(){
        const submitted = this.props.submittedSucceeded;
        console.log('Props:', this.props);

        return (

                <div className="contactFormContainer">
                    <form onSubmit={this.props.handleSubmit(this.sendData)}>
                        <p className="contactFormHeader">Contact Form</p>
                        <div>
                            <label>Name</label>
                            <Field id="name" name="name"  type="text" placeholder="Name" onChange={this.handleInputChange} component={this.renderInput} />
                        </div>
                        <div>
                            <label>Email</label>
                            <Field id ="email" name="email"  type="email" placeholder="Email" onChange={this.handleInputChange} component={this.renderInput} />
                        </div>
                        <div>
                        <label>Phone</label>
                        <Field id="phone" name="phone" type="tel" placeholder="Phone Number" onChange={this.handleInputChange} component={this.renderInput}  />
                        </div>
                        <div className="message-div">
                            <label>Message</label>
                            <Field id="message" name="message" type="text" placeholder="Message" onChange={this.handleInputChange} component={this.renderTextArea}  />
                        </div>
                            <div className='col-xs-3'>
                            <button type='button' className={'margin-left form-button'} onClick={this.props.handleSubmit(this.sendData)}>Send</button>
                        </div>
                        {/*<i style={{ opacity: submitted ? 1 : 0 }} className="large material-icons messageSent z-depth-1">playlist_add_check</i>*/}
                    </form>
                </div>
        )
    }
}

function validate(values) {
    const error = {};

    if (!values.name) {
        error.name = 'Please enter your Name.'
    } else if (values.name.length < 2 || !isNaN(values.name)) {
        error.name = 'Please enter your Name.'
    }
    if (!values.email) {
        error.email = 'Please enter email address.'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        error.email = 'Invalid email address'
    }

    if (!values.message) {
        error.message = 'Please enter a message'
    } else if (values.message.length < 16) {
        error.message = 'Must be at least 15 characters'
    }
    if (!values.phone) {
        error.phone = 'Please enter a phone number'
    } else if (!/\d{3}-\d{3}-\d{4}/.test(values.phone)) {
        error.phone = 'Please Enter Valid # XXX-XXX-XXXX'
    }

    return error;
}

Form = reduxForm({
    form: 'contact-form',
    validate
})(Form);

export default Form;
