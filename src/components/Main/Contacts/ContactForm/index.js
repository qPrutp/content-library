import React, { Component } from 'react'
import { Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import './style.css'

class ContactFotm extends Component {
    constructor(props, context) {
        super(props, context)

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            textMessage: '',
            error: false
        };

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        const data = this.state
        console.log("was sanded: ", JSON.stringify(data))
    }

    handleChange(event) {
        switch(event.target.id) {
            case 'firstName':
                this.setState({
                    firstName: event.target.value
                })
                break;
            case 'lastName':
                this.setState({
                    lastName: event.target.value
                })
                break;
            case 'email':
                this.setState({
                    email: event.target.value
                })
                break;
            case 'textMessage':
                this.setState({
                    textMessage: event.target.value
                })
                break;
            default:
                break;
        }
    }
    render() {
        return (
            <Form onSubmit={this.handleSubmit} method="POST">
                <FormGroup controlId="firslName">
                    <ControlLabel>First Name</ControlLabel>
                    <FormControl type="text" onChange={this.handleChange} required />
                </FormGroup>
                <FormGroup controlId="lastName">
                    <ControlLabel>Last Name</ControlLabel>
                    <FormControl type="text" onChange={this.handleChange} required />
                </FormGroup>
                <FormGroup controlId="email">
                    <ControlLabel>Email</ControlLabel>
                    <FormControl type="email" onChange={this.handleChange} required />
                </FormGroup>
                <FormGroup controlId="textMessage">
                    <ControlLabel>How can we help you?</ControlLabel>
                    <FormControl componentClass="textarea" rows={4} maxLength={4000} onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                        <p className="submitCenter"><input type="submit" className="messageSend" value="Send"/></p>
                </FormGroup>
            </Form>
        );
    }
}

export default ContactFotm;
