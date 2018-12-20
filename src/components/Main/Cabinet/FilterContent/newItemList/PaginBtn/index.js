import React, { Component } from 'react'

class PaginBtn extends Component {
    render() {
        const {value, updateVisibled, visibled } = this.props
        if(visibled) {
            return (
                <button onClick={updateVisibled}
                    id={`pagiBtn${value}`}
                    className="active"
                    value={value}
                >{value + 1}</button>
            )
        }

        return (
            <button onClick={updateVisibled}
                id={`pagiBtn${value}`}
                className=""
                value={value}
            >{value + 1}</button>
        )
    }
}

export default PaginBtn;
