import axios from 'axios';
import type {
  ImageObject,
  ServerResponse,
  ServerImage,
  SearchParams,
} from './unsplashApi.types';

const API = {
  BASE: 'https://api.unsplash.com/',
  SEARCH: 'search/photos',
  ACCESS_KEY: 'Vi2cAjvUvW27MVDBGg5H1AuSeD0n18wgJJaMXF67vcI',
};

axios.defaults.baseURL = API.BASE;

export const getImages = async (
  query: string,
  page: number,
  signal: AbortSignal
): Promise<[ImageObject[], number]> => {
  const params: SearchParams = {
    query,
    client_id: API.ACCESS_KEY,
    per_page: 12,
    page,
    orientation: 'landscape',
  };
  const response = await axios.get<ServerResponse>(API.SEARCH, {
    params,
    signal,
  });
  const results: ServerImage[] = response.data?.results ?? [];
  const newImages: ImageObject[] = results.map(
    (image: ServerImage): ImageObject => {
      return {
        alt: image.alt_description,
        blurHash: image.blur_hash,
        color: image.color,
        small: image.urls.small,
        regular: image.urls.regular,
        id: image.id,
      };
    }
  );
  const total_pages: number = response.data?.total_pages;
  return [newImages, total_pages];
};
