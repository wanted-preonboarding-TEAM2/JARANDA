import React, { useState } from 'react';
import styled from '@emotion/styled';
import { CustomInput, CustomButton } from 'elements';
import Modal from 'modal/AddressModal';

const SignUpContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: azure;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SignupInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid red;
  padding: 10px;
  height: 80%;

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

const AddressContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0;
`;

const CreditCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0 10px;
  margin-bottom: 15px;

  div {
    display: flex;
  }
`;
const Signup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModalOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SignUpContainer>
        <SignupInner>
          <h1>회원 가입</h1>
          <form>
            <CustomInput
              type="text"
              name="userName"
              placeholder="아이디를 입력하세요"
            />
            <CustomInput
              type="password"
              name="password"
              placeholder="비밀번호를 입력하세요"
            />
            <CustomInput
              type="password"
              name="passwordConfirm"
              placeholder="비밀번호를 한번 더 입력해주세요"
            />
            <AddressContainer>
              <CustomButton type="button" onClick={handleModalOpen}>
                주소
              </CustomButton>
              <CustomInput
                type="text"
                name="address"
                placeholder=" 주소를 입력해주세요"
                value=""
                readonly
              />
              <CustomInput
                type="text"
                name="Remaining Addresses"
                placeholder="나머지 주소를 입력해주세요"
              />
            </AddressContainer>
            <CreditCardContainer>
              <CustomInput type="number" placeholder="신용카드 번호" />
              <div>
                <CustomInput type="number" placeholder="신용카드 만료일" />
                <CustomInput
                  type="number"
                  minLength={3}
                  maxLength={3}
                  placeholder="신용카드 CVC"
                />
              </div>
            </CreditCardContainer>

            <CustomInput
              name="age"
              type="number"
              maxLength={3}
              placeholder="나이를 입력해주세요"
            />
            <CustomButton type="submit">회원 가입</CustomButton>
          </form>
        </SignupInner>
      </SignUpContainer>
      <Modal open={isOpen} />
    </>
  );
};

export default Signup;
