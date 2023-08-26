import React, { useState } from 'react';
import { StyledModal, StyledOverlay } from './Modal.styled';
import PropTypes from 'prop-types';

const Modal = ({ visibleData, onCloseModal }) => {
  const [dataType, setDataType] = useState('emails');
  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      onCloseModal();
    }
  };

  const handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      onCloseModal();
    }
  };
  const onSetDataType = newDataType => {
    setDataType(newDataType);
  };
  // componentDidMount() {
  //   console.log('Модалка успішно змонтована!');
  //   window.addEventListener('keudown', this.handleKeyDown);
  // }

  // componentWillUnmount() {
  //   console.log('Модалка видалена!');
  //   window.removeEventListener('keydown', this.handleKeyDown);
  // }

  return (
    <StyledOverlay onClick={handleOverlayClick}>
      <StyledModal>
        <button className="close-modal" onClick={onCloseModal}>
          &times;
        </button>
        <br />
        <div>
          <button
            className={`tab-btn ${dataType === 'emails' ? 'active' : ''}`}
            onClick={() => onSetDataType('emails')}
            type="button"
          >
            Emails
          </button>
          <br />
          <button
            className={`tab-btn ${dataType === 'users' ? 'active' : ''}`}
            onClick={() => onSetDataType('users')}
            type="button"
          >
            Users
          </button>
        </div>
        <h2>Active DataType: {dataType}</h2>
        {dataType === 'emails' && (
          <ul>
            {Array.isArray(visibleData) &&
              visibleData.map(comment => (
                <li key={comment.id}>{comment.email}</li>
              ))}{' '}
          </ul>
        )}
        {dataType === 'users' && (
          <ul>
            {Array.isArray(visibleData) &&
              visibleData.map(comment => (
                <li key={comment.id}>{comment.name}</li>
              ))}{' '}
          </ul>
        )}

        {/* {JSON.stringify(visibleData, null, 7)} */}
        {/* Modal */}
      </StyledModal>
    </StyledOverlay>
  );
};

Modal.propTypes = {
  visibleData: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  onCloseModal: PropTypes.func.isRequired,
};
export default Modal;
