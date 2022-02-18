import { Action, Dispatch } from "redux";
import IUser from "@/types/iUser";
import { AuthActionType, IAuthAction } from "@/store/types/auth";
import { authorize } from "@/shared/utils/apiRequests";

export const signIn =
  (userData: IUser) =>
  async (dispatch: Dispatch<IAuthAction>): Promise<boolean> => {
    const isAuth = await authorize(userData);
    isAuth && dispatch({ type: AuthActionType.SIGN_IN, payload: userData });
    return isAuth;
  };

export const signUp = (userData: IUser): IAuthAction => ({
  type: AuthActionType.SIGN_IN,
  payload: userData,
});

export const signOut = (): Action => ({
  type: AuthActionType.SIGN_OUT,
});
