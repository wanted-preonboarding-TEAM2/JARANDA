import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Input = styled.input`
  padding: 16px;
  border: none;
  border-bottom: 1px solid lightgray;
  background-color: transparent;
  width: 100%;
`;

function CustomInput(props) {
  const { placeholder, type, value, readonly } = props;
  return <Input placeholder={placeholder} type={type} value={value} required />;
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

Input.defaultProps = {
  type: 'text',
  readonly: false,
};
export default CustomInput;
