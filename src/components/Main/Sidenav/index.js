import React, { Component } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import CategoryList from './CategoryList'
import NavHeader from './NavHeader'
import './style.css'

class Sidenav extends Component {
    constructor(props) {
        super(props)

        this.state ={
            categories: []
        }
    }

    componentWillMount() {
        fetch('data/categories/categories.json').then((response) => {
            return response.json()
        }).then((res) => {
            this.setState({ categories: res })
        })
        . catch( alert )
    }

    render() {
        const { user, updateShow } = this.props
        let boxClass = ["sidenav", "content-scroll"]
        if(updateShow) {
            boxClass.push('show');
          }
        const sidenavCondentBlock = this.state.categories.map((category, index) =>
            <div className="sidenav-content" key={index} >
                <h4>{category.title}</h4>
                <CategoryList categories = {category.child} />
            </div>
        )
        return (
            <div className={boxClass.join(' ')}>
                <Scrollbars autoHide renderTrackHorizontal={props => <div {...props} className="track-horizontal" style={{display:"none"}}/>}>
                    <div className="sidenav-header">
                        <NavHeader user={user}/>
                    </div>
                    {sidenavCondentBlock}
                </Scrollbars>
            </div>
        );
    }
}

export default Sidenav;
