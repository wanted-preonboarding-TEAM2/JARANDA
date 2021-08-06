import { Title } from 'components/common';
import { ADMIN } from 'constants/acceptedPageByRole';
import ROUTES from 'constants/routesPath.js';
import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import AccountManagement from './AccountManagement';

export default function Admin() {
  const [pageName, setPageName] = useState('');
  const match = useRouteMatch();
  useEffect(() => {
    ADMIN.forEach(e => {
      e.to === match.path && setPageName(e.title);
    });
  }, [match.path]);
  return (
    <>
      <Title>{pageName}</Title>
      {match.path === ROUTES.ADMIN && <AccountManagement />}
    </>
  );
}
