import styled from '@emotion/styled';
import { useState, useEffect } from 'react';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import PageButton from './PageButton.jsx';

const PAGES_PER_LIST = 5;

export default function PagedButtonList({
  totalPageNumber,
  currentPage,
  setCurrentPage,
}) {
  const [visiblePageNumbers, setVisiblePageNumbers] = useState(
    totalPageNumber < 5
      ? [...Array(totalPageNumber).keys()].map(i => i + 1)
      : [...Array(PAGES_PER_LIST).keys()].map(i => i + 1),
  );

  const changePageNumbersBackward = () => {
    if (visiblePageNumbers[0] !== 1) {
      setVisiblePageNumbers(
        visiblePageNumbers.map(page => page - PAGES_PER_LIST),
      );
    }
  };

  const changePageNumberForward = () => {
    if (visiblePageNumbers[visiblePageNumbers.length - 1] !== totalPageNumber) {
      setVisiblePageNumbers(
        visiblePageNumbers.map(page => page + PAGES_PER_LIST),
      );
    }
  };

  useEffect(() => {
    totalPageNumber <= PAGES_PER_LIST
      ? setVisiblePageNumbers(
          [...Array(totalPageNumber).keys()].map(i => i + 1),
        )
      : setVisiblePageNumbers(
          [...Array(PAGES_PER_LIST).keys()].map(i => i + 1),
        );
  }, [totalPageNumber]);

  useEffect(() => {
    setCurrentPage(visiblePageNumbers[0]);
  }, [visiblePageNumbers, setCurrentPage]);

  const isFirstPage = visiblePageNumbers[0] === 1 || totalPageNumber === 0;
  const isLastPage =
    totalPageNumber / PAGES_PER_LIST <=
      (currentPage + PAGES_PER_LIST - 1) / PAGES_PER_LIST ||
    totalPageNumber === 0;

  return (
    <PageListContainer>
      <StyledButton
        isFirstPage={isFirstPage}
        disabled={isFirstPage}
        onClick={changePageNumbersBackward}
      >
        <IoIosArrowBack />
      </StyledButton>
      {visiblePageNumbers.map(
        (page, idx) =>
          page <= totalPageNumber && (
            <PageButton
              key={`pageNumber-${idx + 1}`}
              page={page}
              setCurrentPage={setCurrentPage}
              isActive={page === currentPage}
            />
          ),
      )}
      <StyledButton
        isLastPage={isLastPage}
        disabled={isLastPage}
        onClick={changePageNumberForward}
      >
        <IoIosArrowForward />
      </StyledButton>
    </PageListContainer>
  );
}

const PageListContainer = styled.ul`
  display: flex;
  justify-content: center;
  width: 50%;
  margin: 0 auto;
`;

const StyledButton = styled.button`
  color: ${props =>
    props.isFirstPage || props.isLastPage ? '#b3b2b2' : '#333333'};
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  :hover {
    cursor: ${props =>
      props.isFirstPage || props.isLastPage ? 'default' : 'pointer'};
  }
`;
