import React, { Component } from 'react';

// Components
import ColorList from "./ColorList.jsx";


class PickerContainer extends Component {
    constructor() {
        super();
        this.state = {
            colorName: ""
        }

        this.newColor = this.newColor.bind(this);
        this.updateColorName = this.updateColorName.bind(this);
        this.acceptColor = this.acceptColor.bind(this);
    }

    acceptColor = () => {
        this.props.changeAppColor()
    }

    newColor = e => {
        const target = e.target;
        this.setState({ colorName: target.value });
    }

    updateColorName = colorName => {
        this.setState({ colorName });
    }


    render() {
        return (
            <div className="picker__wrapper">
                <input
                    onChange={this.newColor}
                    value={this.state.colorName}
                    className="picker__input"
                    type="text"/>
                <button className="picker__button" onClick={this.acceptColor}>Accept</button>
                {
                    this.state.colorName.length >= 2
                    ? <ColorList
                        colors={this.props.colorArray}
                        colorName={this.state.colorName}
                        colorUpdate={this.props.colorUpdate}
                        updateColorName={this.updateColorName}/>
                    : null
                }
            </div>
        )
    }
}

export default PickerContainer;

// PickerContainer.propTypes = {
//     fetchColors: PropTypes.func.isRequired,
// }

// const mapStateToProps = state => ({
//     colorArray: state.colorArray.colorArray
// });


// export default connect(mapStateToProps, { fetchColors })(PickerContainer);