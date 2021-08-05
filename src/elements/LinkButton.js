import React from 'react';
import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

const Button = styled.p`
  a {
    display: block;
    width: ${({ width }) => width || '100%'};
    padding: 16px;
    font-size: 14px;
    text-align: center;
    color: #fff;
    background-color: #aac14f;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: #d9d34e;
    }
  }
`;

function LinkButton({ to, className, margin, type, children, width, onClick }) {
  const styles = {
    margin,
    width,
  };

  return (
    <Button type={type} className={className} {...styles} onClick={onClick}>
      <Link to={to}>{children}</Link>
    </Button>
  );
}

export default LinkButton;
