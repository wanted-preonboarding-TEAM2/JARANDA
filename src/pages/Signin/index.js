import React, { useCallback, useEffect, useState } from 'react';

import styled from '@emotion/styled';

import { useDispatch, useSelector } from 'react-redux';
import {
  loginStatusReset,
  postLogin,
  selectUser,
} from 'services/redux/slices/user';

import LoginForm from './LoginForm';
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

      dispatch(postLogin({ id, password }));
    },
    [id, password, dispatch],
  );

  useEffect(() => {
    if (errorMessage) {
      setTimeout(() => {
        dispatch(loginStatusReset());
      }, [4000]);

      return;
    }
  }, [errorMessage, dispatch]);

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
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </>
  );
};

export default Signin;
