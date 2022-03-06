import { ISearchFilterParams } from "@/types/iSearchFilter";
import { Ages, Genres, SortBy, Types } from "@/constants/searchFilters";

export const initialFilterParams: ISearchFilterParams = {
  age: Ages.All,
  genre: Genres.All,
  sortBy: SortBy.Name,
  type: Types.Ascending,
};

export const homeFilterParams: ISearchFilterParams = {
  age: Ages.All,
  genre: Genres.All,
  sortBy: SortBy.Date,
  type: Types.Descending,
  amount: "3",
};
