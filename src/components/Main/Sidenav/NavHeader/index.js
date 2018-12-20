import React, { Component } from 'react'
import './style.css'

class NavHeader extends Component {
    state = {
        srcNoName: 'image/users/user.svg',
        src: 'image/users/'
    }

    render() {
        const {user} = this.props
        return (
            <div className="nav-header">
                {user ? 
                    (<a href="#/cabinet"><img src={this.state.src+user.img} alt="img"/>&#8194;{user.name}</a>)
                    :
                    (<a href="#/cabinet"><img src={this.state.srcNoName} alt="img"/>&#8194;log in</a>)}
            </div>
        );
    }
}

export default NavHeader;
