import { FETCH_COLORS } from "../actions/types";

const initialState = {
    colorArray: [],
}

export default (state = initialState, action) => {
    switch (action.type) {

        case FETCH_COLORS:
            return {
                ...state,
                colorArray: action.payload
            };
    
        default:
            return state;
    }
}