import React from "react";
import { shallow } from "enzyme";
import { MultipleCustomHooks } from "../../../components/examples/MultipleCustomHooks";
import { useFetch } from "../../../hooks/useFetch";
import { useCounter } from "../../../hooks/useCounter";

jest.mock("../../../hooks/useFetch");
jest.mock("../../../hooks/useCounter");

describe("MultipleCustomHooks", () => {
  beforeEach(() => {
    useCounter.mockReturnValue({
      counter: 1,
      increment: () => {},
    });
  });
  
  test("Debe mostrarse correctamente", () => {
    useFetch.mockReturnValue({
      data: null,
      loading: null,
      error: null,
    });

    const wrapper = shallow(<MultipleCustomHooks />);

    expect(wrapper).toMatchSnapshot();
  });

  test("debe  mostrar la informcion", () => {
    useFetch.mockReturnValue({
      data: [{ author: "David", quote: "Hola mundo" }],
      loading: false,
      error: null,
    });

    const wrapper = shallow(<MultipleCustomHooks />);

    expect(wrapper.find(".alert").exists()).toBe(false);
    expect(wrapper.find(".blockquote p").text().trim()).toBe("Hola mundo");
    expect(wrapper.find(".blockquote-footer").text().trim()).toBe("David");
  });
});
