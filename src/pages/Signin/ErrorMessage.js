import React from 'react';

import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  
  to {
    opacity: 0;
    display: none;;
  }
`;

const Message = styled.p`
  ${({ visible }) =>
    visible
      ? css`
          animation: ${fadeIn} 0.3s linear;
        `
      : css`
          animation: ${fadeOut} 0.3s linear forwards;
        `};
  position: fixed;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);
  padding: 5px 10px;
  font-size: 12px;
  text-align: center;
  border-radius: 20px;
  background: #dcdcdc;
`;

const ErrorMessage = ({ visible, message }) => {
  return <Message visible={visible}>{message}</Message>;
};

export default ErrorMessage;
