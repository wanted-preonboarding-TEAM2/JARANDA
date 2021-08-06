import React, { useState, useCallback } from 'react';
import styled from '@emotion/styled';
import { useHistory } from 'react-router';
import AddressInfo from 'pages/SignUp/AddressInfo';
import CreditCardInfo from 'pages/SignUp/CreditCardInfo';
import CreditCardModal from './CreditCardModal';
import { saveUserInfo } from 'services/LocalStorageWorker';
import { checkIdExist, checkErrorExists } from 'pages/SignUp/utils';
import { CustomInput, CustomButton } from 'elements';
import Role from 'pages/SignUp/Role';
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
  font-size: 12px;
  text-align: left;
  color: red;
`;

const SignUpForm = ({ isModal, closeModal, handleAddUser }) => {
  const [userInfo, setUserInfo] = useState(initialUserInfo);
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [errors, setErrors] = useState(initialError);
  const [creditModalOpen, setCreditModalOpen] = useState(false);
  const history = useHistory();

  const handleModalOpen = () => {
    setCreditModalOpen(!creditModalOpen);
  };

  const handleChange = useCallback(
    e => {
      const { name, value } = e.target;

      if (creditModalOpen) {
        setUserInfo({
          ...userInfo,
          cardInfo: {
            ...userInfo.cardInfo,
            [name]: value,
          },
        });
        return;
      }
      if (name === 'passwordConfirm') {
        setPasswordConfirm(value);
        return;
      }
      setUserInfo({
        ...userInfo,
        [name]: value,
      });
    },
    [creditModalOpen, userInfo],
  );

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
        <ErrorMessage>입력 오류 메시지 정보가 없습니다.</ErrorMessage>;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!checkErrorExists(errors)) {
      alert('입력을 확인해주세요');
      return;
    }

    if (checkIdExist(userInfo.id)) {
      alert('아이디가 이미 존재합니다');
      return;
    }

    if (isModal && !window.confirm('정말로 유저를 만드시겠습니까?')) return;
    saveUserInfo(userInfo);
    if (isModal) {
      handleAddUser();
      closeModal();
    }
    setUserInfo(initialUserInfo);
    setPasswordConfirm('');
    history.replace('/signin');
    alert('회원가입에 성공하셨습니다');
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

export default React.memo(SignUpForm);
