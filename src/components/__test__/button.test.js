import React from "react";
import ReactDOM from "react-dom";
import Button from "../button/button";
import { render } from "@testing-library/react";
// import "jest-dom/extend-expect";   // jest-dom has moved to @testing-library/jest-dom
import "@testing-library/jest-dom";

// when you run the __test__ file,
// - jest looks for the file names that end with .test.js
// - to run tests, in terminal run "npm test"
//   - only have to run that command once
//   - after that, changes you make in code, will automatically be tested

// Call back function runs ?
it("renders without crashing", () => {
  // create a div element
  const div = document.createElement("div");

  // attach component to div
  ReactDOM.render(<Button></Button>, div);
});

it("renders button correctly", () => {
  const { getByTestId } = render(<Button label="click me please"></Button>);

  // grab button based on data-testid "button", then make sure it's label value is = "click me please"
  expect(getByTestId("button")).toHaveTextContent("click me please");
});
