import React, { useState, useEffect } from 'react';

import ImageCard from '../../components/ImageCard';
import ButtonUpload from '../../components/Buttons/ButtonUpload';
import Button from '../../components/Buttons/Button';
import Modal from '../../components/Modal';
import Gallery from '../../components/Gallery';

import styles from './MainView.module.scss';

const MainView = ({
  storage,
}) => {
  const [imagesToUpload, setImagesToUpload] = useState([]);
  const [fetchedImages, setFetchedImages] = useState([]);
  const [isActiveModal, setIsActiveModal] = useState(false);

  const uploadFiles = () => {
    Promise.all(imagesToUpload.map((image) => storage.ref(`images/${image.name}`).put(image)))
      .then(() => setIsActiveModal(true));
  };

  const deleteImage = (fileIndex) => {
    const updatedImages = [...imagesToUpload];
    updatedImages.splice(fileIndex, 1);
    setImagesToUpload([...updatedImages]);
  };

  const fetchImages = () => {
    return storage.ref('images').listAll()
      .then((res) => {
        return Promise.all(res.items.map((itemRef) => {
          return itemRef.getDownloadURL().then((response) => response);
        }));
      });
  };

  useEffect(() => {
    fetchImages()
      .then((res) => {
        setFetchedImages(res);
      });
  }, []);

  return (
    <>
      {isActiveModal && (
        <Modal onClose={() => {
          fetchImages()
            .then((res) => {
              setFetchedImages(res);
            });;

          setImagesToUpload([]);
          setIsActiveModal(false);
        }}>
          Все картинки успешно загружены!
        </Modal>
      )}
      <div className={styles.wrapper}>
        <div className={styles['wrapper-buttons']}>
          <ButtonUpload
            isMulti
            setImages={setImagesToUpload}
          >
            Открыть
          </ButtonUpload>
          {imagesToUpload.length !== 0 && (
            <Button
              onClick={uploadFiles}
            >
              Загрузить
            </Button>
          )}
        </div>
        {imagesToUpload.length !== 0 && (
          <div className={styles['wrapper-images']}>
            {imagesToUpload.map((file, fileIndex) => (
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
      {(fetchedImages.length > 0) && (
        <div className={styles['images-uploaded']}>
          <h1 className={styles['images-uploaded__title']}>
            Загруженные картинки
          </h1>
          <Gallery images={fetchedImages} />
        </div>
      )}
    </>
  );
};

export default MainView;
