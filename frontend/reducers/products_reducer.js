import { RECEIVE_PRODUCT, RECEIVE_PRODUCTS } from '../actions/product_actions';

const productsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    let nextState = Object.assign({}, oldState)
    
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return Object.assign({}, action.products)
        case RECEIVE_PRODUCT:
            // debugger
            nextState[action.product.id] = action.product
            return nextState
        default:
            return oldState;
    }
} 

export default productsReducer;