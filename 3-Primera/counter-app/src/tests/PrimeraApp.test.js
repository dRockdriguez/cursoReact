import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import PrimeraApp from "../PrimeraApp";
import React from "react";
import { shallow } from "enzyme";

describe("Pruebas de <PrimeraApp />", () => {
  /*test("debe mostrar el saludo 'Hola!'", () => {
    const saludo = "Hola!";

    const { getByText } = render(<PrimeraApp saludo={saludo} />);

    expect(getByText(saludo)).toBeInTheDocument();
  });*/

  test("debe mostrar el saludo correctamente con enzyme", () => {
    const saludo = "Hola!";

    const wrapper = shallow(<PrimeraApp saludo={saludo} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("debe mostrar el subtitulo por defecto correctamente", () => {
    const saludo = "Hola!";
    const subtitulo = "Esto es el subSaludo";
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);

    const p = wrapper.find("p").text();

    expect(p).toBe(subtitulo)
  });
});
