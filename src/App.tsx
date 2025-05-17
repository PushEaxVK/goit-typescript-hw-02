import { useEffect, useState } from 'react';
import css from './App.module.css';
import { getImages } from './services/unsplashApi.ts';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageModal from './components/ImageModal/ImageModal';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [images, setImages] = useState<object[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [query, setQuery] = useState<string>('');
  const [modalUrl, setModalUrl] = useState<string>('');

  useEffect(() => {
    const controller: AbortController = new AbortController();
    const signal: AbortSignal = controller.signal;
    const loadImages = async (): Promise<void> => {
      try {
        if (!query) return;
        setLoading(true);
        setError(false);
        const [newImages, pages] = await getImages(query, currentPage, signal);
        if (currentPage === 1) {
          setTotalPages(pages);
        }
        if (newImages.length === 0) {
          setTotalPages(currentPage);
          toast.error('No results!');
        }
        setImages((prev) => [...prev, ...newImages]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    loadImages();

    return () => controller.abort();
  }, [query, currentPage]);

  function handleQuery(query: string): void {
    setImages([]);
    setCurrentPage(1);
    setQuery(query);
  }

  return (
    <div className={css.app}>
      <SearchBar onSubmit={handleQuery} />

      {images.length > 0 && !error && (
        <ImageGallery images={images} setModal={setModalUrl} />
      )}

      {loading && <Loader />}
      {error && <ErrorMessage toast={toast} />}
      {currentPage < totalPages && !error && !loading && (
        <LoadMoreBtn loadMore={() => setCurrentPage((prev) => prev + 1)} />
      )}
      {modalUrl !== '' && (
        <ImageModal modalUrl={modalUrl} setModal={setModalUrl} />
      )}
      <Toaster position="bottom-right" />
    </div>
  );
}

export default App;
