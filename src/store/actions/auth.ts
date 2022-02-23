import { Action } from "redux";
import { AuthActionType, IAuthAction } from "@/store/types/auth";

export const signIn = (userData: string): IAuthAction => ({
  type: AuthActionType.SIGN_IN,
  payload: userData,
});

export const signOut = (): Action => ({
  type: AuthActionType.SIGN_OUT,
});
