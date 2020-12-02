import { connect } from 'react-redux';
import { getAllCartItems, createCartItem, deleteCartItem } from '../../actions/cart_actions';
import Cart from './cart';

const mapStateToProps = state => { 
    return ({
    userCartItems: Object.values(state.entities.cartItems),
    cartItems: Object.values(state.entities.cartItems),
    // currentUserId: state.session.id,

    //test below
    currentUser: state.entities.users[state.session.id],
})}

const mapDispatchToProps = dispatch => ({
    getAllCartItems: () => dispatch(getAllCartItems()),
    createCartItem: cartItem => dispatch(createCartItem(cartItem)),
    deleteCartItem: cartItemId => dispatch(deleteCartItem(cartItemId)),
    
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)