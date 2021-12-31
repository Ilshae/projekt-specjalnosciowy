import React from "react";
import { shallow } from "enzyme";
import SignIn from "./sign-in.component";

it("should render SignIn component", () => {
  expect(shallow(<SignIn />)).toMatchSnapshot();
});
