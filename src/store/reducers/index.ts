import { combineReducers } from "redux";
import authReducer from "@/store/reducers/auth";
import modalsReducer from "@/store/reducers/modals";
import orderReducer from "@/store/reducers/order";

const rootReducer = combineReducers({
  auth: authReducer,
  modals: modalsReducer,
  order: orderReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
