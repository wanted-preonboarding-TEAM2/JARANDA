import React from 'react';
import styled from '@emotion/styled';

const Button = styled.button`
  width: ${props => (props.width ? `${props.width}` : '100%')};
  background-color: #aac14f;
  border: none;
  padding: 16px;
  font-size: 14px;
  color: #ffffff;
  cursor: pointer;
  padding: ${props => (props.margin ? `${props.margin}` : false)};

  &:hover {
    background-color: #d9d34e;
  }
`;

function CustomButton(props) {
  const { margin, type, children, width, onClick } = props;
  const styles = {
    margin,
    width,
  };
  return (
    <Button type={type} {...styles} onClick={onClick}>
      {children}
    </Button>
  );
}

export default CustomButton;
