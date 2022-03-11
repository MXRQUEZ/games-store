import getEnumKeys from "@/shared/utils/helpers/getEnumKeys";
import { categories } from "@/constants/categories";

export enum Genres {
  All = "All",
  Shooter = "Shooter",
  Sandbox = "Sandbox",
  RPG = "RPG",
  Action = "Action",
  Simulator = "Simulator",
}

export enum Ages {
  All = "All",
  "3+" = "3+",
  "6+" = "6+",
  "12+" = "12+",
  "16+" = "16+",
  "18+" = "18+",
}

export enum SortBy {
  Name = "Name",
  Rating = "Rating",
  Price = "Price",
  Date = "Date",
}

export enum Types {
  Ascending = "Ascending",
  Descending = "Descending",
}

export const genres = getEnumKeys(Genres);
export const ages = getEnumKeys(Ages);
export const types = getEnumKeys(Types);
export const criteria = getEnumKeys(SortBy);
export const platforms = Object.values(categories);
