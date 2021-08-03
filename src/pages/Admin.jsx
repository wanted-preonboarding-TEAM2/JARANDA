import SearchBox from 'components/Admin/SearchBox.jsx';
import Table from 'components/Table/table';
import React from 'react';
import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import TableHeader from 'components/Table/tableHeader';
import PagedButtonList from 'components/Admin/PagedButtonList';
import Data from 'components/Admin/users.json';

const dataProps = ['id', 'name', 'address', 'card', 'age', 'role'];

export default function Admin() {
  const [pageNumbers, setPageNumbers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageData, setCurrentPageData] = useState([]);
  const [usersPerPage, setUsersPerPage] = useState(10);

  const getCurrentPageUserInfos = () => {
    const indexOfLast = currentPage * usersPerPage;
    const indexOfFirst = indexOfLast - usersPerPage;
    const pageData = Data.slice(indexOfFirst, indexOfLast);
    setCurrentPageData(pageData);
  }

  const calculatePages = (totalUserData) => {
    const lastPageNumber = Math.ceil(totalUserData.length / usersPerPage);
    const pages = [];
    for(let i = 1; i <= lastPageNumber; i++) {
      pages.push(i);
    }
    setPageNumbers(pages);
  }

  useEffect(() => {
    getCurrentPageUserInfos();
  }, [currentPage])

  useEffect(() => {
    calculatePages(Data);
  }, [])

  return (
    currentPageData.length &&
    <div style={{ padding: '5%' }}>
      Admin
      <TableContainer>
        <HeaderContainer>
          <TableHeader title="Users" number={1000} />
          <SearchBox />
        </HeaderContainer>
        <Table
          dataProps={dataProps}
          tableData={currentPageData}
        />
        <PagedButtonList
          pageNumbers={pageNumbers}
          setCurrentPage={setCurrentPage}
          getCurrentPageUserInfos={getCurrentPageUserInfos}
        />
      </TableContainer>
    </div>
  );
}

const TableContainer = styled.div`
  background-color: #f8faff;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 24px;
`;
