import style from "./ErrorMessage.module.css";

export const ErrorMessage: React.FC = () => {
  return (
    <p className={style.error}>
      An error occurred while fetching images. Please try again.
    </p>
  );
};
