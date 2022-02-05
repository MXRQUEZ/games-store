import axios from "axios";
import ICategory from "@/types/iCategory";
import IParams from "@/types/iParams";
import IProduct from "@/types/iProduct";
import api from "@/environment/api";
import buildParams from "./helpers/buildParams";

export const getCategories = async (): Promise<ICategory[]> => {
  const response = await axios.get(`${api.categories}`);
  return response.data;
};

export const getProducts = async (params: IParams = {}): Promise<IProduct[]> => {
  const response = await axios.get(`${api.products}${buildParams(params)}`);
  return response.data;
};

export const getProductsByCategoryName = async (categoryName: string): Promise<IProduct[]> => {
  const response = await axios.get(`${api.products}?category=${categoryName}`);
  return response.data;
};
