import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

const MenuItemStyle = styled(NavLink)`
  color: #999;

  & + & {
    margin-left: 20px;
  }
  @media only screen and (hover: hover) {
    &:hover {
      color: #333;
    }
  }

  @media only screen and (max-width: 960px) {
    margin-top: 0.5em;
    & + & {
      margin-left: 0;
    }
  }
`;

export default function MenuItem({ children, to, handleLogout }) {
  return (
    <MenuItemStyle
      exact
      to={to}
      activeStyle={{ color: `${handleLogout ? '#999' : '#333'}` }}
      onClick={handleLogout}
    >
      <li>{children}</li>
    </MenuItemStyle>
  );
}
