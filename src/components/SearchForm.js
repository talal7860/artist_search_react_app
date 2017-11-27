import React from 'react';
import { FormGroup, Input, Button, Form, InputGroup, InputGroupAddon } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';

const SearchForm = ({ onSubmit, value, onChange, placeholder, style, loading  }) => (
  <Form className='search-form' style={style} onSubmit={onSubmit}>
    <FormGroup>
      <InputGroup>
        <InputGroupAddon>
          <FontAwesome name='search' />
        </InputGroupAddon>
        <Input disabled={loading} type="text" onChange={onChange} bsSize='lg' value={value} id="search" placeholder={placeholder} />
        <Button disabled={loading} color='success'><FontAwesome name='search' /></Button>
      </InputGroup>
    </FormGroup>
  </Form>
);
SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  style: PropTypes.object,
  loading: PropTypes.bool
};

SearchForm.defaultProps = {
  value: "",
  style: {},
  loading: false,
};

export default SearchForm;
