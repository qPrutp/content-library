import React, { Component } from 'react'
import { Alert } from 'react-bootstrap'
import './style.css'

class NotLoggedIn extends Component {
    state = {
        show: true
    }
    handleDismiss = () => {
        this.setState({
            show: false
        })
    }
    render() {
        if (this.state.show) {
            return (
                <Alert bsStyle="warning" onDismiss={this.handleDismiss}>
                    <strong>You are not logged in.</strong>
                </Alert>
            );
        }

        return (
            <div></div>
        )
    }
}

export default NotLoggedIn;
