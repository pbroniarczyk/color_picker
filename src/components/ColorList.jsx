import React, { Component } from 'react'
import PropTypes from "prop-types";

// Assets
import { connect } from "react-redux";
import { fetchColors, clearColorArray } from "../actions/colorAction";
import "./colorList.css";

class ColorList extends Component {

    chooseColor = (colorName, colorHex) => {
        this.props.colorUpdate(colorHex);
        this.props.updateColorName(colorName);
        this.props.clearColorArray();
    }

    boldSearchPhrase = (fullName, searchPhrase) => {
        const splittedName = fullName.substring(searchPhrase.length);        
        return <p><b>{searchPhrase}</b>{splittedName}</p>;
    }

    componentWillMount = () => {
        this.props.fetchColors()
    }

    render() {
        const colorArray = [];
        
        let filteredColors = this.props.colorArray.filter((color) => {
            if(color.name.startsWith(this.props.colorName)) colorArray.push(color);
        });
        
        const colors = colorArray.map(color => 
            <div
                className="list__item"
                key={color.name}
                onClick={this.chooseColor.bind(this, color.name, color.hex)}>
                {this.boldSearchPhrase(color.name, this.props.colorName)}
                <span
                    className="color__sample"
                    style={{backgroundColor: `#${color.hex}`}} />
            </div>
        );

        return (
            <div
                style={colors.length > 4 ? {overflowY: "scroll"} : {} }
                className={`color-list ${this.props.colorArray.length === 0 ? "color-list--no-border" : "" }`}>
                { colors }
            </div>
        )
    }
}

ColorList.propTypes = {
    fetchColors: PropTypes.func.isRequired,
    clearColorArray: PropTypes.func.isRequired,
    colorName: PropTypes.string,
    colorArray: PropTypes.array
}

const mapStateToProps = state => ({
    colorArray: state.colorArray.colorArray,
    colorName: state.colorArray.colorName
});


export default connect(mapStateToProps, { fetchColors, clearColorArray })(ColorList);