import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styled from '@emotion/styled';

import LoginForm from './LoginForm';

import {
  loginFailure,
  loginRequest,
  loginSuccess,
  selectUser,
} from 'services/redux/slices/user';

import { localStorageHelper as LSHelper } from 'utils/localStorageHelper';
import { findLoginUser } from 'utils/user';

import LS_KEY from 'constants/localStorageKey';
import ErrorMessage from './ErrorMessage';

const Container = styled.div`
  margin: 70px 20px 0;
  padding: 60px 200px;
  border-radius: 50px;
  background: #fff;

  @media only screen and (max-width: 960px) {
    padding: 60px 100px;
  }

  @media only screen and (max-width: 500px) {
    padding: 50px;
  }
`;

const BackgroundImg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -10;
`;

const Title = styled.p`
  text-align: center;
  font-size: 24px;
  margin-bottom: 40px;
`;

const Signin = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const { failure: errorMessage } = user.loginStatus;

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
    [id, password],
  );

  return (
    <>
      <BackgroundImg>
        <img
          src="https://jaranda.kr/assets/image/account/background.sign_in.png"
          alt="backgroungImage"
        />
      </BackgroundImg>
      <Container>
        <Title>로그인</Title>
        <LoginForm
          id={id}
          password={password}
          onSubmit={handleLoginButtonClick}
          onChange={handleChange}
        />
      </Container>
      {errorMessage && (
        <ErrorMessage visible={errorVisible} message={errorMessage} />
      )}
    </>
  );
};

export default Signin;
