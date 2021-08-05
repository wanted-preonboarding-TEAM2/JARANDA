import React from 'react';
import { useRouteMatch } from 'react-router-dom';

export default function ApplyTeacher() {
  const match = useRouteMatch();
  return (
    <>
      <div>선생님 지원하기 페이지입니다.</div>
      <div>{`currentURL: ${match.path}`}</div>
    </>
  );
}
