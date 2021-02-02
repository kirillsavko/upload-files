import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import styles from './ButtonUpload.module.scss';

const ButtonUpload = ({
  setImages,
  children,
  isMulti,
}) => {
  const input = useRef(null);

  const onClick = () => {
    input?.current.click();
  };

  return (
    <>
      <input
        type='file'
        ref={input}
        multiple={isMulti}
        onChange={() => setImages(Array.from(input?.current?.files))}
        accept='image/jpeg,image/png,image/jpg,image/gif'
      />
      <button 
        onClick={onClick}
        className={styles['btn_upload']}
      >
        {children}
      </button>
    </>
  );
};

ButtonUpload.propTypes = {
  setImages: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  isMulti: PropTypes.bool,
}

ButtonUpload.defaultProps = {
  isMulti: false,
}

export default ButtonUpload;
