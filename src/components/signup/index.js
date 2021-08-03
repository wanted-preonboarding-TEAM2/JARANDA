import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { CustomInput, CustomButton } from 'elements';
import CreditCardInfo from './CreditCardInfo';
import CreditCardModal from 'modal/CreditCardModal';
import Role from './Role';

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
  margin: 15px 0;

  div {
    display: flex;
  }
`;

const Signup = () => {
  const initialUserInfo = {
    id: '',
    password: '',
    passwordConfirm: '',
    name: '',
    cardInfo: {
      cardNum: '',
      expNum: '',
      cvcNum: '',
    },
    address: '',
    addressDetail: '',
    age: '',
    role: 'teacher',
  };
  const [userInfo, setUserInfo] = useState(initialUserInfo);
  const [creditModalOpen, setCreditModalOpen] = useState(false); //카드 정보 모달
  const [creditValue, setCreditValue] = useState({
    cardNum: '',
    expNum: '',
    cvcNum: '',
  }); //카드 번호
  const postcodeRef = useRef(null);

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

  const handleModalOpen = () => {
    setCreditModalOpen(!creditModalOpen);
  };

  // const onChangeCreditNumber = e => {
  //   //const regex = /^[0-9\b -]{0,16}$/;
  //   setCreditValue(e.target.value);
  // };

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'id':
        setUserInfo({
          ...userInfo,
          [name]: value,
        });
        break;
      case 'password':
        setUserInfo({
          ...userInfo,
          [name]: value,
        });
        break;
      case 'passwordConfirm':
        setUserInfo({
          ...userInfo,
          [name]: value,
        });
        break;
      case 'name':
        setUserInfo({
          ...userInfo,
          [name]: value,
        });
        break;
      case 'address':
        setUserInfo({
          ...userInfo,
          [name]: value,
        });
        break;
      case 'addressDetail':
        setUserInfo({
          ...userInfo,
          [name]: value,
        });
        break;
      case 'cardInfo':
        setUserInfo({
          ...userInfo,
          [name]: value,
        });
        break;
      case 'age':
        setUserInfo({
          ...userInfo,
          [name]: value,
        });
        break;
      case 'role':
        setUserInfo({
          ...userInfo,
          [name]: value,
        });
        break;
      default:
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  // useEffect(() => {
  //   if (creditValue.length === 16) {
  //     setCreditValue(
  //       creditValue
  //         .replace(/-/g, '')
  //         .replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, '$1-$2-$3-$4'),
  //     );
  //   }
  // }, [creditValue]);

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);

  return (
    <>
      <SignUpContainer>
        <SignupInner>
          <h1>회원 가입</h1>
          <form onSubmit={handleSubmit}>
            <CustomInput
              type="text"
              name="id"
              placeholder="아이디를 입력하세요"
              value={userInfo.id}
              onChange={handleChange}
            />

            <CustomInput
              type="password"
              name="password"
              placeholder="비밀번호를 입력하세요"
              value={userInfo.password}
              onChange={handleChange}
            />
            <CustomInput
              type="password"
              name="passwordConfirm"
              placeholder="비밀번호를 한번 더 입력해주세요"
              value={userInfo.passwordConfirm}
              onChange={handleChange}
            />
            <CustomInput
              type="text"
              name="name"
              placeholder="이름를 입력하세요"
              value={userInfo.name}
              onChange={handleChange}
            />
            <AddressContainer>
              <div>
                <CustomInput
                  type="text"
                  name="address"
                  placeholder=" 주소를 입력해주세요"
                  value={userInfo.address}
                  onChange={() => {
                    return;
                  }}
                  readOnly
                />
                <CustomButton type="button" width="100px" onClick={loadLayout}>
                  주소
                </CustomButton>
              </div>
              <CustomInput
                type="text"
                name="addressDetail"
                placeholder="나머지 주소를 입력해주세요"
                value={userInfo.addressDetail}
                onChange={handleChange}
              />
            </AddressContainer>

            <CreditCardInfo
              handleModalOpen={handleModalOpen}
              setUserInfo={setUserInfo}
            />
            <CustomInput
              name="age"
              type="number"
              maxLength={3}
              placeholder="나이를 입력해주세요"
              value={userInfo.age}
              onChange={handleChange}
            />
            <Role
              handleChange={handleChange}
              name="role"
              defaultValue="teacher"
            />
            <CustomButton type="button">회원 가입</CustomButton>
          </form>
        </SignupInner>
        {creditModalOpen && (
          <CreditCardModal
            open={creditModalOpen}
            close={handleModalOpen}
            creditValue={creditValue}
          />
        )}
      </SignUpContainer>
      <div ref={postcodeRef}></div>
    </>
  );
};

export default Signup;
