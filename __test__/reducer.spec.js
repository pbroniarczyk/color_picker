
const reducer = {
    bgColor: "rgba(23, 56, 64, 1)",
    colorArray: [],
    colorName: ""
}

describe('REDUCER --- test reducers',()=>{
    it('+++ CLEAR_COLOR_ARRAY', () => {
        let state = reducer.colorArray;
        state = (state, {
            type:"CLEAR_COLOR_ARRAY",
            payload: []
        });
        expect(state.payload).toEqual([])
    });

    it('+++ UPDATE_APP_COLOR', () => {
        let state = reducer.bgColor;
        state = (state, {
            type:"UPDATE_APP_COLOR",
            payload: "rgba(23, 56, 64, 1)"
        });
        expect(state.payload).toEqual("rgba(23, 56, 64, 1)")
    });

    it('+++ UPDATE_COLOR_NAME', () => {
        let state = reducer.colorName;
        state = (state, {
            type:"UPDATE_COLOR_NAME",
            payload: "black"
        });
        expect(state.payload).toEqual("black")
    });
});