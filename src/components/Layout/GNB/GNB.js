import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import { GiHamburgerMenu } from 'react-icons/gi';
import ROLE from 'constants/role';

import {
  selectCurrentUserRole,
  userSlice,
} from 'services/redux/slices/user.js';

import MenuItem from './MenuItem.js';

import ACCEPTED_PAGE_BY_ROLE from 'constants/acceptedPageByRole.js';
import { removeLoginValidation } from 'services/utils/LocalStorageWorker.js';

export default function GNB() {
  const currentRole = useSelector(selectCurrentUserRole);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const dispatch = useDispatch();
  const { logout } = userSlice.actions;

  const handleClickMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const handleLogout = () => {
    dispatch(logout());
    removeLoginValidation();
  };

  return (
    <GNBContainer>
      <Link to="/">
        <StyledImg src="/images/jaranda_logo.png" alt="logo" />
      </Link>
      <StyledMenuList show={isOpenMenu} onClick={() => setIsOpenMenu(false)}>
        {ACCEPTED_PAGE_BY_ROLE[currentRole].map(item => (
          <MenuItem key={item.title} to={item.to}>
            {item.title}
          </MenuItem>
        ))}
        {currentRole !== ROLE.NO_LOGIN && (
          <MenuItem key={'logout'} to="/" handleLogout={handleLogout}>
            로그아웃
          </MenuItem>
        )}
      </StyledMenuList>
      <StyledHamburgerMenu onClick={handleClickMenu} />
    </GNBContainer>
  );
}

const StyledHamburgerMenu = styled(GiHamburgerMenu)`
  display: none;
  box-sizing: content-box;
  width: 22px;
  height: 20px;
  padding: 14px 13px;
  cursor: pointer;
  @media only screen and (max-width: 960px) {
    display: block;
  }
  @media only screen and (hover: hover) {
    &:hover {
      transform: scale(1.15);
      color: #66bb6a;
    }
  }
  transition: transform 3s;
`;

const StyledMenuList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 960px) {
    display: ${({ show }) => (show ? 'inherit;' : 'none;')};
    position: absolute;
    flex-direction: column;
    top: 150px;
    left: 0;
    background: #66bb6a;
    width: 100%;
    height: calc(100vh - 150px);
    font-size: 1.5em;
    justify-content: start;
    z-index: 999;
  }
`;

const GNBContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 913px;
  margin: auto;

  @media only screen and (max-width: 960px) {
    height: 50px;
    position: rleative;
    width: auto;
    padding-left: 32px;
    padding-right: 15px;
  }
`;

const StyledImg = styled.img`
  object-fit: cover;
  width: 102px;
  height: 70px;
  @media (max-width: 960px) {
    width: 63px;
    height: 45px;
  }
`;
