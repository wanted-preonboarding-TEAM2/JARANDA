import React from 'react';
import styled from '@emotion/styled';
import { CustomInput } from 'elements';

const CreditCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px 10px;
  margin-bottom: 15px;
  cursor: pointer;

  div {
    display: flex;
    gap: 0 20px;
  }
`;

const CreditCardInfo = ({ handleModalOpen }) => {
  return (
    <CreditCardContainer onClick={handleModalOpen}>
      <CustomInput placeholder="신용카드 번호" readOnly />

      <div>
        <CustomInput
          type="number"
          placeholder="신용카드 만료일 (MM/YY)"
          readOnly
        />
        <CustomInput
          type="number"
          minLength={3}
          maxLength={3}
          placeholder="신용카드 CVC"
          readOnly
        />
      </div>
    </CreditCardContainer>
  );
};

export default CreditCardInfo;
