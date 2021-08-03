import styled from '@emotion/styled';

const PageButtonContainer = styled.li``

const StyledButton = styled.button`
  border: 1px solid green;
  width: 40px;
  height: 40px;
`

function PageButton({ page, setCurrentPage, getCurrentPageUserInfos }) {

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

export default PageButton;
