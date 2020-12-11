import { connect } from 'react-redux';
import React from 'react';
import CartIndexItem from './cart_index_item';
import { getAllCartItems, deleteCartItem, getCartItem, createCartItem} from '../../actions/cart_actions'

const mapStateToProps = ({session, entities:{cartItems, products}}) => {
    return({
    products: products,
    cartItems: cartItems,
   // currentUser: state.entities.users[state.session.id]
    currentUser: session.id
})}

const mapDispatchToProps = dispatch => {

    return ({
    getAllCartItems: () => dispatch(getAllCartItems()),
    getCartItem: cartItemId => dispatch(getCartItem(cartItemId)),
    deleteCartItem: cartItemId => dispatch(deleteCartItem(cartItemId)),
    createCartItem: cartItem => dispatch(createCartItem(cartItem))
})}




export default connect(mapStateToProps, mapDispatchToProps)(CartIndexItem);