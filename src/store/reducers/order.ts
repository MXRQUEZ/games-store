import { IOrderAction, IOrderState, OrderActionType } from "@/store/types/order";

const orderInitialState: IOrderState = {
  order: [],
};

const orderReducer = (state: IOrderState = orderInitialState, action: IOrderAction): IOrderState => {
  switch (action.type) {
    case OrderActionType.ADD_ITEM:
      const orderItem = state.order.find((item) => item.product.id === action.payload.product.id);
      if (orderItem) {
        return state;
      }
      state.order.push(action.payload);
      return { ...state };
    case OrderActionType.REMOVE_ITEM:
      const newOrder = state.order.filter((item) => item.product.id !== action.payload.product.id);
      return { ...state, order: newOrder };
    case OrderActionType.CLEAR_ORDER:
      return { ...state, order: [] };

    default:
      return state;
  }
};

export default orderReducer;
