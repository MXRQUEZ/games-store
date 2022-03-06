import { IOrderAction, OrderActionType } from "@/store/types/order";
import { IOrderItem } from "@/types/iOrderItem";

export const addNewOrderItem = (orderItem: IOrderItem): IOrderAction => ({
  type: OrderActionType.ADD_ITEM,
  payload: orderItem,
});

export const removeFromOrder = (orderItem: IOrderItem): IOrderAction => ({
  type: OrderActionType.REMOVE_ITEM,
  payload: orderItem,
});

export const clearOrder = () => ({
  type: OrderActionType.CLEAR_ORDER,
});
