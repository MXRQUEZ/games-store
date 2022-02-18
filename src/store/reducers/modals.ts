import { Action } from "redux";
import { IModalsState, ModalActionTypes } from "@/store/types/modals";

const modalsInitialState: IModalsState = {
  isSignInActive: false,
  isSignUpActive: false,
};

// eslint-disable-next-line default-param-last
const modalsReducer = (state = modalsInitialState, action: Action): IModalsState => {
  switch (action.type) {
    case ModalActionTypes.SIGN_IN_MODAL_OPEN:
      return { ...state, isSignInActive: true, isSignUpActive: false };
    case ModalActionTypes.SIGN_IN_MODAL_CLOSE:
      return { ...state, isSignInActive: false, isSignUpActive: false };

    case ModalActionTypes.SIGN_UP_MODAL_OPEN:
      return { ...state, isSignInActive: false, isSignUpActive: true };
    case ModalActionTypes.SIGN_UP_MODAL_CLOSE:
      return { ...state, isSignInActive: false, isSignUpActive: false };

    default:
      return state;
  }
};

export default modalsReducer;
