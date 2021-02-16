import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { toBase64, convertBytes } from '../../utils';

import { ReactComponent as CloseIcon } from '../../assets/images/icons/close-cion.svg';

import styles from './ImageCard.module.scss';

const ImageCard = ({
  file,
  onClose,
}) => {
  const [src, setSrc] = useState(null);

  useEffect(() => {
    toBase64(file)
      .then((res) => {
        setSrc(res);
      })
      .catch(() => {});
  }, [file]);

  return (
    <div className={styles['image-card']}>
      <img src={src} alt=''/>
      <button
        onClick={onClose}
        className={styles['image-card__close']}
      >
        <CloseIcon />
      </button>
      <div className={styles['image-card__controls']}>
        <span>
          {file?.name}
        </span>
        <span>
          {convertBytes(file?.size)}
        </span>
      </div>
    </div>
  );
};

ImageCard.propTypes = {
  file: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default ImageCard;
