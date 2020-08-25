import { combineReducers } from "redux";
import productErrorsReducer from './product_errors_reducer'

import session from "./session_errors_reducer";

export default combineReducers({
  session,
  productErrorsReducer: productErrorsReducer,
});
