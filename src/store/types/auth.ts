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
