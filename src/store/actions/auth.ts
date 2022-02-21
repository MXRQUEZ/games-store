import { Action } from "redux";
import IUser from "@/types/iUser";
import { AuthActionType, IAuthAction } from "@/store/types/auth";

export const signIn = (userData: IUser): IAuthAction => ({
  type: AuthActionType.SIGN_IN,
  payload: userData,
});

export const signOut = (): Action => ({
  type: AuthActionType.SIGN_OUT,
});
