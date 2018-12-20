import React, { Component } from 'react'
import Sticky from 'react-stickynode';
import Header from '../Header'
import Main from '../Main'
import Footer from '../Footer'
import './style.css'

class App extends Component {
    state = {
        user: null,
        privateContent: {},
        content: [],
        sidenav: false
    }

    updateUser  = (user) => {
        if(user === null) {
            localStorage.removeItem('isLoaded')
            localStorage.removeItem('user')
            localStorage.removeItem('userContent')
            
            this.setState({
                user: user,
                privateContent: {},
            })
        }

        if(user) {
            localStorage.setItem('isLoaded', true)
            localStorage.setItem('user', JSON.stringify(user))

            this.setState({
                user: user,
                privateContent: user,
                content: []
            })
        }
    }

    updatePrivateContent = (privateContent) => {
        this.setState({
            privateContent: privateContent
        })
    }

    deleteItemContent = (category, value) => {
        // let privateContent = this.state.privateContent
        // console.log(category, ' : ', value)
        // console.log(this.state.privateContent)
        // let newCategory = privateContent[category].filter(function(item) {
        //     if(item !== value)
        //         return item
        // })

        // console.log("deleteItemContent: ", privateContent)
        // privateContent.category = newCategory
        // let user = this.state.user
        // user.content[0][category] = newCategory

        // this.setState({
        //     privateContent: privateContent,
        //     user: user
        // })
        // localStorage.setItem('user', JSON.stringify(user))

    }

    updateSidenav  = () => {
        this.setState({
            sidenav: !this.state.sidenav
        })
    }

    componentWillMount() {
        fetch(`data/content/content.json`).then((response) => {
            return response.json()
        }).then((res) => {
            localStorage.setItem('content', JSON.stringify(res))
            this.setState({content: res})
        }).catch(alert)

        if(localStorage.getItem('user')) {
            const privateContent = JSON.parse(localStorage.getItem('user')).content[0]
            this.setState({
                user: JSON.parse(localStorage.getItem('user')),
                privateContent: privateContent
            })
        }
    }

    componentDidMount() {
        const user = JSON.parse(localStorage.getItem('user'))
        if(user) {
            this.setState({user: user})
        }
    }

    render() {
        return (
            <div className="app">
                <Sticky>
                    <Header user={this.state.user} updateUser={this.updateUser}/>
                </Sticky>
                <Main user={this.state.user} updateUser={this.updateUser}
                    sidenav={this.state.sidenav} updateSidenav={this.updateSidenav}
                    privateContent={this.state.privateContent} updatePrivateContent={this.updatePrivateContent}
                    deleteItemContent={this.deleteItemContent} content={this.state.content} />
                <Footer />
            </div>
        );
    }
}

export default App;
