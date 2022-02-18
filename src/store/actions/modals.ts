import { Action } from "redux";
import {
  SIGN_IN_MODAL_CLOSE,
  SIGN_IN_MODAL_OPEN,
  SIGN_UP_MODAL_CLOSE,
  SIGN_UP_MODAL_OPEN,
} from "@/store/constants/modals";

export const signInModalOpen = (): Action => ({ type: SIGN_IN_MODAL_OPEN });

export const signInModalClose = (): Action => ({ type: SIGN_IN_MODAL_CLOSE });

export const signUpModalOpen = (): Action => ({ type: SIGN_UP_MODAL_OPEN });

export const signUpModalClose = (): Action => ({ type: SIGN_UP_MODAL_CLOSE });
