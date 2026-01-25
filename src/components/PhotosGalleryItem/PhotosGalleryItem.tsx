import type { Photo } from "../../types/photo";

import styles from "./PhotosGalleryItem.module.css";

interface PhotosGalleryItemProps {
  image: Photo;
  onImageClick: (image: Photo) => void;
}

export default function PhotosGalleryItem({
  image,
  onImageClick,
}: PhotosGalleryItemProps) {
  const handleClick = () => onImageClick(image);

  return (
    <div
      onClick={handleClick}
      className={styles.thumb}
      style={{
        backgroundColor: image.avg_color,
        borderColor: image.avg_color,
      }}
    >
      <img src={image.src.large} alt={image.alt} />
    </div>
  );
}
