import React from 'react';
import { StyledModal, StyledOverlay } from './Modal.styled';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onCloseModal();
    }
  };

  componentDidMount() {
    console.log('Модалка успішно змонтована!');
    window.addEventListener('keudown', this.handleKeyDown);
  }

  componentWillUnmount() {
    console.log('Модалка видалена!');
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return (
      <StyledOverlay onClick={this.handleOverlayClick}>
        <StyledModal>
          <button onClick={this.props.onCloseModal}>&times;</button>
          <br />
          {JSON.stringify(this.props.visibleData, null, 7)}
          Modal
        </StyledModal>
      </StyledOverlay>
    );
  }
}

Modal.propTypes = {
  visibleData: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  onCloseModal: PropTypes.func.isRequired,
};
export default Modal;
