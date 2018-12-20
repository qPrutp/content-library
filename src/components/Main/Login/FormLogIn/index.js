import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import md5 from 'blueimp-md5'
import { Form, FormGroup, Col, FormControl, ControlLabel, Button } from 'react-bootstrap'
import './style.css'

const Error = (() => {
    return (
        <div className="error alert alert-danger alert-dismissable">
            Invalid name or password
        </div>
    )
})

class FormLogIn extends Component {
    constructor(props, context) {
        super(props, context)

        this.state = {
            show: true,
            updateUser: this.props.updateUser,
            redirectToPreviousRoute: false,
            name: '',
            pass: '',
            error: false
        };

        this.handleNameChange = this.handleNameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleSubmit(event) {
        event.preventDefault()
        
        const name = this.state.name.toLowerCase()
        const pass = md5(this.state.pass)

        if(name === 'admin' || name === 'test1')  {
            fetch(`data/users/${name}.json`).then((response) => {
                return response.json()
            }).then((user) => {
                if(user[0].pass !== pass) {
                    this.setState({
                        error: true
                    })
                    return
                }

                this.setState({
                    redirectToPreviousRoute: true
                })

                this.state.updateUser(user[0])
            }).catch(alert)
            return
        }

        this.setState({
            error: true
        })
    }

    handleNameChange(event) {
        this.setState({
            name: event.target.value
        })
    }

    handlePasswordChange(event) {
        this.setState({
            pass: event.target.value
        })
    }

    render() {
        const { redirectToPreviousRoute } = this.state
        if (redirectToPreviousRoute) {
            return <Redirect to={'/'} />
        }
        
        return (
            <Form horizontal onSubmit={this.handleSubmit} method="POST">
                <a className="close" title="Close" href="#/"><span>x</span></a>
                <FormGroup>
                <Col><p className="form-title"><strong>My Lib</strong></p></Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                        Name
                    </Col>
                    <Col sm={10}>
                        <FormControl type="text" controlid="name" name="name" placeholder="your name" title="Enter your name" required value={this.state.name} onChange={this.handleNameChange} />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                        Password
                    </Col>
                    <Col sm={10}>
                        <FormControl type="password" name="pass" placeholder="your password" title="Enter your password" required value={this.state.pass} onChange={this.handlePasswordChange} />
                    </Col>
                </FormGroup>

                {this.state.error ? <Error /> : ''}

                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Button type="submit" bsStyle="warning">LOG IN ></Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

export default FormLogIn;
