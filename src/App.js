import React, { Component } from 'react';
import PropTypes from "prop-types";

// Components
import PickerContainer from "./components/PickerContainer.jsx";

// Redux
import { Provider } from "react-redux";
import { connect } from "react-redux";
import store from "./store";

// Assets
import './color-picker.css';
import { fetchColors } from "./actions/colorAction";


class App extends Component {

    componentWillMount = () => {
        console.log('FETCH COLORS');
        this.fetchColors()
    }

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

App.propTypes = {
    fetchColors: PropTypes.func.isRequired,
  }
  
  const mapStateToProps = state => ({
    colorArray: state.posts.items
  });
  
export default App;

//   export default connect(mapStateToProps, { fetchColors })(App);