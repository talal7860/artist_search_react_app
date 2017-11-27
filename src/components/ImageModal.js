import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';
import styled from 'styled-components';
const Image = styled.img`
  width: 100%.
  height: 100%;
`;

const ImageModal = ({ toggle, title, modal, image  }) => {
  return (
    <Modal isOpen={modal} toggle={toggle} size="lg">
      <ModalHeader toggle={toggle}>{title}</ModalHeader>
      <ModalBody>
        <Image src={image} alt={title} />
      </ModalBody>
      <ModalFooter>
        <Button color="success" onClick={toggle}>Close</Button>
      </ModalFooter>
    </Modal>
)};
ImageModal.propTypes = {
  toggle: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  modal: PropTypes.bool,
  image: PropTypes.string.isRequired,
};

ImageModal.defaultProps = {
  modal: false,
};
export default ImageModal;
