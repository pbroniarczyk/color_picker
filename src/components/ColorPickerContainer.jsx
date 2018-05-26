import React, { Component } from 'react';
import PropTypes from "prop-types";

// Components
import PickerContainer from "./PickerContainer.jsx";

// Assets
import { connect } from "react-redux";
import { updateAppColor } from "../actions/colorAction";
import '../app.css';

class ColorPickerContainer extends Component {
    state = { 
        // bgColor: "rgba(23, 56, 64, 1)" ,
        colorUpdated: ""
    }

    convertColor = (color) => {
        let r = parseInt(color.slice(0, 2), 16),
            g = parseInt(color.slice(2, 4), 16),
            b = parseInt(color.slice(4, 6), 16);
        
        return `rgba(${r}, ${g}, ${b}, 0.5)`;
    }

    colorUpdate = (colorHex) => {
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
        console.log("CONTAINER props", this.props);
        return (
            <div style={{backgroundColor: this.props.bgColor}} className="color-picker">
                <PickerContainer
                    colorUpdate={this.colorUpdate.bind(this)}
                    changeAppColor={this.changeAppColor.bind(this)} />
            </div>
        )
    }
}

ColorPickerContainer.propTypes = {
    updateAppColor: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    bgColor: state.colorArray.bgColor
});


export default connect(mapStateToProps, { updateAppColor })(ColorPickerContainer);