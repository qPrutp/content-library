import React, { Component } from 'react'
import './style.css'

class Category extends Component {
    constructor(props) {
        super(props)

        this.state = {
            category: this.props.category,
            img: this.props.category.img
        }
    }

    render() {
        const href = this.state.category.url
        const src = "image/categories/"+this.state.category.img
        return (
            <a className="category-item" href={"#/category/"+href}
                title={this.state.category.description}
                >
                    {this.state.img ? <img src={src} alt={this.state.category.title}/> : ''}    
                    {this.state.category.title}
            </a>
        );
    }
}

export default Category;
