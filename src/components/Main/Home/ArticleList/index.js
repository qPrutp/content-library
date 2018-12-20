import React, { PureComponent } from 'react'
import Article from './Article'
import "./style.css"

class ArticleList extends PureComponent {
    state = {
        openArticleId: null
    }

    render() {
        const { data } = this.props
        const articleElements = data.map((article) =>
            <li key={ article.id } className="article-list__li">
                <Article article={ article }
                    isOpen={this.state.openArticleId === article.id}
                    onButtonClick={this.handleClick.bind(this, article.id)}
                />
            </li>
        )
        return (
            <ul>
                { articleElements }
            </ul>
        )
    }

    handleClick = (openArticleId) => this.setState({
        openArticleId: this.state.openArticleId === openArticleId ? null : openArticleId
    })

}

export default ArticleList
