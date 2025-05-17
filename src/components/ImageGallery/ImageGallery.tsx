import s from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';
import { ImageObject } from '../../services/unsplashApi.types';
import React from 'react';

type Props = {
  images: ImageObject[];
  setModal: React.Dispatch<React.SetStateAction<string>>;
};

const ImageGallery = ({ images, setModal }: Props) => {
  const handleClick = (
    e: React.MouseEvent<HTMLUListElement, MouseEvent>
  ): void => {
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
