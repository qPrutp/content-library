import React, { Component } from 'react'
import Item from './Item'
import PaginBtn from './PaginBtn'
import './style.css'

class ItemList extends Component {
    constructor(props) {
        super(props)

        const itemOnPage = 5
        const count = Math.ceil(this.props.content.length / itemOnPage)
        let content = this.props.content
        content = chunk(content, itemOnPage)
        const contentShow = content[0]
        let numPage = []
        if(count > 1){
            for(let i = 0, len = content.length; i < len; i++) {
                numPage.push(i)
            }
        }

        this.state = {
            pageCount: count,
            content: content,
            visibled: 0,
            contentShow: contentShow,
            numPage: numPage
        }

        function chunk(arr, n) {
            return arr.reduce(function(p, cur, i) {
                (p[i/n|0] = p[i/n|0] || []).push(cur);
                return p;
            },[]);
        }
    }

    updateVisibled = (event) => {
        this.setState({
            visibled: event.target.value,
            contentShow: this.state.content[event.target.value]
        })
    }
    render() {
        const { category, deleteItem } = this.props
        return (
            <div className="itemlist">
                {this.state.pageCount > 1 ?
                    (<div className="pagination">
                        {this.state.numPage.map(item =>
                            <div key={item}>
                                <PaginBtn value={item} visibled={Number(this.state.visibled) === item ? true : false} updateVisibled={this.updateVisibled}/>
                            </div>
                        )}
                    </div>)
                : ''}
                {this.state.contentShow.map((item, index) =>
                    <div key={index}>
                        <Item item={item} category={category} deleteItem={deleteItem} />
                    </div>
                )}
            </div>
        );
    }
}

export default ItemList;
