export interface ServerImage {
  alt_description: string;
  blur_hash: string;
  color: string;
  urls: {
    small: string;
    regular: string;
  };
  id: string;
}

export interface ImageObject {
  alt: string;
  blurHash: string;
  color: string;
  small: string;
  regular: string;
  id: string;
}

export interface ServerResponse {
  results: ServerImage[];
  total: number;
  total_pages: number;
}

export interface SearchParams {
  query: string;
  client_id: string;
  per_page: number;
  page: number;
  orientation: 'landscape' | 'portrait' | 'squarish';
}
