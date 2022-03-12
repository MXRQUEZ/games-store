export interface IProductsState {
  productsRenderCount: number;
}

export const enum ProductsActionType {
  ADD_PRODUCT = "ADD_PRODUCT",
  UPDATE_PRODUCT = "UPDATE_PRODUCT",
  REMOVE_PRODUCT = "REMOVE_PRODUCT",
}
