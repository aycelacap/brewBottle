import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts, fetchProduct, fetchProductsByCategory } from '../../actions/product_actions';
import ProductIndex from './product_index'
import { clearSearch } from '../../actions/search_actions';

const mSTP = state => {
    // debugger
    return {
        products: Object.values(state.entities.products),
        results: Object.values(state.entities.searchReducer)
    }
};

const mDTP = dispatch => {
    return {
        fetchProducts: () => dispatch(fetchProducts()),
        fetchProductsByCategory: (item_type) => dispatch(fetchProductsByCategory(item_type)),
        fetchProduct: (id) => dispatch(fetchProduct(id)),
        clearSearch: () => dispatch(clearSearch()),
        // you can put a comma at the end of a pojo
    }
}

export default connect(mSTP, mDTP)(ProductIndex)
