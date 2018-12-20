import React, { Component } from 'react'
import { Alert, Button } from 'react-bootstrap'
import './style.css'

class Welcome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true,
            updateUser: this.props.updateUser
        }
    }
    handleDismiss = () => {
        this.setState({
            show: false
        })
    }

    logout = () => {
        this.state.updateUser(null)
        this.setState({show: false})
    }
    render() {
        
        if (this.state.show) {
            return (
                <Alert bsStyle="warning" onDismiss={this.handleDismiss}>
                    <p>
                        <strong>Welcome</strong>!&#8195;&#8195;
                        <Button  bsStyle="danger" bsSize="xsmall" onClick={this.logout}>Sign out</Button>
                        &#8195;
                        <Button bsSize="xsmall" onClick={this.handleDismiss}>Hide Alert</Button>
                    </p>
                </Alert>
            );
        }

        return (
            <div></div>
        )
    }
}

export default Welcome;
