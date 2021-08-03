import styled from '@emotion/styled';
import React from 'react';

const TableHeader = ({ title, number }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Amount>{number.toLocaleString()}</Amount>
    </Container>
  );
};

export default TableHeader;

const Container = styled.div`
  display: flex;
  align-items: flex-end;
`;
const Title = styled.h3`
  margin-right: 12px;
`;

const Amount = styled.h3`
  color: lightgray;
`;
