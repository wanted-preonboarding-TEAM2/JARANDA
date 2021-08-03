import React from 'react';
import GNB from './GNB/GNB';
import styled from '@emotion/styled';

const JarandaBannerContainer = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  background: #dce35b; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #dce35b, #45b649);
  color: white;
  background: linear-gradient(to right, #dce35b, #45b649);
  position: relative;
`;

const JarandaBannerText = styled.p`
  margin: auto;
`;

const StyledSection = styled.section`
  width: 913px;
  margin: auto;
  @media only screen and (max-width: 960px) {
    width: auto;
    padding-left: 32px;
    padding-right: 27px;
  }
`;

export default function Layout({ children }) {
  return (
    <>
      <JarandaBannerContainer>
        <JarandaBannerText>
          자란다 앱으로 더 편리하게! 앱에서만 2만원 상당 긴급돌봄지원 패키지
          지급 중!
        </JarandaBannerText>
      </JarandaBannerContainer>
      <GNB />
      <StyledSection>{children}</StyledSection>
      {/* Footer */}
    </>
  );
}
