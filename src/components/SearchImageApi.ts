import axios from "axios";
import { Image } from "./App/App.types";
const accessKey = "Y_DgX2Deb85S77HgPbwRXVSibL_iRp6ahvRU-ECVrdg";

interface SearchImagesResponse {
  images: Image[];
  totalPages: number;
}

export default async function searchPhotos(
  topic: string,
  page: number
): Promise<SearchImagesResponse> {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: `Client-ID ${accessKey}`,
    },
    params: {
      query: topic,
      page,
      per_page: 12,
    },
  });
  return {
    images: response.data.results,
    totalPages: response.data.total_pages,
  };
}
