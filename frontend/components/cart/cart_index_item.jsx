import React from 'react';
import { Link } from 'react-router-dom';

class CartIndexItem extends React.Component {
    constructor(props) {
      super(props) 
    }

    //  componentDidMount() {
    //     this.props.getAllCartItems();
    // }

    render() {
      return (
        <div className="cart-index-item-div">
          {this.props.cartItems.map((cartItem, idx) => {
          let product = cartItem.product;
          return (
            <div>
              <div>{product.name}</div>
              {/* <div>{product.color}</div> */}
              {/* <div>{product.size}</div> */}
              {/* <img className="idx-images" src={product.photoUrl} alt="" /> */}
            </div>
          );
        })}
        <br/>
        </div>
      );
    }
}

export default CartIndexItem;