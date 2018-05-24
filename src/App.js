import React, { Component } from 'react';

// Components
import PickerContainer from "./components/PickerContainer.jsx";

// Redux
import { Provider } from "react-redux";
import store from "./store";

// Assets
import './color-picker.css';


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="color-picker">
                    <PickerContainer />
                </div>
            </Provider>
        );
    }
}

export default App;