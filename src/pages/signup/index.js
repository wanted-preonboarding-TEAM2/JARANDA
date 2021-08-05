import React, { useRef } from 'react';
import styled from '@emotion/styled';

import Form from 'components/signup/Form';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  box-shadow: rgb(0 0 0 / 10%) 0px 3px 6px 0px;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
`;

const Title = styled.p`
  text-align: center;
  font-size: 24px;
  margin-bottom: 40px;
`;

const CloseBtnContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 30px;
  cursor: pointer;
`;

const Index = () => {
  const postcodeRef = useRef(null);

  return (
    <>
      <BackgroundImage>
        <img
          src="https://jaranda.kr/assets/image/account/background.sign_in.png"
          alt="backgroungImage"
        />
      </BackgroundImage>
      <Container>
        <Inner>
          <Title>
            10초만에 가입하고 <br />
            선생님 정보를 받아보세요
          </Title>
          <Form />
        </Inner>
      </Container>
      <div ref={postcodeRef}></div>
    </>
  );
};

export default Index;
