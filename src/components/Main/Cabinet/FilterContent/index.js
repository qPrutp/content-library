import React, { Component } from 'react'
import ItemList from './newItemList'
import './style.css'

class FilterContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.name,
            arrID: this.props.privateContent[this.props.name],
            content: this.props.content
        }
    }

    componentWillMount() {
        // let content = JSON.parse(localStorage.getItem('content'))

        // content = content[0][this.state.name]
        // console.log(content.filter(item => this.state.privateContent.indexOf(item.id) !== -1))
        
        // this.setState({
        //     content: content.filter(item => this.state.privateContent.indexOf(item.id) !== -1)
        // })
    }
    render() {
        const {deleteItem} = this.props
        return (
            <div className="cabinet">
                <ItemList content={this.state.content} category={this.state.name} deleteItem={deleteItem}/>
            </div>
        );
    }
}

export default FilterContent;
