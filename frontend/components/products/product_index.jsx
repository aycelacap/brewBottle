import React from 'react';
import ProductIndexItem from './product_index_item';

class ProductIndex extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            products: null
        }


    //     // let's bind our helper functions
        this.handleGetProduct = this.handleGetProduct.bind(this);
    //     // this.handleAllProduct = this.handleAllProduct.bind(this)

    }

    

    componentDidMount() {
        this.props.fetchProducts().then(products => this.setState({products}))
    }

    handleGetProduct(e) {
        e.preventDefault();
        const id = e.currentTarget.value 
        return(
            this.props.fetchProduct(id)
        )         
    }

    // handleAllProduct(e) {
    //     e.preventDefault()
    //     return this.props.fetchProducts()
    // }

    render () {
        // const { products } = this.state

        if (!this.props.products) return null
        // debugger

        let productIdx = this.props.products.map(product => {
            // we need to make a single product presentational component to single out the products from the index 
            // therefore, we iterating through
            // debugger 
            return(<ProductIndexItem product={product} key={product.id}/>) 
        });

        return (
            <div>
                {/* <button className='product-index-buttons' onClick={this.handleAllProduct}>
                    All
                </button> */}
                {/* <div className="productindex-buttons-container">
                    <button className='product-index-buttons' onClick={this.handleGetProduct} value="100">
                        Coffee
                        </button>
                    <button className='product-index-buttons' onClick={this.handleGetProduct} value="105">
                        Coffee Supplies
                    </button>
                </div> */}
                

                <div className='productindex-wrapper'>
                    <ul className='product-index-item'>
                        {productIdx}
                    </ul>
                    {/* <button className='product-index-buttons' onClick={this.handleGetProduct}></button> */}
                </div>
            </div>
        )
    }
}

export default ProductIndex;

// todo:
// ask about warning = unique key in render 
