import React from 'react';
import CartIndexItem from './cart_index_item_container';
import { Link } from 'react-router-dom';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      productQty: 0,
    };

    this.deleteItem = this.deleteItem.bind(this);
    this.currentUserCartItems = this.currentUserCartItems.bind(this)
    this.total = this.total.bind(this);
    this.numberWithCommas = this.numberWithCommas.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this)
  }

  componentDidMount() {
    this.props.getAllCartItems();
  }

  componentDidUpdate(prevProps) {
    if (this.props.cartItems !== prevProps.cartItems) {
      this.updateTotalPrice();
    }
  }

  increaseQuantity(e) {
    e.preventDefault();
    this.setState({quantity: this.state.quantity + 1})
  }
  decreaseQuantity(e) {
      e.preventDefault();
      if (this.state.quantity > 1) {
          this.setState({ quantity: this.state.quantity - 1 });
      }
  }

  updateTotalPrice() {
    let sum = 0.00;
    let prodQty = 0;

    this.props.cartItems.forEach(cartItem => {
      if (cartItem.product) {
        sum += cartItem.product.price;
      }
      sum;
    })

    this.setState({ total: sum })
    this.setState({ productQty: prodQty })

  }


  numberWithCommas(x) {
    // return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return x.toFixed(2)
  }



  deleteItem(cartItem) {
    let cartItemId = cartItem[1].cartItemId

    this.props.deleteCartItem(cartItemId)

  }

  total(cartItem) {
    return cartItem[1].product.price * cartItem[1].quantity
  }


  increaseQuantity(e) {
    e.preventDefault();
    this.setState({ productQty: this.state.productQty + 1 });
  }

  decreaseQuantity(e) {
    e.preventDefault();
    if (this.state.productQty > 1) {
      this.setState({ productQty: this.state.productQty - 1 });
    }
  }



  currentUserCartItems() {
    // fix this function to populate productid and userid
    let { userCartItems } = this.props
    let currentCartItems = {}
    // debugger
    // console.log(currentCartItems)

    userCartItems.forEach(userCartItem => {
      if (currentCartItems[userCartItem.product_id]) {
        currentCartItems[userCartItem.product_id].quantity += userCartItem.quantity
      } else {
        console.log(userCartItem.product)
        currentCartItems[userCartItem.product_id] = { product: userCartItem.product, quantity: userCartItem.quantity, cartItemId: userCartItem.id }
      }
    })

    return currentCartItems
  }




  render() {

    if (this.currentUser && this.currentUser.cartItems.length === 0) return null;
    // const { cartItems } = this.props;
    const { currentUser } = this.props;
    let cartItemsObj = Object.entries(this.currentUserCartItems())
    console.log("cartItemsObj", cartItemsObj)
    

    const cart_page = currentUser ? (
      <div className="whole-cart-page-wrapper">
        <div className="cart-body-wrapper">
          <div className="left-side-header">
            <h1 className="cart-header">My Bag</h1>
            <div className='cart-items-qty'>{this.state.productQty} Items</div>
          </div>
          <div className="left-side-items">
            <div className="left-cart-index-item-div">
              {cartItemsObj.map((cartItem) => {
                console.log(cartItem);
                let product = cartItem[1].product;
                if (!product) return null;
                return (
                  <div className="cart-product-info" key={cartItem[1].cartItemId}>
                  {/* // <div className="cart-product-info" key={cartItem[1].cartItemId}> */}
                    <Link className="cart-product-link" to={`/products/${product.id}`}>
                      {/* <img className="cart-product-image" src={product.photoUrl} alt="" /> */}
                    </Link>
                    <div className="cart-product-description">
                      <div className="prod-des-top">
                        <div className="cart-product-name-container">
                          <Link className="cart-product-link" to={`/products/${product.id}`}>
                            <div className="cart-product-name">
                              {product.name}
                            </div>
                          </Link>
                        </div>
                        <div className="cart-product-color-container">
                          <div className="cart-product-color">
                            {product.color}
                          </div>
                        </div>
                        <div className="cart-sizing-price">
                          <div className="cart-product-size-container">
                            <div className="cart-product-size">
                              {/* Size {product.size} */}
                            </div>
                          </div>
                          <div className="price-quantity">
                            <div className="cart-item-price">
                              <p className="cart-item-price">Item Price</p>
                              <div className="cart-price">${product.price}</div>
                            </div>
                            <div className="cart-quantity">
                              <p className="cart-item-quantity">Quantity</p>
                              <div className="cart-quantity">
                                {cartItem[1].quantity}
                                {/* <span>
                                    <button onClick={this.decreaseQuantity} onChange={this.update}>-</button>
                                        <h1>{this.state.productQty}</h1>
                                    <button onClick={this.increaseQuantity} onChange={this.update}>+</button>
                                </span> */}
                              </div>
                            </div>
                            <div className="cart-total">
                              <p className="cart-item-total">Total Price</p>
                              <div className="cart-item-total-price">
                                ${this.total(cartItem)}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="ship-desc">
                        <p>Free Shipping + Free returns</p>
                        {/* <button className="delete-cart-item" onClick={() => this.props.deleteCartItem(cartItem.id)}>Remove</button> */}
                        <input className="delete-cart-item" type="submit" value='Remove' onClick={() => this.props.deleteCartItem(cartItem[1].cartItemId)} />
                      </div>
                    </div>
                  </div>
                );
              })}
              <br />
            </div>
          </div>
        </div>
        <div className="right-side-checkout">
          <p className="cart-summary">Order Summary</p>
          <div className='cart-shipping-container'>
            <p className='cart-shipping'>Shipping</p>
            <p className='cart-shipping-free'>FREE</p>
          </div>
          <div className='cart-line'></div>
          <div className='cart-total-continer'>
            <p className='cart-total-text'>Total</p>
            <div className="cart-total">USD ${this.numberWithCommas(this.state.total)}</div>
          </div>
          <button className="checkout">CHECKOUT</button>
        </div>
      </div>
    ) : (
        <div className="signed-out-cart">
          <h1 className="signed-out-message">ADD TO CART :D</h1>
        <Link className="shop-button" to="/products">S H O P</Link>
        </div>
      );
    return cart_page;
  }
}


export default Cart;