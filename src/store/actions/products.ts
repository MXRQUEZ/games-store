import { Action, Dispatch } from "redux";
import IProduct from "@/types/iProduct";
import { createProduct, removeProduct, updateProduct } from "@/shared/utils/apiRequests";
import { ProductsActionType } from "@/store/types/products";

export const addCard = (product: IProduct) => async (dispatch: Dispatch<Action>) => {
  await createProduct(product);
  dispatch({ type: ProductsActionType.ADD_PRODUCT });
};

export const updateCard = (product: IProduct) => async (dispatch: Dispatch<Action>) => {
  await updateProduct(product);
  dispatch({ type: ProductsActionType.UPDATE_PRODUCT });
};

export const removeCard = (productId: string | number) => async (dispatch: Dispatch<Action>) => {
  await removeProduct(productId);
  dispatch({ type: ProductsActionType.REMOVE_PRODUCT });
};
