import React from "react"
import { shallow } from "enzyme";
import ConnectedColorPickerContainer, { ColorPickerContainer } from "../src/components/ColorPickerContainer.jsx";
import configureStore from "redux-mock-store"

describe("ColoPickerContainer --- Shallow Render REACT COMPONENTS",()=>{
    let wrapper
     const output = 10

    beforeEach(()=>{
        wrapper = shallow(<colorPickerContainer output={output}/>)
        
    })

    it("Render main component for layout", () => {
       expect(wrapper.length).toEqual(1)
    });
    
});