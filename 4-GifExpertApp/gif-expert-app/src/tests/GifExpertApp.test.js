import React from "react";
import GifExpertApp from "../GifExpertApp";
import { shallow } from "enzyme";

describe("GifExpertApp", () => {
  let wrapper = shallow(<GifExpertApp />);

  beforeEach(() => {
    wrapper = shallow(<GifExpertApp />);
  });

  test("Should render the component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Should render the categories list", () => {
    const categories = ['cat1', 'cat2'];
    wrapper = shallow(<GifExpertApp  defaultCategories={categories}/>);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  });
});
