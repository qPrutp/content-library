import React, { Component } from 'react'
import AuthStatus from './AuthStatus'
import Menu from './Menu'
import Slider from './Slider'
import Breadcrumbs from './Breadcrumbs'
import './style.css'

class Header extends Component {
    render() {
        const {user, updateUser } = this.props
        return (
            <header className="header">
                <AuthStatus user={user} updateUser={updateUser} />
                <Menu  user={user} updateUser={updateUser} />
                {window.location.hash === '#/' ? <Slider /> : ''}
                <Breadcrumbs />
            </header>
        );
    }
}

export default Header
