import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

import styles from './Gallery.module.scss';

const Gallery = ({
  images,
}) => {
  const [updatedImages, setUpdatedImages] = useState([]);

  useEffect(() => {
    setUpdatedImages(
        images.map((item) => ({
        id: uuid(),
        path: item,
      }))
    );
  }, []);

  return (
    <div className={styles.gallery}>
      {(updatedImages?.length > 0) && (
        updatedImages.map((item) => (
          <div key={item.id} className={styles['gallery__item']}>
            <img src={item.path} alt=''/>
          </div>
        ))
      )}
    </div>
  );
};

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Gallery;
