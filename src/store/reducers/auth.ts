import { AuthActionType, IAuthAction, IAuthState, userKey } from "@/store/types/auth";

const authInitialState: IAuthState = {
  isAuth: !!localStorage.getItem(userKey),
  user: null,
};

// eslint-disable-next-line default-param-last
const authReducer = (state: IAuthState = authInitialState, action: IAuthAction): IAuthState => {
  switch (action.type) {
    case AuthActionType.SIGN_IN:
      localStorage.setItem(userKey, JSON.stringify(action.payload?.id));
      return { ...state, isAuth: true, user: action.payload };
    case AuthActionType.SIGN_UP:
      localStorage.setItem(userKey, JSON.stringify(action.payload?.id));
      return { ...state, isAuth: true, user: action.payload };
    case AuthActionType.SIGN_OUT:
      localStorage.removeItem(userKey);
      return { ...state, isAuth: false, user: null };

    default:
      return state;
  }
};

export default authReducer;
