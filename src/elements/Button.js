import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Button = styled.button`
  width: 100%;
  background-color: #5cbf60;
  border: none;
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
  const { margin, type, children } = props;
  const styles = {
    margin,
  };
  return (
    <Button type={type} {...styles}>
      {children}
    </Button>
  );
}

CustomButton.defaultProps = {
  type: 'text',
};

CustomButton.propTypes = {
  type: PropTypes.string.isRequired,
};

export default CustomButton;
