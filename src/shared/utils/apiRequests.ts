import axios from "axios";
import IParams from "@/types/iParams";
import IProduct from "@/types/iProduct";
import api from "@/environment/api";
import buildQueryParams from "./helpers/buildQueryParams";
import IUser from "@/types/iUser";
import { homeFilterParams } from "@/constants/initialFilterParams";

export const getProducts = async (params: IParams = {}): Promise<IProduct[]> => {
  const response = await axios.get(`${api.products}${buildQueryParams(params)}`);
  return response.data;
};

export const getHomeProducts = async (): Promise<IProduct[]> => {
  const response = await axios.get(`${api.products}${buildQueryParams({ ...homeFilterParams })}`);
  return response.data;
};

export const getUserById = async (user: IParams = {}): Promise<IUser | null> => {
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

export const createProduct = async (product: IProduct): Promise<IProduct | null> => {
  const response = await fetch(`${api.products}`, { method: "POST", body: JSON.stringify(product) });
  return response.json();
};

export const updateProduct = async (product: IProduct): Promise<IProduct> => {
  const response = await fetch(`${api.products}`, { method: "PUT", body: JSON.stringify(product) });
  return response.json();
};

export const removeProduct = async (id: string | number): Promise<void> => {
  await axios.delete(`${api.products}/${id}`);
};
