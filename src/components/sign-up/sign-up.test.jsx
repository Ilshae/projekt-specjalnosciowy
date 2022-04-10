import React from "react";
import { shallow } from "enzyme";
import SignUp from "./sign-up.component";

it("should render SignUp component", () => {
  expect(shallow(<SignUp />)).toMatchSnapshot();
});
