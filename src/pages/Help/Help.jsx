import React from 'react';
import { useRouteMatch } from 'react-router-dom';

export default function Help() {
  const match = useRouteMatch();
  return (
    <>
      <div>이용안내 페이지입니다.</div>
      <div>{`currentURL: ${match.path}`}</div>
    </>
  );
}
