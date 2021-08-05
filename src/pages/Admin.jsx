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
import Signup from 'components/signup';
import { useCallback } from 'react';

const dataProps = ['id', 'name', 'address', 'cardInfo', 'age', 'role'];
const ITEMS_PER_PAGE = 10;

export default function Admin() {
  const [pageNumbers, setPageNumbers] = useState([1]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageData, setCurrentPageData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [isModalShow, setIsModalShow] = useState(false);

  useEffect(() => {
    const users = localStorageHelper.getItem('userInfo');
    !users?.length && localStorageHelper.setItem('userInfo', usersData);
    setTableData(localStorageHelper.getItem('userInfo'));
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

  const handleOnSearch = useCallback(result => {
    setTableData(result);
  }, []);

  const handleClickAddUserBtn = () => {
    setIsModalShow(!isModalShow);
  };

  const handleAddUser = user => {
    setTableData(localStorageHelper.getItem(LS_KEY.USER_INFO));
  };

  return (
    <TableContainer>
      <HeaderContainer className="header">
        <TableHeader title="계정 관리" number={tableData.length} />
        <ButtonContainer>
          <SearchBox handleOnSearch={handleOnSearch} />
          <StyledAddUserButton onClick={handleClickAddUserBtn}>
            <AiOutlineUserAdd />
          </StyledAddUserButton>
        </ButtonContainer>
      </HeaderContainer>
      <Table dataProps={dataProps} tableData={currentPageData} />
      <PagedButtonList
        // TODO: pageNumbers -> totalPage
        pageNumbers={pageNumbers}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Modal show={isModalShow}>
        {isModalShow && (
          <Signup
            isModal={true}
            closeModal={() => setIsModalShow(false)}
            handleAddUser={handleAddUser}
          />
        )}
      </Modal>
    </TableContainer>
  );
}

const TableContainer = styled.div`
  /* background-color: #f8faff; */
  padding-bottom: 40px;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 20px;
`;

const StyledAddUserButton = styled.button`
  height: 37px;
  width: 37px;
  background-color: white;
  border: 0.5px solid #edf1f9;
  margin-left: 8px;
  font-size: 14px;
  color: black;
  cursor: pointer;
  border-radius: 50%;
  &:hover {
    background-color: #dce35b33;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
`;
