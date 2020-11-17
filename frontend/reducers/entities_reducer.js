import { combineReducers } from "redux";
import users from "./users_reducer";
import productsReducer from './products_reducer';
import searchReducer from './search_reducer'

export default combineReducers({
  users,
  products: productsReducer,
  searchReducer: searchReducer,
});
