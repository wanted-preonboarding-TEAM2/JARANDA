import React from 'react';
import styled from '@emotion/styled';
import { CustomInput } from 'components/common';

const CreditCardInfo = ({ handleModalOpen, cardInfo, errors }) => {
  const { cardNum, expiredDate, cvc } = cardInfo;
  return (
    <Container onClick={handleModalOpen}>
      <CustomInput
        placeholder="신용카드 번호"
        value={cardNum}
        onChange={() => {
          return;
        }}
        readonly
      />

      <div>
        <CustomInput
          type="text"
          placeholder="신용카드 만료일 (MM/YY)"
          value={expiredDate}
          onChange={() => {
            return;
          }}
          readonly
        />
        <CustomInput
          type="number"
          placeholder="신용카드 CVC"
          value={cvc}
          onChange={() => {
            return;
          }}
          readonly
        />
      </div>
      {!!errors.cardNum && <ErrorMessage>{errors.cardNum}</ErrorMessage>}
      {!!errors.expiredDate && (
        <ErrorMessage>{errors.expiredDate}</ErrorMessage>
      )}
      {!!errors.cvc && <ErrorMessage>{errors.cvc}</ErrorMessage>}
    </Container>
  );
};

export default CreditCardInfo;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 15px 10px;
  cursor: pointer;

  div {
    display: flex;
    gap: 0 20px;
  }
`;

const ErrorMessage = styled.div`
  width: 100%;
  font-size: 12px;
  text-align: left;
  color: red;
`;
