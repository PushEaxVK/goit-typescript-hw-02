import { useEffect } from 'react';
import s from './ImageModal.module.css';
import Modal from 'react-modal';

type ImageModalProps = {
  modalUrl: string;
  setModal: React.Dispatch<React.SetStateAction<string>>;
};

const ImageModal: React.FC<ImageModalProps> = ({
  modalUrl,
  setModal,
}: ImageModalProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setModal('');
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [setModal]);

  return (
    <div className={s.modal}>
      <Modal
        isOpen={modalUrl !== ''}
        onRequestClose={() => setModal('')}
        contentLabel="Big image"
        shouldCloseOnOverlayClick={true}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0, 0, 0, 75%)',
          },
        }}
      >
        <div>
          <img src={modalUrl} />
        </div>
        <button
          onClick={() => setModal('')}
          type="button"
          style={{ position: 'fixed', top: '1rem', right: '1rem' }}
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default ImageModal;
