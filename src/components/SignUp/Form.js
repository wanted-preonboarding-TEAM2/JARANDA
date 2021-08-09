import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useHistory } from 'react-router';
import AddressInfo from 'pages/SignUp/AddressInfo';
import CreditCardInfo from 'pages/SignUp/CreditCardInfo';
import CreditCardModal from './CreditCardModal';
import { saveUserInfo } from 'services/utils/LocalStorageWorker';
import { checkErrors } from 'pages/SignUp/utils';
import { CustomInput, CustomButton } from 'components/common';
import RoleSelect from 'pages/SignUp/RoleSelect';
import ROLE from 'constants/role.js';
import ROUTES from 'constants/routesPath.js';
import { initialUserInfo, initialError } from './initialState';
import Validator from 'services/utils/SignUpValidator.js';
import useInputs from 'utils/hooks/useInputs.js';

const SignUpForm = ({ isModal, closeModal, handleAddUser }) => {
  const {
    values: userInfo,
    setValues: setUserInfo,
    handleChange,
  } = useInputs(initialUserInfo);
  const [errors, setErrors] = useState(initialError);
  const [creditModalOpen, setCreditModalOpen] = useState(false);
  const history = useHistory();

  const handleModalOpen = () => {
    setCreditModalOpen(true);
  };

  const handleModalClose = () => {
    setCreditModalOpen(false);
  };

  const handleSetCardInfo = (cardInfo, cardErrors) => {
    setErrors({
      ...errors,
      ...cardErrors,
    });
    setUserInfo({
      ...userInfo,
      cardInfo: {
        ...cardInfo,
      },
    });
  };

  const checkValidation = e => {
    const { name } = e.target;
    if (!Validator[name]) return;
    const validationResult =
      name === 'passwordConfirm'
        ? Validator[name](userInfo[name], userInfo.password)
        : Validator[name](userInfo[name]);
    setErrors({
      ...errors,
      [name]: validationResult,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!checkErrors(errors, userInfo.id)) return;
    if (isModal && !window.confirm('정말로 유저를 만드시겠습니까?')) return;
    const { passwordConfirm, ...userInfoExcepConfirm } = userInfo;
    saveUserInfo(userInfoExcepConfirm);
    if (isModal) {
      handleAddUser();
      closeModal();
      return;
    }
    history.replace(`${ROUTES.SIGNIN}`);
    alert('회원가입에 성공하셨습니다');
  };

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
      {!!errors.id && <ErrorMessage>{errors.id}</ErrorMessage>}
      <CustomInput
        type="password"
        name="password"
        placeholder="비밀번호를 입력하세요"
        value={userInfo.password}
        onChange={handleChange}
        onBlur={checkValidation}
      />
      {!!errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
      <CustomInput
        type="password"
        name="passwordConfirm"
        placeholder="비밀번호를 한번 더 입력해주세요"
        value={userInfo.passwordConfirm}
        onChange={handleChange}
        onBlur={checkValidation}
      />
      {!!errors.passwordConfirm && (
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
      {!!errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
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
        errors={errors}
      />
      <CreditCardModal
        open={creditModalOpen}
        close={handleModalClose}
        handleSetCardInfo={handleSetCardInfo}
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
      {!!errors.age && <ErrorMessage>{errors.age}</ErrorMessage>}
      <RoleSelect
        handleChange={handleChange}
        name="role"
        defaultValue={ROLE.TEACHER}
      />
      <CustomButton type="submit">
        {isModal ? '유저 생성' : '회원 가입'}
      </CustomButton>
    </StyledForm>
  );
};

export default React.memo(SignUpForm);

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
