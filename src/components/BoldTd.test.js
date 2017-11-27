import React from 'react';
import { shallow } from 'enzyme';
import BoldTd from './BoldTd';

describe('BoldTd', () => {
  it('should render a td tag when this input is rendered', () => {
    const wrapper = shallow(<BoldTd />);
    expect(wrapper.find('td')).toHaveLength(1);
  });

});
