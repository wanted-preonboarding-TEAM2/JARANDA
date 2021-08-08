import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  loginStatusReset,
  postLogin,
  selectUser,
} from 'services/redux/slices/user';
import LoginForm from './LoginForm';
import ErrorMessage from './ErrorMessage';
import useInputs from 'utils/hooks/useInputs.js';
import { loginFieldsInitialState } from './initialState.js';

const Signin = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const { values, handleChange } = useInputs({
    ...loginFieldsInitialState,
  });

  const { failure: errorMessage } = user.loginStatus;
  const { id, password } = values;

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(postLogin(values));
  };

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
          onSubmit={handleSubmit}
          onChange={handleChange}
        />
      </Container>
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </>
  );
};

export default React.memo(Signin);

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
