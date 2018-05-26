import React, { Component } from 'react'

import "./colorlist.css";

class ColorList extends Component {

    chooseColor = (colorName, colorHex) => {
        this.props.colorUpdate(colorHex);
        this.props.updateColorName(colorName);
    }

    boldSearchPhrase = (fullName, searchPhrase) => {
        const splittedName = fullName.substring(searchPhrase.length);        
        return <p><b>{searchPhrase}</b>{splittedName}</p>;
    }

    render() {
        const colorArray = [];
        
        let filteredColors = this.props.colors.filter((color) => {
            if(color.name.startsWith(this.props.colorName)) colorArray.push(color);
        });
         
        const colors = colorArray.map((color, index) => 
            <div className="list__item" onClick={this.chooseColor.bind(this, color.name, color.hex)}>
                {this.boldSearchPhrase(color.name, this.props.colorName)}
                <span
                    className="color__sample"
                    style={{backgroundColor: `#${color.hex}`}} />
            </div>
        );

        return (
            <div className="color-list">
                { colors }
            </div>
        )
    }
}

export default ColorList;