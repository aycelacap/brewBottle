import { RECEIVE_CART_ITEMS, REMOVE_CART_ITEM, RECEIVE_CART_ITEM } from "../actions/cart_actions";

const cartItemsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    // debugger
    switch (action.type) {
        case RECEIVE_CART_ITEMS:
            nextState = Object.assign({}, action.cartItems)
            return nextState
            // return action.cartItems
        case RECEIVE_CART_ITEM:
            nextState[action.cartItem.id] = action.cartItem
            return nextState
        case REMOVE_CART_ITEM:
            // delete nextState.id
            // return nextState
               delete nextState[action.id]
               return action.allCartItems
        default:
            return state;
    }
};

export default cartItemsReducer;