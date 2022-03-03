import { ISearchFilterParams } from "@/types/iSearchFilter";
import { Ages, Genres, SortBy, Types } from "@/constants/searchFilters";

const initialFilterParams: ISearchFilterParams = {
  age: Ages.All,
  genre: Genres.All,
  sortBy: SortBy.Name,
  type: Types.Ascending,
};

export default initialFilterParams;
