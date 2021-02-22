import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as CloseIcon } from '../../assets/images/icons/close-cion.svg';

import styles from './Modal.module.scss';

const Modal = ({
  children,
  onClose,
}) => {
  return (
    <div className={styles.modal}>
      <button 
        className={styles['modal__bg']}
        onClick={onClose}
      />
      <div className={styles['modal__content']}>
        <button
          className={styles['modal__content-close-btn']}
          onClick={onClose}
        >
          <CloseIcon className={styles['modal__content-close-btn-icon']} />
        </button>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default Modal;
