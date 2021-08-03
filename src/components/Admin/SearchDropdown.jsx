import styled from '@emotion/styled';
import React, { useState } from 'react';
import { RiArrowDownSFill } from 'react-icons/ri';

const StyledDropdownOpener = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  :hover {
    cursor: pointer;
  }
`;

const StyledDropDownContainer = styled.div`
  position: relative;
`;

const StyledUl = styled.ul`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  border-radius: 5px;
  background: white;
  border: 0.5px solid #edf1f9;

  position: absolute;
  top: 30px;
`;
const StyledLi = styled.li`
  margin-top: 4px;
  padding: 0 6px;
  :hover {
    cursor: pointer;
    background-color: #edf1f9;
  }
  :last-child {
    margin-bottom: 4px;
  }
`;

export default function SearchDropdown({ selectedOption, handleListClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = ({ target }) => {
    const options = {
      id: '계정',
      name: '이름',
      address: '주소',
      age: '나이',
      role: '역할',
    };

    handleListClick(options[target.dataset.option]);
    setIsOpen(false);
  };

  return (
    <StyledDropDownContainer>
      <StyledDropdownOpener onClick={handleClick}>
        {selectedOption} <RiArrowDownSFill />
      </StyledDropdownOpener>
      <StyledUl isOpen={isOpen}>
        {/* TODO 재사용 가능한 드롭다운이 될 수 있게, 반복문으로 아래를 만들것. */}
        <StyledLi onClick={handleItemClick} data-option="id">
          계정
        </StyledLi>
        <StyledLi onClick={handleItemClick} data-option="name">
          이름
        </StyledLi>
        <StyledLi onClick={handleItemClick} data-option="address">
          주소
        </StyledLi>
        <StyledLi onClick={handleItemClick} data-option="age">
          나이
        </StyledLi>
        <StyledLi onClick={handleItemClick} data-option="role">
          역할
        </StyledLi>
      </StyledUl>
    </StyledDropDownContainer>
  );
}
