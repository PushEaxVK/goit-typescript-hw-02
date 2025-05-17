import { ImageObject } from '../../services/unsplashApi.types';
import { Dispatch, SetStateAction } from 'react';

export type ImageGalleryProps = {
  images: ImageObject[];
  setModal: Dispatch<SetStateAction<string>>;
};

export type ImageClickEvent = React.MouseEvent<HTMLUListElement, MouseEvent>;
