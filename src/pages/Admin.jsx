import SearchBox from 'components/Admin/SearchBox.jsx';
import Table from 'components/Table/table';
import React from 'react';
import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import TableHeader from 'components/Table/tableHeader';
import PagedButtonList from 'components/Admin/PagedButtonList';
import Data from 'components/Admin/users.json';

const dataProps = ['id', 'name', 'address', 'card', 'age', 'role'];
const ITEMS_PER_PAGE = 10;

export default function Admin() {
  const [pageNumbers, setPageNumbers] = useState([1]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageData, setCurrentPageData] = useState([]);
  const [tableData, setTableData] = useState(Data);

  useEffect(() => {
    const indexOfLast = currentPage * ITEMS_PER_PAGE;
    const indexOfFirst = indexOfLast - ITEMS_PER_PAGE;
    console.log(tableData);
    const pageData = tableData && tableData.slice(indexOfFirst, indexOfLast);
    setCurrentPageData(pageData);
  }, [currentPage, tableData]);

  useEffect(() => {
    const pageList = Array.from(
      { length: Math.ceil(tableData.length / ITEMS_PER_PAGE) },
      (_, i) => i + 1,
    );
    setPageNumbers(pageList);
    setCurrentPage(1);
  }, [tableData]);

  const handleOnSearch = result => {
    setTableData(result);
  };

  return (
    <TableContainer>
      <HeaderContainer>
        <TableHeader title="Users" number={1000} />
        <SearchBox handleOnSearch={handleOnSearch} />
      </HeaderContainer>
      <Table dataProps={dataProps} tableData={currentPageData} />
      <PagedButtonList
        // TODO: pageNumbers -> totalPage
        pageNumbers={pageNumbers}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </TableContainer>
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
