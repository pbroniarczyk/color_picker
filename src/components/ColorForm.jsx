import React, { Component } from 'react';
import PropTypes from "prop-types";

// Components
import ColorList from "./ColorList.jsx";

// Assets
import { connect } from "react-redux";
import { updateColorName } from "../actions/colorAction";


class ColorForm extends Component {
    constructor() {
        super();

        this.newColor = this.newColor.bind(this);
        this.updateColorName = this.updateColorName.bind(this);
        this.acceptColor = this.acceptColor.bind(this);
    }

    acceptColor = () => {
        this.props.changeAppColor()
    }

    newColor = e => {
        const target = e.target;
        this.props.updateColorName(target.value)
    }

    updateColorName = colorName => {
        this.props.updateColorName(colorName);
    }


    render() {
        return (
            <div className="picker__wrapper">
                <input
                    onChange={this.newColor}
                    value={this.props.colorName}
                    className="picker__input"
                    placeholder="Type color"
                    type="text"/>
                <button className="picker__button" onClick={this.acceptColor}>Accept</button>
                {
                    this.props.colorName && this.props.colorName.length > 1
                    ? <ColorList
                        colorUpdate={this.props.colorUpdate}
                        updateColorName={this.updateColorName}/>
                    : null
                }
            </div>
        )
    }
}

ColorForm.propTypes = {
    updateColorName: PropTypes.func.isRequired,
    colorName: PropTypes.string,
    colorArray: PropTypes.array
}

const mapStateToProps = state => ({
    colorName: state.colorArray.colorName,
    colorArray: state.colorArray.colorArray,
});


export default connect(mapStateToProps, { updateColorName })(ColorForm);