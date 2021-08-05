import React from 'react';
import styled from '@emotion/styled';

const CustomSelect = styled.select`
  width: 100%;
  padding: 10px;
`;

function Role({ handleChange, name }) {
  return (
    <CustomSelect onChange={handleChange} name={name}>
      <option value="teacher">선생님</option>
      <option value="parent">학부모</option>
    </CustomSelect>
  );
}

export default Role;
