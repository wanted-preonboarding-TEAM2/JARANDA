import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Button = styled.button`
  width: ${props => (props.width ? `${props.width}` : '100%')};
  background-color: #5cbf60;
  border: none;
  border-radius: 5px;
  padding: 16px;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
  padding: ${props => (props.margin ? `${props.margin}` : false)};

  &:hover {
    background-color: #1cb58b;
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
