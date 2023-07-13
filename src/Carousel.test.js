import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

it("works when you click on the right arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
});


it("works when you click on the left arrow", ()=> {
  const {queryByTestId, queryByAltText} = render(<Carousel />);

  //You're on the 2nd image but will go to first image after click
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  
  // move to the right
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow)


  // move backward in the carousel
  const leftArrow = queryByTestId("left-arrow");
  fireEvent.click(leftArrow)


  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();
});

// carousel smoke test

it("renders without crashing", ()=> {
  render(<Carousel />)
})

// carousel snapshot test
it("matches snapshot", () => {
  const {asFragment} = render(<Carousel />);
  expect (asFragment()).toMatchSnapshot();
});


it("Should hide the arrow keys", ()=> {
  const {queryByTestId} = render (<Carousel />);

  const leftArrow = queryByTestId("left-arrow");
  const rightArrow = queryByTestId("right-arrow");


  expect(leftArrow).toHaveClass("hidden");

  fireEvent.click(rightArrow);
  fireEvent.click(rightArrow);

  expect(rightArrow).toHaveClass("hidden");


})