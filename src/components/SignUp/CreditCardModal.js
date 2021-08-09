import React, { useState } from 'react';
import styled from '@emotion/styled';
import { CustomInput, CustomButton } from 'components/common';
import Validator from 'services/utils/SignUpValidator.js';
import cardInfoLengthChecker from 'pages/SignUp/utils/cardInfoLengthChecker.js';
import {
  creditCardInfoInitialState,
  creditCardInitialError,
} from './initialState.js';

const CreditCardModal = ({ open, close, handleSetCardInfo }) => {
  const [values, setValues] = useState(creditCardInfoInitialState);
  const [errors, setErrors] = useState(creditCardInitialError);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    if (!cardInfoLengthChecker(name, value.length)) return;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const checkValidation = ({ target }) => {
    const { name } = target;
    if (!Validator[name]) return;
    const validationResult = Validator[name](values[name]);
    setErrors({
      ...errors,
      [name]: validationResult,
    });
  };

  const handleClick = () => {
    handleSetCardInfo({ ...values }, { ...errors });
    close();
  };

  return (
    <>
      {open ? (
        <ModalContainer>
          <ModalBox>
            <CloseBtn onClick={close}>X</CloseBtn>
            <CustomInput
              type="number"
              name="cardNum"
              placeholder="신용카드 번호"
              value={values.cardNum}
              onChange={handleChange}
              onBlur={checkValidation}
            />
            {!!errors.cardNum && <ErrorMessage>{errors.cardNum}</ErrorMessage>}
            <div>
              <Box>
                <CustomInput
                  type="number"
                  name="expiredDate"
                  placeholder="신용카드 만료일 (MMYY)"
                  value={values.expiredDate}
                  onChange={handleChange}
                  onBlur={checkValidation}
                />
                {!!errors.expiredDate && (
                  <ErrorMessage style={{ marginTop: '14px' }}>
                    {errors.expiredDate}
                  </ErrorMessage>
                )}
              </Box>
              <Box>
                <CustomInput
                  type="number"
                  name="cvc"
                  placeholder="신용카드 CVC"
                  value={values.cvc}
                  onChange={handleChange}
                  onBlur={checkValidation}
                />
                {!!errors.cvc && (
                  <ErrorMessage style={{ marginTop: '14px' }}>
                    {errors.cvc}
                  </ErrorMessage>
                )}
              </Box>
            </div>
            <CustomButton onClick={handleClick}>카드 등록</CustomButton>
          </ModalBox>
        </ModalContainer>
      ) : null}
    </>
  );
};

export default CreditCardModal;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 600px;
  height: 300px;
  background-color: #fff;
  border-radius: 10px;
  padding: 16px 32px;

  gap: 0 10px;
  margin-bottom: 15px;

  div {
    display: flex;
    gap: 0 20px;
  }
`;

const CloseBtn = styled.div`
  margin-left: auto;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const ErrorMessage = styled.div`
  width: 100%;
  font-size: 12px;
  text-align: left;
  color: red;
`;
