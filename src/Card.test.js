import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import Carousel from "./Carousel";

// card smoke test
it("renders without crashing", ()=>{
    render(<Carousel />)
})

//card snapshot test
it("matches snapshot", ()=> {
    const {asFragment} = render(<Card/>);
    expect (asFragment()).toMatchSnapshot();
})