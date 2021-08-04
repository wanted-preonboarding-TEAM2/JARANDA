import styled from '@emotion/styled';
import { useState, useEffect } from 'react';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import PageButton from './PageButton.jsx';

export default function PagedButtonList({
  pageNumbers,
  currentPage,
  setCurrentPage,
}) {
  const [visiblePageNumbers, setVisiblePageNumbers] = useState(
    [...Array(5).keys()].map(i => i + 1),
  );

  const changePageNumbersBackward = () => {
    if (visiblePageNumbers[0] !== 1) {
      setVisiblePageNumbers(visiblePageNumbers.map(page => page - 5));
    }
  };

  const changePageNumberForward = () => {
    if (
      visiblePageNumbers[visiblePageNumbers.length - 1] !== pageNumbers.length
    ) {
      setVisiblePageNumbers(
        visiblePageNumbers.map(page =>
          page + 5 <= pageNumbers[pageNumbers.length - 1]
            ? page + 5
            : undefined,
        ),
      );
    }
    console.log('visible', visiblePageNumbers[visiblePageNumbers.length - 1]);
  };

  useEffect(() => {
    setVisiblePageNumbers([...Array(5).keys()].map(i => i + 1));
  }, [pageNumbers]);

  useEffect(() => {
    setCurrentPage(visiblePageNumbers[0]);
  }, [visiblePageNumbers]);

  const isFirstPage = visiblePageNumbers[0] === pageNumbers[0];
  const isLastPage =
    visiblePageNumbers[visiblePageNumbers.length - 1] ===
      pageNumbers[pageNumbers.length - 1] ||
    !visiblePageNumbers[visiblePageNumbers.length - 1] ||
    pageNumbers.length < 5;

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
          page <= pageNumbers[pageNumbers.length - 1] && (
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
    props.isFirstPage || props.isLastPage ? '#b3b2b2' : '#555555'};
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  :hover {
    cursor: ${props =>
      props.isFirstPage || props.isLastPage ? 'default' : 'point'};
  }
`;
