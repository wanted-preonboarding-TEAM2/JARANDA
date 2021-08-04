import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';

import { CustomInput, CustomButton } from 'elements';

import { localStorageHelper as LSHelper } from 'utils/localStorageHelper';

import {
  loginFailure,
  loginRequest,
  loginSuccess,
  selectUser,
} from 'services/redux/slices/user';

import { findLoginUser } from 'utils/user';
import LS_KEY from 'constants/localStorageKey';

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

const SignInForm = styled.form``;

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

const MoveToSignUp = styled.a`
  width: 100%;
  background-color: #0085fd;
  color: #ffffff;
  border: none;
  padding: 16px;
  font-size: 14px;
  cursor: pointer;
  text-align: center;
`;

const ResetPW = styled.a`
  margin-top: 40px;
`;

const Title = styled.p`
  text-align: center;
  font-size: 24px;
  margin-bottom: 40px;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  
  to {
    opacity: 0;
    display: none;;
  }
`;

const ErrorMessage = styled.p`
  ${({ visible }) =>
    visible
      ? css`
          animation: ${fadeIn} 0.3s linear;
        `
      : css`
          animation: ${fadeOut} 0.3s linear forwards;
        `};
  position: fixed;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);
  padding: 5px 10px;
  font-size: 12px;
  text-align: center;
  border-radius: 20px;
  background: #dcdcdc;
`;

const Signin = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const { loading, failure } = user.loginStatus;

  const [loginFields, setLoginFields] = useState({
    id: '',
    password: '',
  });

  const [errorVisible, setErrorVisible] = useState(false);

  const { id, password } = loginFields;

  const handleChange = useCallback(e => {
    const { name, value } = e.target;

    setLoginFields(prev => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleLoginButtonClick = useCallback(
    e => {
      e.preventDefault();

      dispatch(loginRequest());

      const isLoginUser = findLoginUser({ id, password });

      if (!isLoginUser) {
        dispatch(
          loginFailure({
            errorMessage:
              '아이디 또는 비밀번호가 잘못되었습니다. 다시 입력해주세요.',
          }),
        );

        setErrorVisible(true);

        setTimeout(() => {
          setErrorVisible(false);
        }, [4000]);

        return;
      }

      if (isLoginUser) {
        const { id, uid, name, role } = isLoginUser;

        const loginUser = {
          id,
          uid,
          name,
          role,
        };

        dispatch(loginSuccess(loginUser));

        LSHelper.setItem(LS_KEY.LOGIN_VALIDATION, loginUser);

        return;
      }
    },
    [id],
  );

  return (
    <>
      {loading && <div>로딩중</div>}
      <SignInContainer>
        <BackgroundImg>
          <img
            src="https://jaranda.kr/assets/image/account/background.sign_in.png"
            alt="backgroungImage"
          />
        </BackgroundImg>
        <SignInInner>
          <Title>로그인</Title>
          <SignInForm onSubmit={handleLoginButtonClick}>
            <CustomInput
              type="text"
              name="id"
              value={id}
              placeholder="아이디를 입력하세요(필수입력)"
              onChange={handleChange}
            />
            <CustomInput
              type="password"
              name="password"
              value={password}
              placeholder="비밀번호를 입력하세요(필수입력)"
              onChange={handleChange}
            />
            <CustomButton type="submit">로그인</CustomButton>
            <Signdivider></Signdivider>
            <MoveToSignUp href="/signup">부모님 회원가입</MoveToSignUp>
          </SignInForm>
          <ResetPW href="/">비밀번호를 잊으셨나요?</ResetPW>
        </SignInInner>
      </SignInContainer>
      {failure && <ErrorMessage visible={errorVisible}>{failure}</ErrorMessage>}
    </>
  );
};

export default Signin;
