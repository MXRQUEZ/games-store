import { Ages, Criteria, Genres, Types } from "@/constants/searchFilterEnums";

export interface ISearchFilterValues {
  criteria?: string;
  type?: string;
  genre: string;
  age: string;
}

export const initialSearchbarFilterValues = {
  genres: Genres.All,
  age: Ages.All,
  criteria: Criteria.Name,
  type: Types.Ascending,
};
