import { shallow } from "enzyme";
import { HookApp } from "../HookApp";
import React from "react";

describe("TEST HookApp", () => {
  test("Debe renderizarse", () => {
    const wrapper = shallow(<HookApp />);

    expect(wrapper).toMatchSnapshot();
  });
});
