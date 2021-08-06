import React from 'react';
import { useRouteMatch } from 'react-router-dom';

export default function Parents() {
  const match = useRouteMatch();
  return (
    <>
      <div>Parent Route!</div>
      <div>{`currentURL: ${match.path}`}</div>
    </>
  );
}
