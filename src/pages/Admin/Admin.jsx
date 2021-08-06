import React, { useState, useEffect, useCallback } from 'react';
import SearchBox from 'components/Admin/SearchBox.jsx';
import Table from 'components/Table/table';
import { AiOutlineUserAdd } from 'react-icons/ai';
import styled from '@emotion/styled';
import TableHeader from 'components/Table/tableHeader';
import PagedButtonList from 'components/Admin/PagedButtonList';
import { localStorageHelper } from 'utils/localStorageHelper';
import LS_KEY from 'constants/localStorageKey';
import SignupModal from 'modal/SignupModal';

const dataProps = ['id', 'name', 'address', 'cardInfo', 'age', 'role'];

const ITEMS_PER_PAGE = 10;

export default function Admin() {
  const [totalPageNumber, setTotalPageNumber] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [tableData, setTableData] = useState([]);
  const [isModalShow, setIsModalShow] = useState(false);

  useEffect(() => {
    setTableData(localStorageHelper.getItem('userInfo'));
  }, []);

  useEffect(() => {
    const lastPageNumber = Math.ceil(tableData.length / ITEMS_PER_PAGE);
    setTotalPageNumber(lastPageNumber);
  }, [tableData]);

  const handleOnSearch = useCallback(result => {
    setTableData(result);
  }, []);

  const handleClickAddUserBtn = () => {
    setIsModalShow(true);
  };

  const handleAddUser = () => {
    setTableData(localStorageHelper.getItem(LS_KEY.USER_INFO));
  };

  const currentPageData = tableData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

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
      <Table
        dataProps={dataProps}
        currentPageData={currentPageData}
        tableData={tableData}
        setTableData={setTableData}
      />
      <PagedButtonList
        // TODO: totalPageNumber -> totalPage
        totalPageNumber={totalPageNumber}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      {/* TODO: 이걸 하나의 컴포넌트로 뺄 것 */}

      <SignupModal
        isModalShow={isModalShow}
        closeModal={() => setIsModalShow(false)}
        handleAddUser={handleAddUser}
      />
    </TableContainer>
  );
}

const TableContainer = styled.div`
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
