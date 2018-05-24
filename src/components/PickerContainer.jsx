import React, { Component } from 'react'


class PickerContainer extends Component {
    render() {
        return (
            <div className="picker__wrapper">
                <input className="picker__input" type="text"/>
                <button className="picker__button">Accept</button>
            </div>
        )
    }
}

export default PickerContainer;