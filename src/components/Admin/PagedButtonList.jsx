import { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import PageButton from "./PageButton.jsx";
import Data from './users.json';


function PagedButtonList({ pageNumbers, setCurrentPage, getCurrentPageUserInfos }) {
  // TODO: userData는 글로벌 상태로 refactoring 해야함
  // const [pageNumbers, setPageNumbers] = useState([]); //페이지에 해당하는 숫자를 가진 배열
  // const [currentPage, setCurrentPage] = useState(1); //현재 페이지 번호
  // const [usersPerPage, setUsersPerPage] = useState(10); //한 페이지당 보여지는 유저 숫자

  // const getCurrentPageUserInfos = () => {
  //   const indexOfLast = currentPage * usersPerPage; //slice는 end 인덱스를 제외하고 추출.
  //   const indexOfFirst = indexOfLast - usersPerPage;
    
  //   const currentPageData = Data.slice(indexOfFirst, indexOfLast);
  //   console.log(currentPageData);
  //   return currentPageData;
  // }

  // const calculatePages = (totalUserData) => {
  //   const lastPageNumber = Math.ceil(totalUserData.length / usersPerPage);
  //   const pages = [];
  //   for(let i = 1; i <= lastPageNumber; i++) {
  //     pages.push(i);
  //   }
  //   setPageNumbers(pages);
  // }

  // useEffect(() => {
  //   calculatePages(Data);
  // }, [])

  // useEffect(() => {
  //   getCurrentPageUserInfos();
  // }, [currentPage])


  return (
    <PageListContainer>
      <StyledButton>
        <IoIosArrowBack/>
      </StyledButton>
      {pageNumbers.map((page, idx) => (
        <PageButton
          key={`pageNumber-${idx + 1}`}
          page={page}
          setCurrentPage={setCurrentPage}
          getCurrentPageUserInfos={getCurrentPageUserInfos}
        />
      ))}
      <StyledButton>
        <IoIosArrowForward/>
      </StyledButton>
    </PageListContainer>
  )
}

const PageListContainer = styled.ul`
  display: flex;
  width: 50%;
`

const StyledButton = styled.button`
  color: #555555;
  font-size: 20px;
  padding: 10px;
`

export default PagedButtonList;
