import { ISearchFilterValues } from "@/types/iSearchFilter";

export enum Genres {
  All = "All",
  Shooter = "Shooter",
  Sandbox = "Sandbox",
  RPG = "RPG",
  Action = "Action",
  Simulator = "Simulator",
}

export enum Ages {
  All = 0,
  Three = 3,
  Six = 6,
  Twelve = 12,
  Sixteen = 16,
  Eighteen = 18,
}

export enum Criteria {
  Name = "name",
  Rating = "rating",
  Price = "price",
}

export enum Types {
  Ascending = "ascending",
  Descending = "descending",
}

export const initialFilterParams: ISearchFilterValues = {
  age: "0+",
  genre: "All",
  sortBy: "Name",
  type: "Ascending",
};
