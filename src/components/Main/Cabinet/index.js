import React, { Component } from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import AddItem from './AddItem'
import FilterContent from './FilterContent'
import './style.css'

class Cabinet extends Component {
    constructor(props) {
        super(props)

        let content = JSON.parse(localStorage.getItem('content'))[0]
        let privateContent = JSON.parse(localStorage.getItem('user'))
        privateContent = privateContent.content[0]
        
        let contentF = content.favorite.filter(item => privateContent.favorite.indexOf(item.id) !== -1)
        let contentM = content.myContent.filter(item => privateContent.myContent.indexOf(item.id) !== -1)

        this.state = {
            contentF: contentF,
            contentM: contentM
        }
    }
    
    deleteItem = (id, category) => {
        console.log('delete: ', id, category)
    }
    render() {
        const { privateContent, updatePrivateContent } = this.props
        return (
            <div className="cabinet">
                <Tabs id="cabinet-tabs">
                    <Tab eventKey={1} title="Favorite">
                        <FilterContent name={'favorite'} privateContent={privateContent} updatePrivateContent={updatePrivateContent}
                                        deleteItem={this.deleteItem} content={this.state.contentF}/>
                    </Tab>
                    <Tab eventKey={2} title="My content">
                        <FilterContent name={'myContent'} privateContent={privateContent} updatePrivateContent={updatePrivateContent}
                                        deleteItem={this.deleteItem} content={this.state.contentM}/>
                    </Tab>
                    <Tab eventKey={3} title="Add">
                        <AddItem privateContent={privateContent} updatePrivateContent={updatePrivateContent} />
                    </Tab>
                </Tabs>
            </div>
        )

    }
}

export default Cabinet;
