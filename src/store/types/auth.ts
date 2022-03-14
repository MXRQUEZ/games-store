import { Action } from "redux";
import IUser from "@/types/iUser";

export interface IAuthState {
  user: IUser | null;
}

export interface IAuthAction extends Action {
  type: string;
  payload: IUser | null;
}

export const enum AuthActionType {
  SIGN_IN = "SIGN_IN",
  SIGN_OUT = "SIGN_OUT",
}

export const userKey = "user";
