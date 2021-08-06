import styled from '@emotion/styled';
import LinkButton from 'elements/LinkButton';
import { MdError } from 'react-icons/md';

const RouteNoMatch = () => {
  return (
    <Container>
      <MdError />
      <ErrorMessage>
        <h3>404 Error</h3>
        <h5>죄송합니다, 방문하신 페이지가 없습니다.</h5>
      </ErrorMessage>
      <StyledLinkButton to="/">홈으로 돌아가기</StyledLinkButton>
    </Container>
  );
};

export default RouteNoMatch;

const Container = styled.div`
  margin-top: 10vh;
  font-size: 20vh;
  text-align: center;
  color: #aac14f;
`;

const ErrorMessage = styled.div`
  font-size: 2vh;
  color: #333;
  h3 {
    margin-bottom: 1vh;
  }
`;

const StyledLinkButton = styled(LinkButton)`
  margin-top: 50px;
`;
