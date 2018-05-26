import React, { Component } from 'react';
import PropTypes from "prop-types";

// Components
import ColorForm from "./ColorForm.jsx";

// Assets
import { connect } from "react-redux";
import { updateAppColor } from "../actions/colorAction";
import './colorPickerContainer.css';

class ColorPickerContainer extends Component {
    state = { 
        colorUpdated: ""
    }

    convertColor = color => {
        let r = parseInt(color.slice(0, 2), 16),
            g = parseInt(color.slice(2, 4), 16),
            b = parseInt(color.slice(4, 6), 16);
        
        return `rgba(${r}, ${g}, ${b}, 0.5)`;
    }

    colorUpdate = colorHex => {
        this.setState({
            colorUpdated: this.convertColor(colorHex)
        })
    }

    changeAppColor = () => {
        this.props.updateAppColor(this.state.colorUpdated)
        this.setState({
            bgColor: this.state.colorUpdated
        })
    }

    render() {
        return (
            <div style={{backgroundColor: this.props.bgColor}} className="color-picker">
                <ColorForm
                    colorUpdate={this.colorUpdate.bind(this)}
                    changeAppColor={this.changeAppColor.bind(this)} />
            </div>
        )
    }
}

ColorPickerContainer.propTypes = {
    updateAppColor: PropTypes.func.isRequired,
    bgColor: PropTypes.string
}

const mapStateToProps = state => ({
    bgColor: state.colorArray.bgColor
});


export default connect(mapStateToProps, { updateAppColor })(ColorPickerContainer);