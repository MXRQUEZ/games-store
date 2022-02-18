import { combineReducers } from "redux";
import authReducer from "@/store/reducers/auth";
import modalsReducer from "@/store/reducers/modals";

const rootReducer = combineReducers({
  auth: authReducer,
  modals: modalsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
