import Modal from "react-modal";
import style from "./ImageModal.module.css";
import { Image } from "../App/App.types";

type ImageModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  image: Image | null;
};

export const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onRequestClose,
  image,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      className={style.modal}
      overlayClassName={style.overlay}
    >
      {image ? (
        <img
          src={image.urls.regular}
          alt={image.description || "ImageUrl"}
          className={style.img}
        />
      ) : (
        <p>No image available</p>
      )}
    </Modal>
  );
};
