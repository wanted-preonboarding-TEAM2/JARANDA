import React from 'react';
import styled from '@emotion/styled';

export default function Home() {
  return (
    <div>
      Home
      <HiddenStyledH1>
        가장 퀄리티 있고 믿을 수 있는 선생님을 자란다에서만 만나보세요. 4-13세
        아이에게 꼭 필요한 돌봄과 배움을 단짝샘과 함께. 국내 유일 1:1 플래너
        관리. 국내 최고 선생님 퀄리티
      </HiddenStyledH1>
    </div>
  );
}

const HiddenStyledH1 = styled.h1`
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  white-space: nowrap;
`;
