import { Ages, Genres } from "@/constants/searchFilters";

interface IProduct {
  name: string;
  id: string | number;
  ageRating: Ages;
  genre: Genres;
  price: number;
  rating: number;
  description: string;
  categoriesId: number[];
  img: string;
  date: Date;
}

export default IProduct;
