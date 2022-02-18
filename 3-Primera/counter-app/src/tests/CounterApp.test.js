import "@testing-library/jest-dom";
import CounterApp from "../CounterApp";
import React from "react";
import { shallow } from "enzyme";

describe("Pruebas de <CounterApp />", () => {
  let wrapper = shallow(<CounterApp />);
  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test("debe matchear con el snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe mostrar el contador por defecto correctamente", () => {
    const counter = "10";

    const h2 = wrapper.find("h2").text().trim();

    expect(h2).toBe(counter);
  });

  test("debe incrementar el contador cuando se pulsa", () => {
    const incrementBtn = wrapper.find("button").at(0);
    incrementBtn.simulate("click");
    const h2 = wrapper.find("h2").text().trim();
    expect(h2).toBe("11");
  });

  test("debe decrementar el contador cuando se pulsa", () => {
    const decrementBtn = wrapper.find("button").at(1);
    decrementBtn.simulate("click");
    const h2 = wrapper.find("h2").text().trim();
    expect(h2).toBe("9");
  });

  test("debe resetear el contador cuando se pulsa", () => {
    const cont = 100;
    const wrapper = shallow(<CounterApp  value={cont}/>);

    const incrementBtn = wrapper.find("button").at(0);
    const resetBtn = wrapper.find("button").at(2);

    incrementBtn.simulate("click");
    incrementBtn.simulate("click");
    incrementBtn.simulate("click");
    resetBtn.simulate("click");

    const counter = wrapper.find("h2").text().trim();
    expect(counter).toBe(cont.toString());
   
  });
});
