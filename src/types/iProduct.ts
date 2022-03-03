import { Ages, Genres } from "@/constants/searchFilters";

interface IProduct {
  name: string;
  id: string | number;
  ageRating: Ages;
  genre: Genres;
  price: number;
  rating: number;
  description: string;
  categoriesId: (string | number)[];
  img: string;
  date: Date;
}

export default IProduct;
