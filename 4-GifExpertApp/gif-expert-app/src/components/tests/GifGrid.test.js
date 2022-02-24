import React from "react";
import GifGrid from "../GifGrid";
import { shallow } from "enzyme";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");

describe("GifGrid", () => {
  const category = "pikachu";
  
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Should render the component", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("Should render items when call to api (useFetchGifs)", () => {
    const gifs = [
      {
        id: "1",
        title: "title",
        url: "url",
      },
      {
        id: "2",
        title: "title",
        url: "url",
      }
    ];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });

    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifDetail').length).toBe(gifs.length)
  });
});
