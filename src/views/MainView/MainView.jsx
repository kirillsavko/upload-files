import React, { useState } from 'react';

import ImageCard from '../../components/ImageCard';
import ButtonUpload from '../../components/Buttons/ButtonUpload';
import Button from '../../components/Buttons/Button';
import Modal from '../../components/Modal';

import styles from './MainView.module.scss';

const MainView = ({
  storage,
}) => {
  const [images, setImages] = useState([]);
  const [isActiveModal, setIsActiveModal] = useState(false);

  const deleteImage = (fileIndex) => {
    const updatedImages = [...images];
    updatedImages.splice(fileIndex, 1);
    setImages([...updatedImages]);
  };

  const uploadFiles = () => {
    Promise.all(images.map((image) => storage.ref(`images/${image.name}`).put(image)))
      .then(() => setIsActiveModal(true));
  };

  return (
    <>
      {isActiveModal && (
        <Modal onClose={() => {
          setImages([]);
          setIsActiveModal(false);
        }}>
          Все картинки успешно загружены!
        </Modal>
      )}
      <div className={styles.wrapper}>
        <div className={styles['wrapper-buttons']}>
          <ButtonUpload
            isMulti
            setImages={setImages}
          >
            Открыть
          </ButtonUpload>
          {images.length !== 0 && (
            <Button
              onClick={uploadFiles}
            >
              Загрузить
            </Button>
          )}
        </div>
        {images.length !== 0 && (
          <div className={styles['wrapper-images']}>
            {images.map((file, fileIndex) => (
              <div 
                key={file.id}
                className={styles['wrapper-images__item']}
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
    </>
  );
};

export default MainView;
