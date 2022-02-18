import { Action, Dispatch } from "redux";
import IUser from "@/types/iUser";
import { IAuthAction } from "@/store/types/auth";
import { authorize } from "@/shared/utils/apiRequests";
import { SIGN_IN, SIGN_OUT } from "@/store/constants/auth";

export const signIn = (userData: IUser) => async (dispatch: Dispatch<IAuthAction>) => {
  const isAuth = await authorize(userData);
  isAuth && dispatch({ type: SIGN_IN, payload: userData });
};

export const signUp = (userData: IUser): IAuthAction => ({
  type: SIGN_IN,
  payload: userData,
});

export const signOut = (): Action => ({
  type: SIGN_OUT,
});
