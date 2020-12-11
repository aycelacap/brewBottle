import React from 'react'

class Product extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
                quantity: 1,
                size: '',
            }
        this.addToCart = this.addToCart.bind(this);
        this.addItem = this.addItem.bind(this);
    }

        // we need an add to cart function that is an onclick for the logo on line 

    addItem() {
        this.props.createCartItem({
            user_id: this.props.currentUser,
            product_id: this.props.product.id,
            quantity: this.state.quantity
            
        })
        this.props.history.push('/cart');
        console.log("currentU", this.props.currentUser, "prodId", this.props.product.id, "quantity", this.state.quantity)
    }

    addToCart(e) {
        e.preventDefault()
        let { product } = this.props
        // debugger
        if (this.props.currentUser) {
            // product['quantity'] = this.state.quantity
            // this.props
            //     .createCartItem({ 
            //         user_id: this.props.currentUser, 
            //         product_id: this.props.product.id, 
            //         quantity: this.state.quantity 
            //     })
            //     // //.then(() => this.props.openModal("Add_To_Cart"));
            //     .then(() => this.props.history.push("/cart"))

             let productIdArray = this.props.cartItems.map(item => (
                item.product_id
            ))
            if (!productIdArray.includes(this.props.product.id) ) {    
                this.addItem(this.props.product);
            } else{
                return (
                    alert('Product already in cart!')
                )
            }
            console.log("cartItems", this.props.cartItems);
        } else {
            // this.props.history.push("/UserSession")
            console.log("else statement: cart")
            this.props.history.push("/login")
        }
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.id)
    }

    render() {
        let product = this.props.product;
        if (!product) return null;
        return (
            <div>
                <div className='product-show-whole-page-container'>
                    <div className='product-left-side-img'>
                        <img className='show-pic' src={product.photoUrls[0]} />
                        <br/>
                        <img className='show-pic' src={product.photoUrls[1]} />
                        {/* <img className='show-pic-show-page' src={`${product.photos}`} alt="" /> */}
                    </div>

                    <div className='right-side-whole-container'>
                        <div className='main-product-description'>
                            <h1 className='product-name'>{product.name}</h1>
                            <div className='product-price'>{product.price}</div>
                            <p className='product-description'>{product.description}</p>
                            {/* <a href="" className="add-to-cart">Add To Cart <i className="fas fa-shopping-cart"></a> */}
                            <button className="add-to-cart" onClick={this.addToCart}>Add To Cart <i className="fas fa-shopping-cart"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;