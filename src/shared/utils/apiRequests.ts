import axios from "axios";
import ICategory from "@/types/iCategory";
import IParams from "@/types/iParams";
import IProduct from "@/types/iProduct";
import api from "@/environment/api";
import buildQueryParams from "./helpers/buildQueryParams";
import IUser from "@/types/iUser";

export const getCategories = async (): Promise<ICategory[]> => {
  const response = await axios.get(`${api.categories}`);
  return response.data;
};

export const getProducts = async (params: IParams = {}): Promise<IProduct[]> => {
  const response = await axios.get(`${api.products}${buildQueryParams(params)}`);
  return response.data;
};

export const getHomeProducts = async (): Promise<IProduct[]> => {
  const params: IParams = { amount: "3", sortBy: "date" };
  const response = await axios.get(`${api.products}${buildQueryParams(params)}`);
  return response.data;
};

export const getProductsByCategoryName = async (categoryName: IParams = {}): Promise<IProduct[]> => {
  const response = await axios.get(`${api.products}${buildQueryParams(categoryName)}`);
  console.log(`${api.products}${buildQueryParams(categoryName)}`);
  return response.data;
};

export const getUserById = async (user: IParams = {}): Promise<IUser> => {
  const response = await axios.get(`${api.profile}${buildQueryParams(user)}`);
  return response.data;
};

export const authorize = async (userData: IUser): Promise<IUser | null> => {
  const response = await fetch(`${api.authSignIn}`, { method: "POST", body: JSON.stringify(userData) });
  return response.json();
};

export const createUser = async (userData: IUser): Promise<IUser | null> => {
  const response = await fetch(`${api.authSignUp}`, { method: "PUT", body: JSON.stringify(userData) });
  return response.json();
};

export const changePassword = async (userData: Pick<IUser, "id" | "password">): Promise<void> => {
  const response = await fetch(`${api.changePassword}`, { method: "POST", body: JSON.stringify(userData) });
  return response.json();
};

export const saveProfile = async (userData: Omit<IUser, "login" | "password">): Promise<IUser> => {
  const response = await fetch(`${api.saveProfile}`, { method: "POST", body: JSON.stringify(userData) });
  return response.json();
};
