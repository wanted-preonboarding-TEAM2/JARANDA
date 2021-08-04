import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

export const ModalDeemed = styled.div`
  display: ${props => (props.show ? 'flex' : 'none')};
  background-color: rgba(200, 200, 200, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.modalRef = createRef();
  }
  handleClick = e => {
    const { closeWhenClickOutside } = this.props;
    if (closeWhenClickOutside && e.target === this.modalRef.current) {
      this.props.closeModal();
    }
  };
  render() {
    const { show } = this.props;
    return (
      <ModalDeemed ref={this.modalRef} onClick={this.handleClick} show={show}>
        {this.props.children}
      </ModalDeemed>
    );
  }
}

Modal.propTypes = {
  show: PropTypes.bool,
  closeModal: PropTypes.func,
};
