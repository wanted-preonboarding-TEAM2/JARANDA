import React from 'react';

import styled from '@emotion/styled';

const Message = styled.p`
  opacity: ${({ visible }) => (visible ? 1 : 0)};
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

const ErrorMessage = ({ visible, message }) => {
  return <Message visible={visible}>{message}</Message>;
};

export default ErrorMessage;
