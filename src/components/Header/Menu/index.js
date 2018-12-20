import React, { Component } from 'react'
import './style.css'

class Menu extends Component {
    state = {
        user: null,
        updateUser: this.props.updateUser
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ user: nextProps.user })
    }

    logout = () => {
        this.state.updateUser(null)
        this.setState({ user: null })
    }

    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#/">My Lib</a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar" style={{overflow: 'hidden'}}>
                        <ul className="nav navbar-nav">
                            <li><a href="#/features">Features</a></li>
                            <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" href="#/">Events <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#/events">My Events</a></li>
                                    <li><a href="#/allevents">All Events</a></li>
                                </ul>
                            </li>
                            <li><a href="#/contacts">Contacts</a></li>
                            <li><a href="#/cabinet">Cabinet</a></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <form className="navbar-form navbar-left" action="/action_page.php">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search" />
                                        <div className="input-group-btn">
                                            <button className="btn btn-default" type="submit">
                                                <i className="glyphicon glyphicon-search"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </li>
                            {
                                this.state.user ?
                                    <li><a href="#/" onClick={this.logout}><span className="glyphicon glyphicon-user"></span> Logout</a></li>
                                :
                                    (<ul className="nav navbar-nav">
                                        <li><a href="#/signup"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                                        <li><a href="#/login"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                                    </ul>)    
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Menu;
