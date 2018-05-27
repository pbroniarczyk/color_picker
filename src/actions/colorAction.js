import { FETCH_COLORS, UPDATE_APP_COLOR, UPDATE_COLOR_NAME, CLEAR_COLOR_ARRAY } from "./types";

export const fetchColors = colorsData => dispatch => {
    fetch("https://www.mocky.io/v2/5a37a7403200000f10eb6a2d")
    .then(res => res.json())
    .then(colors => dispatch({
            type: FETCH_COLORS,
            payload: colors
        })
    );
};

export const clearColorArray = colors => {
    return {
        type: CLEAR_COLOR_ARRAY,
        payload: colors
    };
}

export const updateAppColor = color => {
    return {
        type: UPDATE_APP_COLOR,
        payload: color
    };
};

export const updateColorName = colorName => {
    return {
        type: UPDATE_COLOR_NAME,
        payload: colorName
    }
}