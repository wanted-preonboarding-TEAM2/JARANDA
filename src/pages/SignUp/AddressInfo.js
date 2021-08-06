import React from 'react';
import styled from '@emotion/styled';

import { CustomInput, CustomButton } from 'components/common';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 15px 0;

  div {
    display: flex;
    gap: 0 15px;
  }
`;

const ErrorMessage = styled.div`
  width: 100%;
  text-align: left;
  color: red;
  font-size: 12px;
`;

const AddressInfo = ({
  userInfo,
  setUserInfo,
  handleChange,
  errors,
  checkValidation,
}) => {
  const loadLayout = () => {
    window.daum.postcode.load(() => {
      const postcode = new window.daum.Postcode({
        onComplete: function (data) {
          let fullAddr = data.address;
          let extraAddr = '';

          if (data.addressType === 'R') {
            if (data.bname !== '') {
              extraAddr += data.bname;
            }
            if (data.buildingName !== '') {
              extraAddr +=
                extraAddr !== '' ? `, ${data.buildingName}` : data.buildingName;
            }
            fullAddr += extraAddr !== '' ? ` (${extraAddr})` : '';
          }
          setUserInfo({
            ...userInfo,
            address: fullAddr,
          });
        },
      });
      postcode.open();
    });
  };

  return (
    <Container>
      <div>
        <CustomInput
          type="text"
          name="address"
          placeholder=" 주소를 입력해주세요"
          value={userInfo.address}
          onBlur={checkValidation}
          onChange={() => {
            return;
          }}
          readonly
        />

        <CustomButton type="button" width="100px" onClick={loadLayout}>
          주소
        </CustomButton>
      </div>
      {errors.address && <ErrorMessage>{errors.address}</ErrorMessage>}
      <CustomInput
        type="text"
        name="addressDetail"
        placeholder="나머지 주소를 입력해주세요"
        value={userInfo.addressDetail}
        onChange={handleChange}
      />
    </Container>
  );
};

export default AddressInfo;
