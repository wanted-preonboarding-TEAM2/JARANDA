import styled from '@emotion/styled';
import React, { useState } from 'react';
import SearchDropdown from './SearchDropdown';
// import usersData from './users';
import { localStorageHelper } from 'utils/localStorageHelper';
import LS_KEY from 'constants/localStorageKey.js';
import USER from 'constants/user.js';

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
  const [selectedOption, setSelectedOption] = useState(USER.EN.ID);
  // TODO: 로컬스토리지에 데이터를 넣는걸 만들자!
  // console.log(usersData);
  // localStorageHelper.setItem('userInfo', usersData);

  const handleSearch = () => {
    // TODO: get localStorage & filtering with search keyword
    // NOTE: 데이터 입력하고 검색버튼을 누르면 userInfo 에서 selectedOption을 필터링해서 가져온다.
    if (!value.trim()) return alert('공백 입력은 불가능합니다!!!');
    const users = localStorageHelper.getItem(LS_KEY.USER_INFO);
    const searchResult = users.filter(users =>
      `${users[selectedOption]}`.toLowerCase().includes(value.toLowerCase()),
    );
    console.log(searchResult);
  };

  const handleListClick = option => {
    setSelectedOption(option);
  };

  const handleInputChange = e => {
    setValue(e.target.value);
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
        onChange={handleInputChange}
        onKeyPress={e => e.code === 'Enter' && handleSearch()}
      />
      <StyledButton type="button" onClick={handleSearch}>
        검색
      </StyledButton>
    </SearchBoxContainer>
  );
}