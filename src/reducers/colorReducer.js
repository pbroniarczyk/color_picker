import { FETCH_COLORS, UPDATE_APP_COLOR, UPDATE_COLOR_NAME } from "../actions/types";

const initialState = {
    bgColor: "rgba(23, 56, 64, 1)",
    colorArray: [],
    colorName: ""
}

export default (state = initialState, action) => {
    switch (action.type) {

        case FETCH_COLORS:
            return {
                ...state,
                colorArray: action.payload
            };

        case UPDATE_APP_COLOR:
            return {
                ...state,
                bgColor: action.payload
            };

        case UPDATE_COLOR_NAME:
            return {
                ...state,
                colorName: action.payload
            };
    
        default:
            return state;
    }
}