import styled from '@emotion/styled';
import USER from 'constants/user.js';
import React, { useRef } from 'react';
import { RiArrowDownSFill } from 'react-icons/ri';
import { useDetectOutsideClick } from 'utils/hooks/useDetectOutsideClick';

const StyledDropdownOpener = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  :hover {
    cursor: pointer;
  }
`;

const StyledDropDownContainer = styled.div`
  position: relative;
  width: 50px;
`;

const StyledUl = styled.ul`
  display: ${({isOpen}) => (isOpen ? 'block' : 'none')};
  height: ${({isOpen}) => (isOpen ? '125px' : '0px')};
  border-radius: 5px;
  background: white;
  border: 0.5px solid #edf1f9;

  position: absolute;
  top: 30px;
`;

const StyledLi = styled.li`
  padding: 4px;
  font-size: 14px;
  width: 40px;
  text-align: center;
  :hover {
    cursor: pointer;
    background-color: #edf1f9;
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
        {
          Object.entries(USER.EN).map(([key, value]) =>
            (<StyledLi key={key} onClick={handleItemClick} data-option={value}>
              {USER.KO[key]}
            </StyledLi>)
          )
        }
      </StyledUl>
    </StyledDropDownContainer>
  );
}
