import { SIGN_IN, SIGN_OUT } from "@/store/constants/auth";
import { IAuthAction, IAuthState } from "@/store/types/auth";
import IUser from "@/types/iUser";

const isAuth = !!localStorage.getItem("user");
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const user: IUser | null = isAuth ? JSON.parse(localStorage.getItem("user")!) : null;
const authInitialState: IAuthState = {
  isAuth,
  user,
};

// eslint-disable-next-line default-param-last
const authReducer = (state = authInitialState, action: IAuthAction): IAuthState => {
  switch (action.type) {
    case SIGN_IN:
      localStorage.setItem("user", JSON.stringify(action.payload));
      return { ...state, isAuth: true, user: action.payload };
    case SIGN_OUT:
      localStorage.removeItem("user");
      return { ...state, isAuth: false, user: null };

    default:
      return state;
  }
};

export default authReducer;
