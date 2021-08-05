import SearchBox from 'components/Admin/SearchBox.jsx';
import Table from 'components/Table/table';
import React from 'react';
import { useState, useEffect } from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai';
import styled from '@emotion/styled';
import TableHeader from 'components/Table/tableHeader';
import PagedButtonList from 'components/Admin/PagedButtonList';
import usersData from 'components/Admin/users.json';
import { localStorageHelper } from 'utils/localStorageHelper';
import LS_KEY from 'constants/localStorageKey';
import Modal from 'modal/Modal';
import Signup from './signup';

const dataProps = ['id', 'name', 'address', 'card', 'age', 'role'];
const ITEMS_PER_PAGE = 10;

export default function Admin() {
  const [pageNumbers, setPageNumbers] = useState([1]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageData, setCurrentPageData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [isModalShow, setIsModalShow] = useState(false);

  useEffect(() => {
    localStorageHelper.setItem('userInfo', usersData);
    setTableData(localStorageHelper.getItem(LS_KEY.USER_INFO));
  }, []);

  useEffect(() => {
    const indexOfLast = currentPage * ITEMS_PER_PAGE;
    const indexOfFirst = indexOfLast - ITEMS_PER_PAGE;
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

  const handleAddUser = () => {
    setIsModalShow(!isModalShow);
  };

  return (
    <TableContainer>
      <HeaderContainer>
        <TableHeader title="계정 관리" number={tableData.length} />
        <StyledAddUserButton onClick={handleAddUser}>
          <AiOutlineUserAdd />
        </StyledAddUserButton>
        <SearchBox handleOnSearch={handleOnSearch} />
      </HeaderContainer>
      <Table dataProps={dataProps} tableData={currentPageData} />
      <PagedButtonList
        // TODO: pageNumbers -> totalPage
        pageNumbers={pageNumbers}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Modal show={isModalShow} closeModal={() => setIsModalShow(false)}>
        <Signup isModal={true} closeModal={() => setIsModalShow(false)} />
      </Modal>
    </TableContainer>
  );
}

const TableContainer = styled.div`
  /* background-color: #f8faff; */
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 24px;
`;

const StyledAddUserButton = styled.button`
  background-color: white;
  border: none;
  padding: 8px;
  font-size: 14px;
  color: black;
  cursor: pointer;
  border-radius: 20px;
  &:hover {
    background-color: #e3f2fd;
  }
`;
