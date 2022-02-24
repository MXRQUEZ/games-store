import { Action } from "redux";
import IUser from "@/types/iUser";

export interface IAuthState {
  isAuth: boolean;
  user: IUser | null;
}

export interface IAuthAction extends Action {
  type: string;
  payload: IUser | null;
}

export enum AuthActionType {
  SIGN_IN = "SIGN_IN",
  SIGN_UP = "SIGN_UP",
  SIGN_OUT = "SIGN_OUT",
}

export const userKey = "user";
