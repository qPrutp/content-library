import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Scrollbars } from 'react-custom-scrollbars';
import SecretRoute from './SecretRoute'
import Sidenav from './Sidenav'
import Home from './Home'
import Features from './Features'
import Events from './Events'
import Contacts from './Contacts'
import Login from './Login'
import Signup from './Signup'
import Logout from './Logout'
import Cabinet from './Cabinet'
import './style.css'

class Main extends Component {
    state = {
        showSidenav: false
    }

    componentWillUnmount() {
        
    }

    updateShowSidenav  = () => {
        this.setState({
            showSidenav: !this.state.showSidenav
        })
    }
    render() {
        const { user, updateUser, privateContent, updatePrivateContent, deleteItemContent, content } = this.props
        const WrappedLogin = (props) => <Login user={user} updateUser={updateUser} {...props}/>
        const WrappedSecretRoute = (props) => <SecretRoute user={user} {...props}/>
        const WrappedCabinet = (props) => <Cabinet user={user} privateContent={privateContent} updatePrivateContent={updatePrivateContent}
                                                    deleteItemContent={deleteItemContent} content={content} {...props}/>
        return (
            <div className="main">
                <button className="show-sidenav" onClick={this.updateShowSidenav}>{this.state.showSidenav ? <span>&#8659;</span> : <span >&#8657;</span>}</button>
                <Sidenav user={user} updateShow={this.state.showSidenav} />
                <div className="main-content main-column">
                    <Scrollbars autoHide renderTrackHorizontal={props => <div {...props} className="track-horizontal" style={{display:"none"}}/>}>
                        <Route path="/" exact component={Home}/>
                        <Route path="/features" component={Features}/>
                        <Route path="/events" component={Events}/>
                        <Route path="/allevents" component={Home}/>
                        <Route path="/contacts" component={Contacts}/>
                        <Route path='/login' component={WrappedLogin} />
                        <Route path="/signup" component={Signup}/>
                        <Route path='/logout' component={Logout} />
                        <WrappedSecretRoute path="/cabinet" component={WrappedCabinet}/>
                    </Scrollbars>
                </div>
            </div>
        );
    }
}

export default Main;
