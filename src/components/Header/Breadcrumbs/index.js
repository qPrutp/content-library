import React, { Component } from 'react'
import { Breadcrumb } from 'react-bootstrap'
import './style.css'

class Breadcrambs extends Component {
    render() {
        return (
            <Breadcrumb>
                <Breadcrumb.Item href="#/">Home</Breadcrumb.Item>
            </Breadcrumb>
        );
    }
}

export default Breadcrambs;
