import React from 'react';
import AddCategory from '../AddCategory';
import { shallow } from 'enzyme';

describe('AddCategory', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory  setCategories={ setCategories }/>);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory  setCategories={ setCategories }/>);
    });

    test('Should render the component', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('Should not post value when submit', () => {
       const form = wrapper.find('form');

       const e = {
           preventDefault: () => {}
       }
       form.simulate('submit', e);

       expect(setCategories).not.toHaveBeenCalled();
    })

    test('Should post value when submit', () => {
        const eInput = {
            target: {
                value: 'Hola!'
            }
        }
        const eForm = {
            preventDefault: () => {}
        }

        wrapper.find('input').simulate('change', eInput);
        wrapper.find('form').simulate('submit', eForm);
 
        expect(setCategories).toHaveBeenCalled();
        expect(wrapper.find('input').prop('value')).toBe('');
     })
});