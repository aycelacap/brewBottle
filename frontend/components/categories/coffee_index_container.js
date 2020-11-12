import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts, fetchProductsByCategory } from '../../actions/product_actions';
import ProductIndex from './product_index'

const mSTP = state => {
  return {
    products: Object.values(state.entities.products)
  };
};

const mDTP = dispatch => {
  return {
      fetchProducts: () => dispatch(fetchProducts()),
      fetchProductsByCategory: (item_type) => dispatch(fetchProductsByCategory(item_type)),
      fetchProduct: (id) => dispatch(fetchProduct(id))
  };
};

