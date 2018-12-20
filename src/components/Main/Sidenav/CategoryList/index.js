import React, { Component } from 'react'
import Category from './Category'
import './style.css'

class CategoryList extends Component {

    render() {

        const categoryElements = this.props.categories.map((category, index) => 
            <li key={index}>
                <Category category={category}/>
            </li>
        )
        return (
            <ul className="category-list">
                { categoryElements }
            </ul>
        )
    }
}

export default CategoryList
