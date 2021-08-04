import styled from '@emotion/styled';
import React, { useState } from 'react';
import SearchDropdown from './SearchDropdown';
import { AiOutlineSearch } from 'react-icons/ai';
import { localStorageHelper } from 'utils/localStorageHelper';
import LS_KEY from 'constants/localStorageKey.js';
import USER from 'constants/user.js';
import usersData from './users.json';

const SearchBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const InputContainer = styled.div`
  margin-left: 8px;
  display: flex;
  background-color: white;
  border: 0.5px solid #edf1f9;
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

export default function SearchBox({ handleOnSearch }) {
  const [value, setValue] = useState('');
  const [selectedOption, setSelectedOption] = useState(USER.EN.ID);
  // TODO: 로컬스토리지에 데이터를 넣는걸 만들자!

  const handleSearch = () => {
    // TODO: get localStorage & filtering with search keyword
    const users = localStorageHelper.getItem(LS_KEY.USER_INFO);
    // NOTE: 데이터 입력하고 검색버튼을 누르면 userInfo 에서 selectedOption을 필터링해서 가져온다.
    if (!value.trim()) {
      handleOnSearch(users);
      return;
    }

    const searchResult =
      users &&
      users.filter(users =>
        `${users[selectedOption]}`.toLowerCase().includes(value.toLowerCase()),
      );
    handleOnSearch(searchResult);
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
          onChange={handleInputChange}
          onKeyPress={({ code }) => code === 'Enter' && handleSearch()}
        />
        <StyledButton type="button" onClick={handleSearch}>
          <AiOutlineSearch />
        </StyledButton>
      </InputContainer>
    </SearchBoxContainer>
  );
}
