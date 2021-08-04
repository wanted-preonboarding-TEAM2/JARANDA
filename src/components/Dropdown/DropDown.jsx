import styled from '@emotion/styled';
import React, { useState } from 'react';

const Dropdown = ({
  visibleOption,
  optionList,
  onItemClick,
  print = data => data,
}) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleItemClick = value => {
    onItemClick(value);
    setIsOpened(!isOpened);
  };

  return (
    <DropdownContainer>
      <DropdownHeader onClick={() => setIsOpened(!isOpened)}>
        {visibleOption}
      </DropdownHeader>
      <DropdownList isOpen={isOpened}>
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
  /* height: ${({ isOpen }) => (isOpen ? '125px' : '0px')}; */
  border-radius: 5px;
  z-index: 99;
  background-color: white;
  border: 0.5px solid #edf1f9;
  position: absolute;
  top: 30px;
`;

const DropdownItem = styled.li`
  padding: 4px;
  font-size: 14px;
  width: 40px;
  text-align: center;
  :hover {
    cursor: pointer;
    background-color: #edf1f9;
  }
`;
