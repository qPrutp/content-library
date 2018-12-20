import React, { Component } from 'react'
import ImageGallery from 'react-image-gallery'
import './style.css'

class Gallery extends Component {
    state = {
        images: []
    }

    componentWillMount() {
        fetch('data/gallery/gallery.json').then((response) => {
            return response.json()
        }).then((res) => {
            this.setState({ images: res })
            console.log(res)
        })
        . catch( alert )
    }
    render() {
        return (
            <div className="gallery-div">
                <ImageGallery items={this.state.images}
                    disableThumbnailScroll={true}
                    disableArrowKeys={true}
                    showNav={true}
                    showIndex={true}
                    showFullscreenButto={true}
                    showBullets={true}
                    infinite={true}
                />
            </div>
        );
    }
}

export default Gallery;
