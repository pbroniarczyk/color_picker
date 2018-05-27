import {fetchColors, clearColorArray, updateAppColor, updateColorName} from '../src/actions/colorAction'

describe('ACTIONS --- Test color actions',()=>{

    it('+++ color array clearing', () => {
        const array = clearColorArray([]);
        expect(array).toEqual({type:"CLEAR_COLOR_ARRAY", payload: []});
    });

    it('+++ app color update', () => {
        const color = updateAppColor("black");
        expect(color).toEqual({type:"UPDATE_APP_COLOR", payload: "black"});
    });

    it('+++ color name update', () => {
        const colorName = updateColorName("#ffffff");
        expect(colorName).toEqual({type:"UPDATE_COLOR_NAME", payload: "#ffffff"});
    });
    
});