import style from "./ImageCard.module.css";
import { Image } from "../App/App.types";
type ImageCardProps = {
  image: Image;
  onOpenModal: (image: Image) => void;
};

export const ImageCard: React.FC<ImageCardProps> = ({ image, onOpenModal }) => {
  return (
    <div className={style.itemImg}>
      <img
        onClick={() => onOpenModal(image)}
        src={image.urls.small_s3}
        alt={image.description || "Image"}
        className={style.galleryImg}
      />
    </div>
  );
};
