import { Ages, Genres, SortBy, Types } from "@/constants/searchFilters";

export interface ISearchFilterParams {
  sortBy: SortBy;
  type: Types;
  genre: Genres;
  age: Ages;
  amount?: string;
}
