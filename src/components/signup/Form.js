import React, { useState } from 'react';
import styled from '@emotion/styled';
import AddressInfo from './AddressInfo';
import CreditCardInfo from './CreditCardInfo';
import CreditCardModal from 'modal/CreditCardModal';
import { saveUserInfo, checkIdExist } from 'services/LocalStorageWorker';
import { CustomInput, CustomButton } from 'elements';
import Role from './Role';
import {
  idValidation,
  pwValidation,
  addressValidation,
  nameValidation,
  cardValidation,
  ageValidation,
} from 'utils/Validation';

const initialUserInfo = {
  id: '',
  password: '',
  name: '',
  cardInfo: {
    cardNum: '',
    expiredDate: '',
    cvc: '',
  },
  address: '',
  addressDetail: '',
  age: '',
  role: 'teacher',
};

const initialError = {
  id: '',
  password: '',
  passwordConfirm: '',
  name: '',
  cardInfo: {
    cardNum: '',
    expiredDate: '',
    cvc: '',
  },
  address: '',
  addressDetail: '',
  age: '',
};

const StyledForm = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px 0px;
`;

const ErrorMessage = styled.div`
  width: 100%;
  text-align: left;
  color: red;
`;

const SignUpForm = ({ isModal, closeModal, handleAddUser }) => {
  const [userInfo, setUserInfo] = useState(initialUserInfo);
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [errors, setErrors] = useState(initialError);
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
          ...userInfo.cardInfo,
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
        setPasswordConfirm(value);
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

  const checkValidation = e => {
    const { name } = e.target;

    switch (name) {
      case 'id':
        setErrors({
          ...errors,
          [name]: idValidation(userInfo.id).message,
        });
        return false;
      case 'password':
        setErrors({
          ...errors,
          [name]: pwValidation(userInfo.password).message,
        });
        return false;
      case 'passwordConfirm':
        if (passwordConfirm !== userInfo.password) {
          setErrors({
            ...errors,
            [name]: '비밀번호와 일치하지 않습니다',
          });
          return;
        }
        setErrors({
          ...errors,
          [name]: pwValidation(passwordConfirm).message,
        });
        return false;
      case 'name':
        setErrors({
          ...errors,
          [name]: nameValidation(userInfo.name).message,
        });
        return false;
      case 'address':
        setErrors({
          ...errors,
          [name]: addressValidation(userInfo.address).message,
        });
        return false;
      case 'age':
        setErrors({
          ...errors,
          [name]: ageValidation(userInfo.age).message,
        });
        return false;
      default:
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(
      Object.values(errors).forEach(error => {
        console.log(error);
        if (typeof error === 'object') {
          return Object.values(error);
        }
        return error;
      }),
    );

    if (checkIdExist(userInfo.id)) {
      alert('아이디가 이미 존재합니다');
      return;
    }
    if (Object.values(errors).every(item => item === '')) {
      alert('입력을 확인해주세요');
      return;
    }

    if (isModal && !window.confirm('정말로 유저를 만드시겠습니까?')) return;
    saveUserInfo(userInfo);

    if (isModal) {
      handleAddUser();
      closeModal();
    }
  };

  checkIdExist();

  return (
    <StyledForm onSubmit={handleSubmit}>
      <CustomInput
        type="text"
        name="id"
        placeholder="아이디를 입력하세요"
        value={userInfo.id}
        onChange={handleChange}
        onBlur={checkValidation}
      />
      {errors.id && <ErrorMessage>{errors.id}</ErrorMessage>}
      <CustomInput
        type="password"
        name="password"
        placeholder="비밀번호를 입력하세요"
        value={userInfo.password}
        onChange={handleChange}
        onBlur={checkValidation}
      />
      {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
      <CustomInput
        type="password"
        name="passwordConfirm"
        placeholder="비밀번호를 한번 더 입력해주세요"
        value={passwordConfirm}
        onChange={handleChange}
        onBlur={checkValidation}
      />
      {errors.passwordConfirm && (
        <ErrorMessage>{errors.passwordConfirm}</ErrorMessage>
      )}
      <CustomInput
        type="text"
        name="name"
        placeholder="이름을 입력하세요"
        value={userInfo.name}
        onChange={handleChange}
        onBlur={checkValidation}
      />
      {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
      <AddressInfo
        userInfo={userInfo}
        setUserInfo={setUserInfo}
        handleChange={handleChange}
        checkValidation={checkValidation}
        errors={errors}
      />
      <CreditCardInfo
        handleModalOpen={handleModalOpen}
        cardInfo={userInfo.cardInfo}
      />
      <CreditCardModal
        open={creditModalOpen}
        close={handleModalOpen}
        setUserInfo={setUserInfo}
        cardValidation={cardValidation}
        errors={errors}
        setErrors={setErrors}
      />
      <CustomInput
        name="age"
        type="number"
        maxLength={3}
        placeholder="나이를 입력해주세요"
        value={userInfo.age}
        onChange={handleChange}
        onBlur={checkValidation}
      />
      <Role handleChange={handleChange} name="role" defaultValue="teacher" />
      <CustomButton type="submit">
        {isModal ? '유저 생성' : '회원 가입'}
      </CustomButton>
    </StyledForm>
  );
};

export default SignUpForm;
