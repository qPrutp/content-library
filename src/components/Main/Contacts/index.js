import React, { Component } from 'react'
import ContactFotm from './ContactForm'
import Maps from './Maps'
import './style.css'

class Contacts extends Component {
    render() {
        return (
            <div className="contats">
                <div className="contats-header">
                    <h1 className="display-3 overline underline">
                        Contat Us
                    </h1>
                </div>
                <div className="contact-form__block">
                    <ContactFotm />
                </div>
                <div className="contact-map__block">
                    <Maps />
                </div>
            </div>
        );
    }
}

export default Contacts;
