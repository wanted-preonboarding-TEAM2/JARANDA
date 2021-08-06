import Modal from 'modal/Modal';
import styled from '@emotion/styled';
import SignUpForm from 'components/signup/Form';
import { IoIosClose } from 'react-icons/io';

const SignupModal = ({ isModalShow, closeModal, handleAddUser }) => {
  return (
    <Modal show={isModalShow}>
      {isModalShow && (
        <FormContainer>
          <CloseBtnContainer onClick={closeModal}>
            <IoIosClose />
          </CloseBtnContainer>
          <SignUpForm
            isModal={true}
            closeModal={closeModal}
            handleAddUser={handleAddUser}
          />
        </FormContainer>
      )}
    </Modal>
  );
};

export default SignupModal;

const CloseBtnContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 30px;
  cursor: pointer;
`;

const FormContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  box-shadow: rgb(0 0 0 / 10%) 0px 3px 6px 0px;
  box-shadow: none;
  background-color: white;

  @media screen and (max-height: 800px) {
    height: 600px;
    overflow-y: scroll;
  }
`;
