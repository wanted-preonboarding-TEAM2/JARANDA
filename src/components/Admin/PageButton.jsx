import styled from '@emotion/styled';

function PageButton({ page, setCurrentPage }) {

  const handleClickButton = () => {
    setCurrentPage(page);
  }

  return (
    <PageButtonContainer>
      <StyledButton onClick={handleClickButton}>
        {page}
      </StyledButton>
    </PageButtonContainer>
  )
}

const PageButtonContainer = styled.li``

const StyledButton = styled.button`
  width: 40px;
  height: 40px;
  color: #555555;
  font-size: 14px;
`

export default PageButton;
