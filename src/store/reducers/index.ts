import { combineReducers } from "redux";
import authReducer from "@/store/reducers/auth";
import modalsReducer from "@/store/reducers/modals";
import orderReducer from "@/store/reducers/order";
import productsReducer from "@/store/reducers/products";

const rootReducer = combineReducers({
  auth: authReducer,
  modals: modalsReducer,
  order: orderReducer,
  products: productsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
