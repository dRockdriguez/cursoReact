import React from "react";
import { shallow } from "enzyme";
import { UseRefExample } from '../../../../components/04-useRef/UseRefExample';

describe("UseRefExample", () => {

    test("Debe mostrarse correctamente", () => {
        const wrapper = shallow(<UseRefExample />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("MultipleCustomHooks").exists()).toEqual(true);

    });

    test("Debe mostrar MultipleCustomHooks cuando se hace click", () => {
        const wrapper = shallow(<UseRefExample />);

        wrapper.find('button').simulate('click');
        expect(wrapper.find("MultipleCustomHooks").exists()).toEqual(false);

    });
});