import styled from '@emotion/styled';

function PageButton({ page, setCurrentPage, isActive }) {
  const handleClickButton = () => {
    setCurrentPage(page);
  };

  return (
    <PageButtonContainer isActive={isActive}>
      <StyledButton onClick={handleClickButton} isActive={isActive}>
        {page}
      </StyledButton>
    </PageButtonContainer>
  );
}

const PageButtonContainer = styled.li`
  background-color: ${props => props.isActive && '#AAC14F'};
  border-radius: 10px;
  height: 40px;
`;

const StyledButton = styled.button`
  width: 40px;
  height: 40px;
  color: ${props => (props.isActive ? '#ffffff' : '#333333')};
  font-weight: ${props => props.isActive && '900'};
  font-size: 14px;
  :hover {
    cursor: pointer;
  }
`;

export default PageButton;
