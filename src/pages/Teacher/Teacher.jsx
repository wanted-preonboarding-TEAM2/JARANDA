import React from 'react';
import { useRouteMatch } from 'react-router-dom';

export default function Teacher() {
  const match = useRouteMatch();
  return (
    <>
      <div>Teacher Route!</div>
      <div>{`currentURL: ${match.path}`}</div>
    </>
  );
}
