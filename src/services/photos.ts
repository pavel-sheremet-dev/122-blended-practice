import axios from "axios";
import { type Photo } from "../types/photo";

const API_KEY = "563492ad6f9170000100000108dc2880626e4436b3634ce1cf6b4d74";
// axios.defaults.baseURL = "https://api.pexels.com/v1/";
// axios.defaults.headers.common["Authorization"] = API_KEY;
// axios.defaults.params = {
//   orientation: "landscape",
// };

const api = axios.create({
  baseURL: "https://api.pexels.com/v1/",
  headers: {
    Authorization: API_KEY,
  },
  params: {
    orientation: "landscape",
  },
});

interface ResponseData {
  photos: Photo[];
}

export const getPhotos = async (query: string, page: number = 1) => {
  // try {
  const { data } = await api.get<ResponseData>(
    `search?query=${query}&page=${page}`
  );

  return data.photos;
  // } catch (error) {
  //   if (isAxiosError(error)) {
  //     if (error.status === 401) {
  //       console.log("not valid API_KEY");
  //       return [];
  //     }
  //     throw error;
  //   }
  //   return [];
  // }
};
