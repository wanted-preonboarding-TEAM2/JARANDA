import styled from '@emotion/styled';
import React, { useState } from 'react';
import SearchDropdown from './SearchDropdown';

const SearchBoxContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #b0bec5;
  justify-content: space-between;
`;

const StyledInput = styled.input`
  // TODO: 기본 스타일은 globalStyles 에서 날릴거니깐
  padding: 10px 10px;
  border: 0;
  flex: 1;
`;

const StyledButton = styled.button`
  //
`;

export default function SearchBox() {
  const [value, setValue] = useState('');
  const [selectedOption, setSelectedOption] = useState('계정');

  const handleSearch = ({ target }) => {
    console.log(target);
  };

  const handleListClick = option => {
    setSelectedOption(option);
  };

  const handleInputChange = ({ target }) => {
    setValue(target.value);
  };

  return (
    <SearchBoxContainer>
      <SearchDropdown
        selectedOption={selectedOption}
        handleListClick={handleListClick}
      />
      <StyledInput
        value={value}
        type="search"
        name="searchUser"
        id="searchUser"
        onChange={handleInputChange}
      />
      <StyledButton type="button" onClick={handleSearch}>
        검색
      </StyledButton>
    </SearchBoxContainer>
  );
}
