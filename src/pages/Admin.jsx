import SearchBox from 'components/Admin/SearchBox.jsx';
import Table from 'components/Table/table';
import React from 'react';
import userMockData from 'components/Admin/users.json';
import styled from '@emotion/styled';
import TableHeader from 'components/Table/tableHeader';

const dataProps = ['id', 'name', 'address', 'card', 'age', 'role'];

export default function Admin() {
  return (
    <Container>
      <TableContainer>
        <HeaderContainer>
          <TableHeader title="사용자 계정" number={1000} />
          <SearchBox />
        </HeaderContainer>
        <Table dataProps={dataProps} tableData={userMockData} />
      </TableContainer>
    </Container>
  );
}

const Container = styled.div``;

const TableContainer = styled.div`
  /* background-color: #f8faff; */
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 24px;
`;
