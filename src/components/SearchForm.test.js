import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';
import { Form } from 'reactstrap';

describe('SearchForm', () => {
  it('should render a Form tag when this component is rendered', () => {
    const wrapper = shallow(<SearchForm onSumbit={() => {}} onChange={() => {}} placeholder="placeholder" style={{}}  loading={false}  />);
    expect(wrapper.find(Form)).toHaveLength(1);
  });
});
