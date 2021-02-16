import React, { useState, useEffect } from 'react';

import ImageCard from '../../components/ImageCard';
import ButtonUpload from '../../components/Buttons/ButtonUpload';

import styles from './MainView.module.scss';

const MainView = () => {
  const [images, setImages] = useState([]);

  const deleteImage = (fileIndex) => {
    const updatedImages = [...images];
    updatedImages.splice(fileIndex, 1);
    setImages([...updatedImages]);
  };

  useEffect(() => {
    console.log(images);
  }, [images, images.length]);

  return (
    <div className={styles.wrapper}>
      <ButtonUpload
        isMulti
        setImages={setImages}
      >
        Открыть
      </ButtonUpload>
      {images.length !== 0 && (
        <div className={styles.images}>
          {images.map((file, fileIndex) => (
            <div 
              key={file.id}
              className={styles['images__item']}
            >
              <ImageCard
                file={file}
                onClose={() => deleteImage(fileIndex)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MainView;
