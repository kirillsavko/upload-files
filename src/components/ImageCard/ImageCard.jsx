import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { toBase64 } from '../../utils';

import styles from './ImageCard.module.scss';

const ImageCard = ({
  file,
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
    </div>
  );
};

ImageCard.propTypes = {
  file: PropTypes.object.isRequired,
}

export default ImageCard;
