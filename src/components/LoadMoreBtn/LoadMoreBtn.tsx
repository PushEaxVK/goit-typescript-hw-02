import s from './LoadMoreBtn.module.css';

type LoadMoreBtnProps = {
  loadMore: () => void;
};

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
