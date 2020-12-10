import React from 'react';
import ProductShow from './product_show';
import { connect } from 'react-redux';
import { fetchProduct, fetchProducts } from '../../actions/product_actions';
import { createCartItem } from '../../actions/cart_actions';
// import { clearSearch } from '../../actions/search_actions';

// our state will pass the product and current user for when they purchase

const mSTP = (state, ownProps) => {
// debugger
    return {
        product: state.entities.products[ownProps.match.params.id],
        cartItems: Object.values(state.entities.cartItems),
        currentUser: state.session.id
    }
}

const mDTP = dispatch => {
    // we want to grab products and product 
    // going to add search functionality now
        // go back to product show container/product show
    // the search is another MVP
    return {
        fetchProducts: () => dispatch(fetchProducts()),
        fetchProduct: id => dispatch(fetchProduct(id)),
        createCartItem: cartItem => dispatch(createCartItem(cartItem)),
        
        // clearSearch: () => dispatch(clearSearch)
    }
}

export default connect(mSTP, mDTP)(ProductShow)