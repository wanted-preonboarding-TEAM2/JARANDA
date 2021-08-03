import styled from '@emotion/styled';
import USER from 'constants/user.js';
import React, { useRef } from 'react';
import { RiArrowDownSFill } from 'react-icons/ri';
import { useDetectOutsideClick } from '../../utils/hooks/useDetectOutsideClick';

const StyledDropdownOpener = styled.div`
  //
`;

const StyledDropDownContainer = styled.div`
  position: relative;
`;

const StyledUl = styled.ul`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  top: 30px;
`;
const StyledLi = styled.li`
  background-color: #fff;
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
