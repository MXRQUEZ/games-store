import { IProductsState, ProductsActionType } from "@/store/types/products";
import { Action } from "redux";

const productsInitialState: IProductsState = {
  productsRenderCount: 0,
};

const productsReducer = (state: IProductsState = productsInitialState, action: Action): IProductsState => {
  switch (action.type) {
    case ProductsActionType.ADD_PRODUCT:
      state.productsRenderCount++;
      return { ...state };
    case ProductsActionType.UPDATE_PRODUCT:
      state.productsRenderCount++;
      return { ...state };
    case ProductsActionType.REMOVE_PRODUCT:
      state.productsRenderCount++;
      return { ...state };

    default:
      return state;
  }
};

export default productsReducer;
