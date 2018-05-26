import { FETCH_COLORS, UPDATE_APP_COLOR, UPDATE_COLOR_NAME, CLEAR_COLOR_ARRAY } from "./types";

export const fetchColors = colorsData => dispatch => {
    fetch("http://www.mocky.io/v2/5a37a7403200000f10eb6a2d")
    .then(res => res.json())
    .then(colors => dispatch({
            type: FETCH_COLORS,
            payload: colors
        })
    );
};

export const clearColorArray = colors => dispatch => {
    console.log("clearColorArray");
    dispatch({
        type: CLEAR_COLOR_ARRAY,
        payload: colors
    });
}

export const updateAppColor = color => dispatch => {
    dispatch({
        type: UPDATE_APP_COLOR,
        payload: color
    });
};

export const updateColorName = colorName => dispatch => {
    dispatch({
        type: UPDATE_COLOR_NAME,
        payload: colorName
    });
}