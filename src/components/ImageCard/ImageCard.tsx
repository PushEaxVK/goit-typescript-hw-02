import s from './ImageCard.module.css';
import { ImageObject } from '../../services/unsplashApi.types';

type Props = {
  image: ImageObject;
};

const ImageCard = ({ image }: Props) => {
  return (
    <div className={s.imageWrapper} style={{ backgroundColor: image.color }}>
      <img
        className={s.image}
        src={image.small}
        alt={image.alt}
        data-src={image.regular}
      />
    </div>
  );
};

export default ImageCard;
