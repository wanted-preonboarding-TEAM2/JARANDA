import styled from '@emotion/styled';
import React from 'react';

const StyledDropdownOpener = styled.div`
  //
`;

const StyledDropDownContainer = styled.div`
  //
`;

const StyledUl = styled.ul`
  display: none;
`;
const StyledLi = styled.li`
  //
`;

export default function SearchDropdown() {
  return (
    <StyledDropDownContainer>
      <StyledDropdownOpener>필터링</StyledDropdownOpener>
      <StyledUl>
        <StyledLi>계정</StyledLi>
        <StyledLi>이름</StyledLi>
        <StyledLi>주소</StyledLi>
        <StyledLi>나이</StyledLi>
        <StyledLi>역할</StyledLi>
      </StyledUl>
    </StyledDropDownContainer>
  );
}
