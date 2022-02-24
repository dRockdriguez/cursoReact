import React from 'react';
import GifDetail from '../GifDetail';
import { shallow } from 'enzyme';

describe('GifDetail', () => {
    const title = 'Título';
    const url = 'url';
    const wrapper = shallow(<GifDetail title={ title } url={ url } />);

    test('Should render the component', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('Should render the title in p', () => {
        const p = wrapper.find('p').text().trim();
        expect(p).toBe(title);
    })

    test('Should render the img with src and alt', () => {
        const img = wrapper.find('img');

        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })

    test('Should render the div with card class', () => {
        const div = wrapper.find('div');

        expect(div.prop('className').includes('card')).toBeTruthy();
    })
});