import axios from "axios";
import ICategory from "@/types/iCategory";
import IParams from "@/types/iParams";
import IProduct from "@/types/iProduct";
import api from "@/environment/api";
import buildQueryParams from "./helpers/buildQueryParams";

export const getCategories = async (): Promise<ICategory[]> => {
  const response = await axios.get(`${api.categories}`);
  return response.data;
};

export const getProducts = async (params: IParams = {}): Promise<IProduct[]> => {
  const response = await axios.get(`${api.products}${buildQueryParams(params)}`);
  return response.data;
};

export const getHomeProducts = async (): Promise<IProduct[]> => {
  const params = { amount: "3", sortBy: "date" };
  const response = await axios.get(`${api.products}${buildQueryParams(params)}`);
  return response.data;
};

export const getProductsByCategoryName = async (categoryName: IParams = {}): Promise<IProduct[]> => {
  const response = await axios.get(`${api.products}${buildQueryParams(categoryName)}`);
  return response.data;
};
