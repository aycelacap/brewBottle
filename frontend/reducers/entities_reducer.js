import { combineReducers } from "redux";
import users from "./users_reducer";
import productsReducer from './products_reducer';
import cartItemsReducer from './cart_item_reducer';
import searchReducer from './search_reducer'

export default combineReducers({
  users,
  products: productsReducer,
  cartItems: cartItemsReducer,
  searchReducer: searchReducer,
});
