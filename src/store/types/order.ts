import { Action } from "redux";
import { IOrderItem } from "@/types/iOrderItem";

export interface IOrderState {
  order: IOrderItem[];
}

export interface IOrderAction extends Action {
  type: string;
  payload: IOrderItem;
}

export const enum OrderActionType {
  ADD_ITEM = "ADD_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",
  CLEAR_ORDER = "CLEAR_ORDER",
  CHANGE_AMOUNT = "CHANGE_AMOUNT",
}
