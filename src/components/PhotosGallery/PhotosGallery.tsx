import type { Photo } from "../../types/photo";
import Grid from "../Grid/Grid";
import PhotosGalleryItem from "../PhotosGalleryItem/PhotosGalleryItem";
import GridItem from "../GridItem/GridItem";

interface PhotosGalleryProps {
  images: Photo[];
  onImageClick: (image: Photo) => void;
}

export default function PhotosGallery({
  images,
  onImageClick,
}: PhotosGalleryProps) {
  return (
    <Grid>
      {images.map((item) => (
        <GridItem key={item.id}>
          <PhotosGalleryItem image={item} onImageClick={onImageClick} />
        </GridItem>
      ))}
    </Grid>
  );
}
