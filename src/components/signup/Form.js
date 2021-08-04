import React, { useState } from 'react';

import AddressInfo from './AddressInfo';
import CreditCardInfo from './CreditCardInfo';
import CreditCardModal from 'modal/CreditCardModal';
import { saveUserInfo } from 'services/LocalStorageWorker';
import { CustomInput, CustomButton } from 'elements';
import Role from './Role';

const SignUpForm = ({ userInfo, setUserInfo }) => {
  const [creditModalOpen, setCreditModalOpen] = useState(false);

  const handleModalOpen = () => {
    setCreditModalOpen(!creditModalOpen);
  };

  const handleChange = e => {
    const { name, value } = e.target;

    if (creditModalOpen) {
      setUserInfo({
        ...userInfo,
        cardInfo: {
          [name]: value,
        },
      });
    }

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

    saveUserInfo(userInfo);
  };

  return (
    <>
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
        <AddressInfo
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          handleChange={handleChange}
        />
        <CreditCardInfo
          handleModalOpen={handleModalOpen}
          cardInfo={userInfo.cardInfo}
        />
        {creditModalOpen && (
          <CreditCardModal
            open={creditModalOpen}
            close={handleModalOpen}
            setUserInfo={setUserInfo}
          />
        )}
        <CustomInput
          name="age"
          type="number"
          maxLength={3}
          placeholder="나이를 입력해주세요"
          value={userInfo.age}
          onChange={handleChange}
        />
        <Role handleChange={handleChange} name="role" defaultValue="teacher" />
        <CustomButton type="submit">회원 가입</CustomButton>
      </form>
    </>
  );
};

export default SignUpForm;
