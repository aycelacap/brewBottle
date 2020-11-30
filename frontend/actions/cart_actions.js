import * as CartAPIUtil from '../util/cart_api_util';

export const RECEIVE_CART_ITEMS = 'RECEIVE_CART_ITEMS';
export const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const CLEAR_CART_ITEM = 'CLEAR_CART_ITEM';
// export const RECEIVE_ITEM_ERRORS = 'RECEIVE_ITEM_ERRORS';

export const receiveCartItems = cartItems => ({
    type: RECEIVE_CART_ITEMS,
    cartItems
});

export const receiveCartItem = cartItem => ({
    type: RECEIVE_CART_ITEM,
    cartItem
});

export const removeCartItem = (cartItemId, allCartItems) => ({
    type: REMOVE_CART_ITEM,
    cartItemId,
    allCartItems
});

export const clearCartItems = (id) => ({
    type: CLEAR_CART_ITEMS,
    id
});


// export const receiveItemErrors = errors => ({
//     type: RECEIVE_ITEM_ERRORS,
//     errors
// });

export const getAllCartItems = () => dispatch => (
    CartAPIUtil.getAllCartItems()
    .then(cartItems => dispatch(receiveCartItems(cartItems)))
    // err => dispatch(receiveItemErrors(err.response.JSON))
);


export const getCartItem = cartItemId => dispatch => (
    CartAPIUtil.getCartItem(cartItemId)
    .then(cartItem => dispatch(receiveCartItem(cartItem)))
    // err => dispatch(receiveItemErrors(err.response.JSON))
);


export const createCartItem = cartItem => dispatch => {
    return CartAPIUtil.createCartItem(cartItem)
    .then(cartItem => {
       return dispatch(receiveCartItem(cartItem))},
       err => {  
           console.log(err)})
           
};

// export const createCartItem = () => {
//     return dispatch => {
//         return CartAPIUtil.createCartItem()
//             .then(cartItem => {
//                 dispatch(receiveCartItem(cartItem)),
//                     err => dispatch(receiveItemErrors(err.response.JSON))
//             })
//     }
// }

export const deleteCartItem = cartItemId => dispatch => (
    CartAPIUtil.deleteCartItem(cartItemId)
    .then(() => CartAPIUtil.getAllCartItems())
    .then((allCartItems) => dispatch(removeCartItem(cartItemId, allCartItems)))

    // err => dispatch(receiveItemErrors(err.response.JSON))
);
