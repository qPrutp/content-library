import React, { Component } from 'react'
import "./style.css"

class Article extends Component {
    render() {
        const {article, isOpen, onButtonClick} = this.props
        const more = article.more[0]
        const body = isOpen &&  <section className="card-text">
                                    <img src={`image/home/${more.img}`} alt={article.subtitle}/>
                                    <div className="body-items">
                                        {more.content.map((item, index) => (
                                            <div key={index}>
                                                <h4>{item.title}</h4>
                                                <div>{item.text}</div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
        return (
            <div className="card-body">
                <div className="row">
                    <div className="col-sm-4 card-img">
                        <img src={`image/home/${article.img}`} alt={article.subtitle}/>
                    </div>
                    <div className="col-sm-8 card-body__text">
                        <p>{article.subtitle}</p>
                        <h3>{article.title}</h3>
                        <div>
                            {article.description}
                        </div>
                        <button onClick={(event) => {onButtonClick()}} className="btn-card">
                            >&#8195;{isOpen ? 'Close' : 'Read more'}
                        </button>
                    </div>
                </div>
                {body}
            </div>
        )
    }
}

export default Article
