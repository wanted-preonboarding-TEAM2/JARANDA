import styled from '@emotion/styled';

const Title = ({ children }) => {
  return <PageTitle>{children}</PageTitle>;
};

export default Title;

const PageTitle = styled.h1`
  margin: 2vh 0;
`;
