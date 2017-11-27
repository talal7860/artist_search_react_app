import React from 'react';
import { shallow } from 'enzyme';
import ImageModal from './ImageModal';
import { Modal } from 'reactstrap';

describe('ImageModal', () => {
  it('should render a Modal tag when this component is rendered', () => {
    const wrapper = shallow(<ImageModal toggle={() => {}} title="modal" modal={false} image={"test.png"}  />);
    expect(wrapper.find(Modal)).toHaveLength(1);
  });
});

