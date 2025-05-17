import s from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';
import React from 'react';
import { ImageClickEvent, ImageGalleryProps } from './ImageGallery.types';

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  setModal,
}: ImageGalleryProps) => {
  const handleClick = (e: ImageClickEvent): void => {
    const target = e.target as HTMLElement;
    if (target.nodeName === 'IMG') {
      if (target.dataset.src) {
        setModal(target.dataset.src);
      }
    }
  };

  return (
    <div className={s.gallery}>
      <ul className={s.imagesList} onClick={handleClick}>
        {images.map((image) => (
          <li key={image.id}>
            <ImageCard image={image} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
