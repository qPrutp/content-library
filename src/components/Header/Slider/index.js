import React, { Component } from "react";
import Slider from "react-slick";
import './style.css'

class SimpleSlider extends Component {
    state = {
        data: []
    }

    componentWillMount() {
        fetch('data/slider/slider.json').then((response) => {
            return response.json()
        }).then((res) => {
            this.setState({ data: res })
        })
            .catch(alert)
    }
    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 1000,
            autoplaySpeed: 5000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true
        };
        return (
            <div>
            <Slider {...settings}>
                {this.state.data.map((item, index) => {
                    return (
                        <div className="slider-item" key={index}>
                            <div className="slider-item__content" style={{backgroundImage: `url(image/slider/${item.img})`}}>
                                <div className="img-block">
                                    <img src={`image/slider/${item.avatar}`} alt="Avatar"/>
                                    <div className="slider-avtor__name">
                                        {item.author}
                                    </div>
                                </div>
                                <h2>{item.title}</h2>
                            </div>
                        </div>
                    )
                })}
            </Slider></div>
        );
    }
}

export default SimpleSlider
