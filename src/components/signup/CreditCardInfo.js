import React from 'react';
import styled from '@emotion/styled';

import { CustomInput } from 'elements';

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

const CreditCardInfo = ({ handleModalOpen, cardInfo }) => {
  const { cardNum, expiredDate, cvc } = cardInfo;
  return (
    <Container onClick={handleModalOpen}>
      <CustomInput
        placeholder="신용카드 번호"
        defaultValue={cardNum}
        readOnly
      />

      <div>
        <CustomInput
          type="text"
          placeholder="신용카드 만료일 (MM/YY)"
          defaultValue={expiredDate}
          readOnly
        />
        <CustomInput
          type="number"
          minLength={3}
          maxLength={3}
          placeholder="신용카드 CVC"
          defaultValue={cvc}
          readOnly
        />
      </div>
    </Container>
  );
};

export default CreditCardInfo;
