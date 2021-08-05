import React, { useState, useCallback } from 'react';
import styled from '@emotion/styled';
import { useHistory } from 'react-router';
import AddressInfo from 'pages/signup/AddressInfo';
import CreditCardInfo from 'pages/signup/CreditCardInfo';
import CreditCardModal from './CreditCardModal';
import { saveUserInfo } from 'services/LocalStorageWorker';
import { checkIdExist, checkErrorExists } from 'pages/signup/utils';
import { CustomInput, CustomButton } from 'elements';
import Role from 'pages/signup/Role';
import {
  idValidation,
  pwValidation,
  addressValidation,
  nameValidation,
  cardValidation,
  ageValidation,
} from 'utils/Validation';

const ErrorMessage = styled.div`
  width: 100%;
  text-align: left;
  color: red;
`;

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

const SignUpForm = ({ isModal }) => {
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

  const checkValidation = useCallback(
    e => {
      const { name } = e.target;

      switch (name) {
        case 'id':
          setErrors({
            ...errors,
            [name]: idValidation(userInfo.id).message,
          });
          break;
        case 'password':
          setErrors({
            ...errors,
            [name]: pwValidation(userInfo.password).message,
          });
          break;
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
          break;
        case 'name':
          setErrors({
            ...errors,
            [name]: nameValidation(userInfo.name).message,
          });
          break;
        case 'addressDetail':
          setErrors({
            ...errors,
            [name]: addressValidation(userInfo.addressDetail).message,
          });
          break;
        case 'age':
          setErrors({
            ...errors,
            [name]: ageValidation(userInfo.age).message,
          });
          break;
        default:
      }
    },
    [errors, passwordConfirm, userInfo],
  );

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

    saveUserInfo(userInfo);
    setUserInfo(initialUserInfo);
    setPasswordConfirm('');
    history.replace('/signin');
    alert('회원가입에 성공하셨습니다');
  };

  checkIdExist();

  return (
    <>
      <form onSubmit={handleSubmit}>
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
          placeholder="이름를 입력하세요"
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
      </form>
    </>
  );
};

export default React.memo(SignUpForm);
