import React, { useState } from 'react';
import styled from '@emotion/styled';
import { CustomInput, CustomButton } from 'elements';

const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

const SignInInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(255, 255, 255);
  padding: 50px 90px;
  box-shadow: rgb(0 0 0 / 10%) 0px 3px 6px 0px;
  font-size: 14px;
  color: rgb(30, 29, 41);

  form {
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px 0px;
  }
`;

const SignInLogo = styled.img`
  margin-bottom: 40px;
`;

const SignInForm = styled.form``;

const SignInDiv = styled.div``;

const SignInSpan = styled.span``;

const BackgroundImg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -10;
`;

const Signdivider = styled.div`
  background-color: #e5e5e5;
  height: 1px;
  width: 100%;
  margin: 10px 0;
`;

const Signin = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModalOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SignInContainer>
        <BackgroundImg>
          <img
            src="https://jaranda.kr/assets/image/account/background.sign_in.png"
            alt="backgroungImage"
          />
        </BackgroundImg>
        <SignInInner>
          <SignInLogo
            className="icon"
            alt="icon"
            src="https://jaranda.kr/assets/image/index/jaranda.logo.index.png"
          />
          <SignInForm>
            <CustomInput
              type="text"
              name="userName"
              placeholder="아이디를 입력하세요(필수입력)"
            />
            <CustomInput
              type="password"
              name="password"
              placeholder="비밀번호를 입력하세요(필수입력)"
            />
            <CustomButton type="submit">로그인</CustomButton>
            <Signdivider></Signdivider>
            <CustomButton type="submit">부모님 회원가입</CustomButton>
          </SignInForm>
          <div>비밀번호를 잊으셨나요?</div>
        </SignInInner>
      </SignInContainer>
    </>
  );
};

export default Signin;
