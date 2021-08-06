import { Title } from 'components/common';
import { TEACHER } from 'constants/acceptedPageByRole';
import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

export default function Teacher() {
  const [pageName, setPageName] = useState('');
  const match = useRouteMatch();
  useEffect(() => {
    TEACHER.forEach(e => {
      e.to === match.path && setPageName(e.title);
    });
  }, [match.path]);
  return (
    <>
      <Title>{pageName}</Title>
    </>
  );
}
