import React, { Component } from 'react'
import { Player } from 'video-react';
import { Button } from 'react-bootstrap'
import './style.css'

class Item extends Component {
    state ={ 
        id: this.props.item.id,
        category: this.props.category,
        deleteItem: this.props.deleteItem
    }

    deleteItem = () => {
        this.state.deleteItem(this.state.id, this.state.category)
    }
    render() {
        const { item } = this.props
        return (
            <div className="itemfor_filter">
                <h3>{item.title}</h3>
                <div className="info-block">
                    {item.fileName !== '' ? (
                        item.type === 'video' ?
                            (<div className="media-div">
                                <Player
                                    src={`data/content/${item.fileName}`}
                                />
                            </div>)
                            : (<div className="media-div">
                                <h4>{item.fileName}</h4>
                                <audio controls>
                                    <source src={`data/content/${item.fileName}`} type="audio/mpeg" />
                                    Your browser does not support the audio element.
                                </audio>
                            </div>)
                    )
                        : ''}
                    <div>
                        <h4>{item.fileName}</h4>
                        <p>{item.description}</p>
                    </div>
                </div>
                <div className="like-block">
                    <div>
                        <a href="true">Like: {item.value.like}</a>
                    </div>
                    <div>
                        <a href="true">Dislike: {item.value.dislike}</a>
                    </div>
                    <div>
                        <Button  bsStyle="danger" bsSize="xsmall" onClick={this.deleteItem}>delete</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;
