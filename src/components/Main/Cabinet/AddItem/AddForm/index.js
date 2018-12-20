import React, { Component } from 'react'
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'
import './style.css'

class AddForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            description: '',
            file: '',
            id: new Date(),
            tyle: this.props.title.toLowerCase()
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        const data = this.state
        console.log("was sanded: ", JSON.stringify(data))
    }

    handleChange(event) {
        switch(event.target.id) {
            case 'title':
                this.setState({
                    title: event.target.value
                })
                break;
            case 'description':
                this.setState({
                    description: event.target.value
                })
                break;
            case 'file':
                this.setState({
                    file: event.target.value
                })
                break;
            default:
                break;
        }
    }

    ClearUp = () => {
        console.log('Reset')
        this.setState({
            title: '',
            description: '',
            file: '',
            id: new Date()
        })
        document.getElementById('addForm').reset()
    }
    render() {
        const { title } = this.props
        return (
            <div style={{padding: "20px"}}>
                <Form horizontal onSubmit={this.handleSubmit} method="POST" id="addForm">
                    <FormGroup controlId="title">
                        <ControlLabel>Title</ControlLabel>
                        <FormControl type="text" onChange={this.handleChange} required />
                    </FormGroup>
                    <FormGroup controlId="description">
                        <ControlLabel>Description</ControlLabel>
                        <FormControl componentClass="textarea" rows={4} maxLength={4000} onChange={this.handleChange} />
                    </FormGroup>
                    {title === 'Article' ? '' : (<FormGroup controlId="file">
                                                    <ControlLabel>File</ControlLabel>
                                                    <FormControl type="file" onChange={this.handleChange} required />
                                                </FormGroup>)}
                    <FormGroup>
                            <Button type="submit" bsStyle="primary">Send</Button>&#8195;&#8195;&#8195;
                            <Button bsStyle="success" onClick={this.ClearUp}>Reset</Button>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default AddForm;
