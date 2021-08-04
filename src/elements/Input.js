import React from 'react';
import styled from '@emotion/styled';

const Input = styled.input`
  width: 100%;
  border: 1px solid lightgray;
  padding: 16px;
  background-color: transparent;

  :focus {
    background-color: #e5f3ff;
    outline: 1px solid #0085fd;
  }
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
    onBlur,
    readonly,
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
      onBlur={onBlur}
      required
      readonly={readonly}
    />
  );
}
export default CustomInput;
