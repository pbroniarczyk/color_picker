import React, { Component } from 'react';


// Components
import PickerContainer from "./components/PickerContainer.jsx";

// Redux
import { Provider } from "react-redux";
import store from "./store";

// Assets
import './app.css';


class App extends Component {
    state = { 
        bgColor: "rgba(23, 56, 64, 1)" ,
        colorUpdated: ""
    }

    convertColor = (color) => {
        let r = parseInt(color.slice(0, 2), 16),
            g = parseInt(color.slice(2, 4), 16),
            b = parseInt(color.slice(4, 6), 16);
        
        return `rgba(${r}, ${g}, ${b}, 0.5)`;
    }

    colorUpdate = (color) => {
        this.setState({
            colorUpdated: this.convertColor(color)
        })
    }

    changeAppColor = () => {
        this.setState({
            bgColor: this.state.colorUpdated
        })
    }

    render() {
        console.log("=== render ===", this.state);
        return (
            <Provider store={store}>
                <div style={{backgroundColor: this.state.bgColor}} className="color-picker">
                    <PickerContainer
                        colorUpdate={this.colorUpdate.bind(this)}
                        changeAppColor={this.changeAppColor.bind(this)} />
                </div>
            </Provider>
        );
    }
}
  
export default App;