import styled from '@emotion/styled';
import React, { useState } from 'react';
import { useRef } from 'react';
import { useDetectOutsideClick } from 'utils/hooks/useDetectOutsideClick';

const Dropdown = ({
  visibleOption,
  optionList,
  onItemClick,
  print = data => data,
}) => {
  const ref = useRef(null);
  const [isOpened, setIsOpened] = useDetectOutsideClick(ref, false);

  const handleItemClick = value => {
    onItemClick(value);
    setIsOpened(!isOpened);
  };

  return (
    <DropdownContainer>
      <DropdownHeader onClick={() => setIsOpened(!isOpened)}>
        {visibleOption}
      </DropdownHeader>
      <DropdownList ref={ref} isOpen={isOpened}>
        {optionList.map(value => (
          <DropdownItem key={value} onClick={() => handleItemClick(value)}>
            {print(value)}
          </DropdownItem>
        ))}
      </DropdownList>
    </DropdownContainer>
  );
};

export default Dropdown;

const DropdownContainer = styled.div`
  position: relative;
  width: 50px;
`;

const DropdownHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  :hover {
    cursor: pointer;
  }
`;

const DropdownList = styled.ul`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  width: 50px;
  /* height: ${({ isOpen }) => (isOpen ? '125px' : '0px')}; */
  border-radius: 5px;
  z-index: 99;
  background-color: white;
  border: 0.5px solid #edf1f9;
  position: absolute;
  top: 20px;
`;

const DropdownItem = styled.li`
  padding: 4px;

  font-size: 14px;
  width: 100%;
  text-align: center;
  :hover {
    cursor: pointer;
    background-color: #edf1f9;
  }
`;
