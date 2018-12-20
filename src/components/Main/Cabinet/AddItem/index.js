import React, { Component } from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import AddForm from './AddForm'
import './style.css'

class AddItem extends Component {
    state ={
        titleTabs: ["Article","Video","Audio"]
    }

    render() {
        return (
            <div className="cabinet">
                <Tabs id="addItem">
                    <Tab eventKey={1} title={this.state.titleTabs[0]}>
                        <AddForm title={this.state.titleTabs[0]}/>
                    </Tab>
                    <Tab eventKey={2} title={this.state.titleTabs[1]}>
                    <AddForm title={this.state.titleTabs[1]}/>
                    </Tab>
                    <Tab eventKey={3} title={this.state.titleTabs[2]}>
                    <AddForm title={this.state.titleTabs[2]}/>
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

export default AddItem;
