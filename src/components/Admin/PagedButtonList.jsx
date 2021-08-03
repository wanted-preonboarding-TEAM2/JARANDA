import styled from '@emotion/styled';
import { useState, useEffect } from 'react';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import PageButton from "./PageButton.jsx";


export default function PagedButtonList({ pageNumbers, setCurrentPage, getCurrentPageUserInfos }) {
  const [visiblePageNumbers, setVisiblePageNumbers] = useState([...Array(5).keys()].map(i => i + 1));

  return (
    <PageListContainer>
      <StyledButton>
        <IoIosArrowBack/>
      </StyledButton>
      {visiblePageNumbers.map((page, idx) => (
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

