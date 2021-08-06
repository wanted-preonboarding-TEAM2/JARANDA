import styled from '@emotion/styled';
import { useState, useEffect } from 'react';

import { arrowHandler, getEmptyArray } from './utils';
import PageButton from './PageButton';
import ArrowButton from './ArrowButton';

const PAGES_PER_LIST = 5;

export default function Pagination({ totalPage, currentPage, setCurrentPage }) {
  const [showingNum, setShowingNum] = useState({
    start: 1,
    end: PAGES_PER_LIST,
  });

  const changePageNumbersBackward = () => {
    // 이전 페이지 버튼
    currentPage > PAGES_PER_LIST &&
      setShowingNum(prev => arrowHandler(prev, -1, totalPage));
  };

  const changePageNumberForward = () => {
    // 다음페이지 버튼
    showingNum.end <= totalPage &&
      setShowingNum(prev => arrowHandler(prev, 1, totalPage));
  };

  useEffect(() => {
    const lessThanFive = totalPage <= PAGES_PER_LIST;
    lessThanFive
      ? setShowingNum(prev => ({ ...prev, start: 1, end: totalPage }))
      : setShowingNum(prev => ({ ...prev, start: 1, end: PAGES_PER_LIST }));
  }, [totalPage]);

  useEffect(() => {
    setCurrentPage(showingNum.start);
  }, [showingNum, setCurrentPage]);

  const isFirstPage = showingNum.start === 1;
  const isLastPage =
    totalPage === currentPage ||
    totalPage <= PAGES_PER_LIST ||
    showingNum.end - showingNum.start < 4;
  const pages = getEmptyArray(showingNum.start, showingNum.end);

  return (
    <PageListContainer>
      <ArrowButton
        type="back"
        inActive={isFirstPage}
        disabled={isFirstPage}
        changePageNumbersBackward={changePageNumbersBackward}
      />
      {pages.map((page, idx) => {
        return (
          <PageButton
            key={`pageNumber-${idx + 1}`}
            page={page}
            setCurrentPage={setCurrentPage}
            isActive={page === currentPage}
          />
        );
      })}
      <ArrowButton
        type="next"
        inActive={isLastPage}
        disabled={isLastPage}
        changePageNumberForward={changePageNumberForward}
      />
    </PageListContainer>
  );
}

const PageListContainer = styled.ul`
  display: flex;
  justify-content: center;
  width: 50%;
  margin: 0 auto;
`;
