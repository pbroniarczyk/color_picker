import { FETCH_COLORS } from "./types";

export const fetchColors = (colorsData) => dispatch => {
    fetch("http://www.mocky.io/v2/5a37a7403200000f10eb6a2d")
    .then(res => res.json())
    .then(colors => dispatch({
            type: FETCH_COLORS,
            payload: colors
        })
    );
}