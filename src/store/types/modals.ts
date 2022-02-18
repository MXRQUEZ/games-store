export interface IModalsState {
  isSignInActive: boolean;
  isSignUpActive: boolean;
}

export enum ModalActionTypes {
  SIGN_IN_MODAL_OPEN = "SIGN_IN_MODAL_OPEN",
  SIGN_IN_MODAL_CLOSE = "SIGN_IN_MODAL_CLOSE",
  SIGN_UP_MODAL_OPEN = "SIGN_UP_MODAL_OPEN",
  SIGN_UP_MODAL_CLOSE = "SIGN_UP_MODAL_CLOSE",
}
