import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

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
        onChange={() => {
          const images = Array.from(input?.current?.files);
          images.forEach((item) => {
            item.id = uuid();
          });

          setImages([...images]);
        }}
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
