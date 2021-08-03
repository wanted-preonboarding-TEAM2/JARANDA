import React from 'react';
import styled from '@emotion/styled';

const Input = styled.input`
  padding: 16px;
  height: 40px;
  border: none;
  border-bottom: 1px solid lightgray;
  background-color: transparent;
  width: 100%;
`;

function CustomInput(props) {
  const {
    placeholder,
    type,
    value,
    name,
    minLength,
    maxLength,
    onClick,
    onChange,
    readOnly,
  } = props;
  return (
    <Input
      placeholder={placeholder}
      type={type}
      name={name}
      value={value}
      minLength={minLength}
      maxLength={maxLength}
      onClick={onClick}
      onChange={onChange}
      required
      readOnly={readOnly}
    />
  );
}
export default CustomInput;
