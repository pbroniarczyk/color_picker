import React, { Component } from 'react';

// Components
import ColorPickerContainer from "./components/ColorPickerContainer.jsx";

// Redux
import { Provider } from "react-redux";
import store from "./store";

// Assets
import './app.css';


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ColorPickerContainer />
            </Provider>
        );
    }
}
  
export default App;