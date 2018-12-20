import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import './style.css'

class Logout extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            redirectToHomeRoute: false
        };
    }

    logout = () => {
        this.setState({ redirectToHomeRoute: true });
    }
    render() {
        const { redirectToHomeRoute } = this.state;
        if(redirectToHomeRoute) return <Redirect to={"/"} />;
        return (
            <div>
                <button onClick={this.logout}>Logout11</button>
            </div>
        );
    }
}

export default Logout;
