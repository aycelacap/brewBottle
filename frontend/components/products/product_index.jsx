import React from 'react';
import ProductIndexItem from './product_index_item';

class ProductIndex extends React.Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         products: null
    //     }


    //     // let's bind our helper functions
    //     // this.handleGetProduct = this.handleGetProduct.bind(this);
    //     // this.handleAllProduct = this.handleAllProduct.bind(this)

    // }

    

    componentDidMount() {
        this.props.fetchProducts().then(products => this.setState({products}))
    }

    // handleGetProduct(e) {
    //     e.preventDefault();
    //     const category_id = e.currentTarget.value 
    //     return(
    //         this.props.fetchProductsByCategory(category_id)
    //     )         
    // }

    // handleAllProduct(e) {
    //     e.preventDefault()
    //     return this.props.fetchProducts()
    // }

    render () {
        // const { products } = this.state

        if (!this.props.products) return null
        // debugger

        let product = this.props.products.map(product => {
            // we need to make a single product presentational component to single out the products from the index 
            // therefore, we iterating through 
            return(<ProductIndexItem product={product} key={product.id}/>) 
        });

        return (
            <div>
                {/* <button className='product-index-buttons' onClick={this.handleAllProduct}>
                    All
                </button> */}
               
                <ul className='product-index-item'>
                    {product}
                </ul>
            </div>
        )
    }
}

export default ProductIndex;

// todo:
// ask about warning = unique key in render 
