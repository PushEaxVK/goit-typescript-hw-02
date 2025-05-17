import s from './LoadMoreBtn.module.css';
import { LoadMoreBtnProps } from './LoadMoreBtn.types';

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({
  loadMore,
}: LoadMoreBtnProps) => {
  return (
    <div className={s.loadMore}>
      <button type="button" onClick={loadMore}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
