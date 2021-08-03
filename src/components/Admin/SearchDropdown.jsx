import styled from '@emotion/styled';
import USER from 'constants/user.js';
import React, { useRef } from 'react';
import { RiArrowDownSFill } from 'react-icons/ri';
import { useDetectOutsideClick } from '../../utils/hooks/useDetectOutsideClick';

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
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useDetectOutsideClick(ref, false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = ({ target }) => {
    handleListClick(target.dataset.option);
    setIsOpen(false);
  };

  return (
    <StyledDropDownContainer>
      <StyledDropdownOpener onClick={handleClick}>
        {USER.KO[selectedOption.toUpperCase()]} <RiArrowDownSFill />
      </StyledDropdownOpener>
      <StyledUl isOpen={isOpen} ref={ref}>
        {/* TODO 재사용 가능한 드롭다운이 될 수 있게, 반복문으로 아래를 만들것. */}
        <StyledLi onClick={handleItemClick} data-option={USER.EN.ID}>
          {USER.KO.ID}
        </StyledLi>
        <StyledLi onClick={handleItemClick} data-option={USER.EN.NAME}>
          {USER.KO.NAME}
        </StyledLi>
        <StyledLi onClick={handleItemClick} data-option={USER.EN.ADDRESS}>
          {USER.KO.ADDRESS}
        </StyledLi>
        <StyledLi onClick={handleItemClick} data-option={USER.EN.AGE}>
          {USER.KO.AGE}
        </StyledLi>
        <StyledLi onClick={handleItemClick} data-option={USER.EN.ROLE}>
          {USER.KO.ROLE}
        </StyledLi>
      </StyledUl>
    </StyledDropDownContainer>
  );
}
