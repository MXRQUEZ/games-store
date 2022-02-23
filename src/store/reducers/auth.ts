import { AuthActionType, IAuthAction, IAuthState, userKey } from "@/store/types/auth";

const isAuth = !!localStorage.getItem(userKey);
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const user: string | null = isAuth ? JSON.parse(localStorage.getItem(userKey)!) : null;
const authInitialState: IAuthState = {
  isAuth,
  user,
};

// eslint-disable-next-line default-param-last
const authReducer = (state: IAuthState = authInitialState, action: IAuthAction): IAuthState => {
  switch (action.type) {
    case AuthActionType.SIGN_IN:
      localStorage.setItem(userKey, JSON.stringify(action.payload));
      return { ...state, isAuth: true, user: action.payload };
    case AuthActionType.SIGN_OUT:
      localStorage.removeItem(userKey);
      return { ...state, isAuth: false, user: null };

    default:
      return state;
  }
};

export default authReducer;
