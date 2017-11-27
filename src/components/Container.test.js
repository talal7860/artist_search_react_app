import React from 'react';
import { shallow } from 'enzyme';
import Container from './Container';
import { Container as BContainer } from 'reactstrap';

describe('Container', () => {
  it('should render a BContainer tag when this component is rendered', () => {
    const wrapper = shallow(<Container />);
    expect(wrapper.find(BContainer)).toHaveLength(1);
  });
});

