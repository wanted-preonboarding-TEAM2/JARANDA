import React from 'react';

import { CustomButton, CustomInput } from 'components/common';

import { LinkButton } from 'components/common';
import styled from '@emotion/styled';

const FormWrap = styled.div`
  form {
    input + input {
      margin-top: 15px;
    }

    button {
      margin-top: 20px;
    }
  }
`;

const CustomLinkButton = styled(LinkButton)`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #dcdcdc;
`;

const LoginForm = ({ id, password, onSubmit, onChange }) => {
  return (
    <FormWrap>
      <form onSubmit={onSubmit}>
        <CustomInput
          type="text"
          name="id"
          value={id}
          placeholder="아이디를 입력하세요(필수입력)"
          onChange={onChange}
        />
        <CustomInput
          type="password"
          name="password"
          value={password}
          placeholder="비밀번호를 입력하세요(필수입력)"
          onChange={onChange}
        />
        <CustomButton type="submit">로그인</CustomButton>
      </form>
      <CustomLinkButton to="/signup">부모님 회원가입</CustomLinkButton>
    </FormWrap>
  );
};

export default LoginForm;
