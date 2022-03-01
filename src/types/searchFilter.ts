import { Ages, Criteria, Genres, Types } from "@/constants/searchFilterEnums";

export interface ISearchFilterValues {
  criteria?: Criteria;
  type?: Types;
  genres?: Genres;
  age?: Ages;
}

export const initialSearchbarFilterValues = {
  genres: Genres.All,
  age: Ages.All,
  criteria: Criteria.Name,
  type: Types.Ascending,
};
