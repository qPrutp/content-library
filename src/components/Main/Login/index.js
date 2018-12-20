import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import FormLogIn from './FormLogIn'
import './style.css'

class Login extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            show: true,
        };
    }

    render() {
        const { user, updateUser } = this.props
        const { from } = this.props.location.state || { from: { pathname: "/cabinet" } }

        return (
            <div className="modal-container">
                <Modal  show={this.state.show}>
                    <Modal.Body>
                        <FormLogIn from={from} user={user} updateUser={updateUser} />
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default Login;
