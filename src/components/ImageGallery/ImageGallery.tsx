import { Image } from "../App/App.types";
import { ImageCard } from "../ImageCard/ImageCard";
import style from "./ImageGallery.module.css";

type ImageGalleryProps = {
  images: Image[];
  onOpenModal: (image: Image) => void;
};

export const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  onOpenModal,
}) => {
  return (
    <ul className={style.gallery}>
      {images.length > 0 ? (
        images.map((image) => (
          <li key={image.id} className={style.galleryItem}>
            <ImageCard image={image} onOpenModal={onOpenModal} />
          </li>
        ))
      ) : (
        <p>
          Images are not available yet. Please fill in the search field to
          display them
        </p>
      )}
    </ul>
  );
};
