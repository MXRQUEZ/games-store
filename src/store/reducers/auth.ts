import { SIGN_IN, SIGN_OUT } from "@/store/constants/auth";
import { IAuthAction, IAuthState } from "@/store/types/auth";

const authInitialState: IAuthState = {
  isAuth: false,
  user: null,
};

// eslint-disable-next-line default-param-last
const authReducer = (state = authInitialState, action: IAuthAction): IAuthState => {
  switch (action.type) {
    case SIGN_IN:
      return { isAuth: true, user: action.payload };
    case SIGN_OUT:
      return { isAuth: false, user: null };

    default:
      return state;
  }
};

export default authReducer;
