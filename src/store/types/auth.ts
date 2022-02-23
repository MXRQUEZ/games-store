import { Action } from "redux";

export interface IAuthState {
  isAuth: boolean;
  user: string | null;
}

export interface IAuthAction extends Action {
  type: string;
  payload: string | null;
}

export enum AuthActionType {
  SIGN_IN = "SIGN_IN",
  SIGN_OUT = "SIGN_OUT",
}

export const userKey = "user";
