import React, { useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Title } from 'components/common/index';
import { PARENT } from 'constants/acceptedPageByRole';
import { useEffect } from 'react';

export default function Parents() {
  const [pageName, setPageName] = useState('');
  const match = useRouteMatch();
  useEffect(() => {
    PARENT.forEach(e => {
      e.to === match.path && setPageName(e.title);
    });
  }, [match.path]);
  return (
    <>
      <Title>{pageName}</Title>
    </>
  );
}
