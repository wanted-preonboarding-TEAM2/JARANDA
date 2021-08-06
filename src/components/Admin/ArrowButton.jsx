import React from 'react';
import styled from '@emotion/styled';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function ArrowButton({
  type,
  inActive,
  disabled,
  changePageNumbersBackward,
  changePageNumberForward,
}) {
  return (
    <>
      {type === 'back' && (
        <StyledButton
          inActive={inActive}
          disabled={disabled}
          onClick={changePageNumbersBackward}
        >
          <IoIosArrowBack />
        </StyledButton>
      )}
      {!(type === 'back') && (
        <StyledButton
          inActive={inActive}
          disabled={disabled}
          onClick={changePageNumberForward}
        >
          <IoIosArrowForward />
        </StyledButton>
      )}
    </>
  );
}

export default ArrowButton;

const StyledButton = styled.button`
  color: ${({ inActive }) => (inActive ? '#b3b2b2' : '#555555')};
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  :hover {
    cursor: ${({ inActive }) => (inActive ? 'default' : 'pointer')};
  }
`;
