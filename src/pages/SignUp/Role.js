import React from 'react';
import styled from '@emotion/styled';
import ROLE from 'constants/role';

const CustomSelect = styled.select`
  width: 100%;
  padding: 10px;
`;

function Role({ handleChange, name }) {
  return (
    <CustomSelect onChange={handleChange} name={name}>
      <option value={ROLE.TEACHER}>선생님</option>
      <option value={ROLE.PARENT}>학부모</option>
    </CustomSelect>
  );
}

export default Role;
