import React from 'react';
import styled from '@emotion/styled';

const ModalContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  inset: inherit;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
`;

const ModalBox = styled.div`
  background-color: #fff;
  width: 500px;
  height: 400px;
`;

const AddressModal = ({ open }) => {
  return (
    <>
      {!open ? (
        <ModalContainer>
          <ModalBox>모달</ModalBox>
        </ModalContainer>
      ) : null}
    </>
  );
};

export default AddressModal;
