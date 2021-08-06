import React from 'react';

import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const fadeInOut = keyframes`
  0% {
    opacity: 0;
  }
  
  5% {
    opacity: 1;
  }

  95% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

const Message = styled.p`
  animation: ${fadeInOut} 4s forwards;
  position: fixed;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);
  padding: 5px 10px;
  font-size: 12px;
  text-align: center;
  border-radius: 20px;
  background: #dcdcdc;
  transition: 0.3s linear;
`;

const ErrorMessage = ({ message }) => {
  return <Message>{message}</Message>;
};

export default ErrorMessage;
