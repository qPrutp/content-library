import React, { Component } from 'react'
import Welcome from './Welcome'
import NotLoggedIn from './NotLoggedIn'
import './style.css'

class AuthStatus extends Component {
    render() {
        const {user, updateUser} = this.props
        return (
            <div className="auth-status">
                {user ? <Welcome user={user} updateUser={updateUser}/> : <NotLoggedIn />}
            </div>
        );
    }
}

export default AuthStatus;
