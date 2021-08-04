import React, { useState } from 'react';
import styled from '@emotion/styled';

import { CustomInput, CustomButton } from 'elements';

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

const CreditCardModal = ({ open, close, setUserInfo }) => {
  const [cardNum, setCardNum] = useState('');
  const [expiredDate, setExpiredDate] = useState('');
  const [cvc, setCvc] = useState('');

  const cardInfoChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'cardNum':
        setCardNum(value);
        break;
      case 'expiredDate':
        setExpiredDate(value);
        break;
      case 'cvc':
        setCvc(value);
        break;
      default:
    }
  };

  const setCardInfo = () => {
    setUserInfo(prev => {
      prev.cardInfo = {
        cardNum,
        expiredDate,
        cvc,
      };
      return prev;
    });
    close();
  };
  return (
    <>
      {open ? (
        <ModalContainer>
          <ModalBox>
            <CloseBtn onClick={close}>X</CloseBtn>
            <CustomInput
              type="text"
              name="cardNum"
              placeholder="신용카드 번호"
              defaultValue={cardNum}
              onChange={cardInfoChange}
            />
            <div>
              <CustomInput
                type="text"
                name="expiredDate"
                placeholder="신용카드 만료일 (MM/YY)"
                defaultValue={expiredDate}
                onChange={cardInfoChange}
              />
              <CustomInput
                type="number"
                name="cvc"
                minLength={3}
                maxLength={3}
                placeholder="신용카드 CVC"
                defaultValue={cvc}
                onChange={cardInfoChange}
              />
            </div>
            <CustomButton onClick={setCardInfo}>카드 등록</CustomButton>
          </ModalBox>
        </ModalContainer>
      ) : null}
    </>
  );
};

export default CreditCardModal;
