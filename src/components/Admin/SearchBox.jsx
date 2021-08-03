import styled from '@emotion/styled';
import React, { useState } from 'react';
import SearchDropdown from './SearchDropdown';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const InputContainer = styled.div`
  margin-left: 8px;
  display: flex;
  background-color: white;
  border-radius: 20px;
  padding: 0 12px;
`;

const StyledInput = styled.input`
  // TODO: 기본 스타일은 globalStyles 에서 날릴거니깐
  padding: 10px 10px;
  border: 0;
  flex: 1;
  background-color: rgba(0, 0, 0, 0);
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
      <InputContainer>
        <StyledInput
          value={value}
          type="search"
          name="searchUser"
          id="searchUser"
          onChange={handleInputChange}
        />
        <StyledButton type="button" onClick={handleSearch}>
          <AiOutlineSearch />
        </StyledButton>
      </InputContainer>
    </SearchBoxContainer>
  );
}
