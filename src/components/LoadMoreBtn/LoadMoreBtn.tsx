import style from "./LoadMoreBtn.module.css";

interface LoadMoreProps {
  onClick: () => void;
  loadMoreRef: React.RefObject<HTMLButtonElement>;
}

export const LoadMoreBtn: React.FC<LoadMoreProps> = ({
  onClick,
  loadMoreRef,
}) => {
  return (
    <button onClick={onClick} className={style.loadMoreBtn} ref={loadMoreRef}>
      Load more
    </button>
  );
};
