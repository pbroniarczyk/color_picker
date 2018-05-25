import React, { Component } from 'react';
import PropTypes from "prop-types";

import { connect } from "react-redux";

import { fetchColors } from "../actions/colorAction";

import ColorList from "./ColorList.jsx";


class PickerContainer extends Component {
    constructor() {
        super();
        this.state = {
            colorValue: ""
        }

        this.pickColor = this.pickColor.bind(this);
        this.updateColorName = this.updateColorName.bind(this);
    }

    pickColor = e => {
        const target = e.target;
        this.setState({ colorValue: target.value });
    }

    updateColorName = color => {
        this.setState({  colorValue: color});
    }

    componentWillMount = () => {
        this.props.fetchColors()
    }

    render() {
        return (
            <div className="picker__wrapper">
                <input
                    onChange={this.pickColor}
                    value={this.state.colorValue}
                    className="picker__input"
                    type="text"/>
                <button className="picker__button">Accept</button>
                {
                    this.state.colorValue.length >= 2
                    ? <ColorList
                        colors={this.props.colorArray}
                        colorValue={this.state.colorValue}
                        colorUpdate={this.props.colorUpdate}
                        updateColorName={this.updateColorName}/>
                    : null
                }
            </div>
        )
    }
}

PickerContainer.propTypes = {
    fetchColors: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    colorArray: state.colorArray.colorArray
});


export default connect(mapStateToProps, { fetchColors })(PickerContainer);