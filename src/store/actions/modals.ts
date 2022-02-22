import { Action } from "redux";
import { ModalActionTypes } from "@/store/types/modals";

export const signInModalOpen = (): Action => ({ type: ModalActionTypes.SIGN_IN_MODAL_OPEN });

export const signInModalClose = (): Action => ({ type: ModalActionTypes.SIGN_IN_MODAL_CLOSE });

export const signUpModalOpen = (): Action => ({ type: ModalActionTypes.SIGN_UP_MODAL_OPEN });

export const signUpModalClose = (): Action => ({ type: ModalActionTypes.SIGN_UP_MODAL_CLOSE });
