import React, { Component } from 'react'
import ArticleList from './ArticleList'
import './style.css'

class Home extends Component {
    state = {
        reverted: false,
        data: []
    }

    componentWillMount() {
        fetch('data/home/home.json').then((response) => {
            return response.json()
        }).then((res) => {
            this.setState({ data: res })
        })
        .catch(alert)
    }

    revert = () => {
        this.setState({
            reverted: !this.state.reverted
        })
    }
    render() {
        return (
            <div className="home">
                <div className="home-header">
                    <h1 className="display-3 overline">
                        All Events
                    </h1>
                    <button className="btn" onClick = {this.revert}>Revert</button>
                </div>
                <ArticleList data = {this.state.reverted ? this.state.data.slice().reverse() : this.state.data}/>
            </div>
        );
    }
}

export default Home;
