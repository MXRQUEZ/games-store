import { IOrderAction, IOrderState, OrderActionType, orderKey } from "@/store/types/order";

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
      const newProductsId = state.order.map((item) => item.product.id);
      localStorage.setItem(orderKey, JSON.stringify(newProductsId));
      return { ...state };
    case OrderActionType.REMOVE_ITEM:
      const newOrder = state.order?.filter((item) => item.product.id !== action.payload.product.id);
      const removeProductsId = newOrder.map((item) => item.product.id);
      localStorage.setItem(orderKey, JSON.stringify(removeProductsId));
      return { ...state, order: newOrder };
    case OrderActionType.CLEAR_ORDER:
      localStorage.removeItem(orderKey);
      return { ...state, order: [] };

    default:
      return state;
  }
};

export default orderReducer;
