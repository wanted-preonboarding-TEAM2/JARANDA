import React, { useState } from 'react';
import styled from '@emotion/styled';
import { CustomInput, CustomButton } from 'elements';

const SignInContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgb(249, 249, 249);
  background: url(https://jaranda.kr/assets/image/account/background.sign_in.png) no-repeat top right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SignInInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(255, 255, 255);
  padding: 90px;
  box-shadow: rgb(0 0 0 / 10%) 0px 3px 6px 0px;
  font-size: 14px;
  color: rgb(30, 29, 41);
  height: 60%;

  form {
    height: 100%;
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px 0px;
  }
`;

const SignInLogo = styled.img``

const SignInForm = styled.form``

const SignInDiv = styled.div``

const SignInSpan = styled.span``

const Signdivider = styled.div`
  background-color: #e5e5e5;
  height: 1px;
  width: 100%;
  margin: 24px 0;
`

const Signin = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModalOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SignInContainer>
        <SignInInner>
          <SignInLogo class="icon" alt="icon" src="https://jaranda.kr/assets/image/index/jaranda.logo.index.png" />
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
