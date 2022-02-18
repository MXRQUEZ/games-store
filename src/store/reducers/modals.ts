import { Action } from "redux";
import { IModalsState } from "@/store/types/modals";
import {
  SIGN_IN_MODAL_CLOSE,
  SIGN_IN_MODAL_OPEN,
  SIGN_UP_MODAL_CLOSE,
  SIGN_UP_MODAL_OPEN,
} from "@/store/constants/modals";

const modalsInitialState: IModalsState = {
  isSignInActive: false,
  isSignUpActive: false,
};

// eslint-disable-next-line default-param-last
const modalsReducer = (state = modalsInitialState, action: Action): IModalsState => {
  switch (action.type) {
    case SIGN_IN_MODAL_OPEN:
      return { ...state, isSignInActive: true, isSignUpActive: false };
    case SIGN_IN_MODAL_CLOSE:
      return { ...state, isSignInActive: false, isSignUpActive: false };

    case SIGN_UP_MODAL_OPEN:
      return { ...state, isSignInActive: false, isSignUpActive: true };
    case SIGN_UP_MODAL_CLOSE:
      return { ...state, isSignInActive: false, isSignUpActive: false };

    default:
      return state;
  }
};

export default modalsReducer;
