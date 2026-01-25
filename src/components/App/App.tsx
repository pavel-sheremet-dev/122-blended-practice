import Section from "../Section/Section";
import Container from "../Container/Container";
import Form from "../Form/Form";
import Text from "../Text/Text";
import PhotosGallery from "../PhotosGallery/PhotosGallery";
import { useState } from "react";
import { getPhotos } from "../../services/photos";
import type { Photo } from "../../types/photo";
import { Toaster } from "react-hot-toast";
import Loader from "../Loader/Loader";
import Modal from "../Modal/Modal";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export default function App() {
  // const [images, setImages] = useState<Photo[]>([]);
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [isError, setIsError] = useState<boolean>(false);

  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const {
    data: images,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["photo", query, page],
    queryFn: () => getPhotos(query, page),
    enabled: Boolean(query),
    placeholderData: keepPreviousData,
  });

  const [selectedPhoto, setSelectedPhoto] = useState<null | Photo>(null);
  // const [query, setState] = useState<string>("");

  const getModalImage = (image: Photo) => {
    setSelectedPhoto(image);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  const getQuery = async (q: string) => {
    setQuery(q);
    setPage(1);
  };

  const onPageChange = (formData: FormData) => {
    const page = formData.get("page") as string;
    setPage(Number(page));
  };

  return (
    <>
      <Section>
        <Container>
          <Form onSubmit={getQuery} />
          <form action={onPageChange}>
            <input type="number" name="page" defaultValue={page} />
            <button type="submit">OK</button>
          </form>
          {images && images.length > 0 && (
            <PhotosGallery images={images} onImageClick={getModalImage} />
          )}
          {isLoading && <Loader />}
          {isError && <Text>Something went wrong</Text>}
          {selectedPhoto && (
            <Modal closeModal={closeModal}>
              <img src={selectedPhoto.src.original} alt={selectedPhoto.alt} />
            </Modal>
          )}
        </Container>
      </Section>
      <Toaster />
    </>
  );
}
