import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  it('should render a div tag when this input is rendered', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper.find('div')).toHaveLength(1);
  });
});
