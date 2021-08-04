import styled from '@emotion/styled';
import { useState, useEffect } from 'react';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import PageButton from './PageButton.jsx';

const PAGES_PER_LIST = 5;

export default function PagedButtonList({
  pageNumbers,
  currentPage,
  setCurrentPage,
}) {
  const [visiblePageNumbers, setVisiblePageNumbers] = useState(
    pageNumbers.length < 5
      ? [...Array(pageNumbers.length).keys()].map(i => i + 1)
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
    if (
      visiblePageNumbers[visiblePageNumbers.length - 1] !== pageNumbers.length
    ) {
      setVisiblePageNumbers(
        visiblePageNumbers.map(page => page + PAGES_PER_LIST),
      );
    }
  };

  useEffect(() => {
    pageNumbers.length <= PAGES_PER_LIST
      ? setVisiblePageNumbers(pageNumbers)
      : setVisiblePageNumbers(
          [...Array(PAGES_PER_LIST).keys()].map(i => i + 1),
        );
  }, [pageNumbers.length]);

  useEffect(() => {
    setCurrentPage(visiblePageNumbers[0]);
  }, [visiblePageNumbers]);

  return (
    <PageListContainer>
      <StyledButton
        isFirstPage={visiblePageNumbers[0] === pageNumbers[0] ? true : false}
      >
        <IoIosArrowBack onClick={changePageNumbersBackward} />
      </StyledButton>
      {visiblePageNumbers.map(
        (page, idx) =>
          page <= pageNumbers[pageNumbers.length - 1] && (
            <PageButton
              key={`pageNumber-${idx + 1}`}
              page={page}
              setCurrentPage={setCurrentPage}
              isActive={page === currentPage ? true : false}
            />
          ),
      )}
      <StyledButton
        isLastPage={
          visiblePageNumbers[visiblePageNumbers.length - 1] ===
            pageNumbers[pageNumbers.length - 1] ||
          !visiblePageNumbers[visiblePageNumbers.length - 1]
            ? true
            : false
        }
      >
        <IoIosArrowForward onClick={changePageNumberForward} />
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
    props.isFirstPage ? '#b3b2b2' : props.isLastPage ? '#b3b2b2' : '#555555'};
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
`;
