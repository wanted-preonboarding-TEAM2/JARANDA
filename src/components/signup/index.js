import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import Form from './Form';
import { css } from '@emotion/react';
import { IoIosClose } from 'react-icons/io';

const modalStyle = ({ isModal }) => {
  return (
    isModal &&
    css`
      background: white;
      height: 800px;
      overflow-y: scroll;
      justify-content: start;
      @media only screen and (max-height: 768px) {
        height: 600px;
      }
    `
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  ${modalStyle}
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  box-shadow: rgb(0 0 0 / 10%) 0px 3px 6px 0px;
  ${({ isModal }) => isModal && 'box-shadow: none;'}
  form {
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px 0px;
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  ${({ isModal }) => isModal && 'display: none;'}
`;

const Title = styled.p`
  text-align: center;
  font-size: 24px;
  margin-bottom: 40px;
  ${({ isModal }) => isModal && 'display: none;'}
`;

const CloseBtnContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 30px;
  cursor: pointer;
`;

const SignUp = ({ isModal, closeModal }) => {
  const initialUserInfo = {
    id: '',
    password: '',
    passwordConfirm: '',
    name: '',
    cardInfo: {
      cardNum: '',
      expiredDate: '',
      cvc: '',
    },
    address: '',
    addressDetail: '',
    age: '',
    role: 'teacher',
  };
  const [userInfo, setUserInfo] = useState(initialUserInfo);
  const postcodeRef = useRef(null);

  return (
    <>
      <BackgroundImage isModal={isModal}>
        <img
          src="https://jaranda.kr/assets/image/account/background.sign_in.png"
          alt="backgroungImage"
        />
      </BackgroundImage>
      <Container isModal={isModal}>
        {isModal && (
          <CloseBtnContainer onClick={closeModal}>
            <IoIosClose></IoIosClose>
          </CloseBtnContainer>
        )}

        <Inner isModal={isModal}>
          <Title isModal={isModal}>
            10초만에 가입하고 <br />
            선생님 정보를 받아보세요
          </Title>
          <Form
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            isModal={isModal}
          />
        </Inner>
      </Container>
      <div ref={postcodeRef}></div>
    </>
  );
};

export default SignUp;
