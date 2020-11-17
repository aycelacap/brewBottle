import React from 'react';
import ProductIndexItem from './product_index_item';
// import ProductIndex from './product_index_container'
import { Link } from "react-router-dom";

class ProductIndex extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            products: null,
            // category: null,
        }


    //     // let's bind our helper functions
        // THIS BIND handles all categories
        this.handleGetProducts = this.handleGetProducts.bind(this);
        this.handleCategory = this.handleCategory.bind(this);

    }

    

    componentDidMount() {
        this.props.fetchProducts().then(products => this.setState({products}));
    }

    componentDidUpdate(prevProps, prevState) {
        // compare with prev
        // this.props.
    };

    // on the onClick, change the state

    handleGetProducts(e) {
        e.preventDefault();
        const id = e.currentTarget.value 
        return(
            this.props.fetchProducts(id)
        )         
    }


    handleCategory(e) {
        e.preventDefault()
        let category_id = e.currentTarget.value
        return (
            this.props.fetchProductsByCategory(category_id)
            )
    }
    // try this

    handleAllProduct(e) {
        e.preventDefault()
        return this.props.fetchProducts();
    }

    render () {
        // const { products } = this.state

        if (!this.props.products) return null
        // if (!this.props.category) return null
        // debugger

        let productIdx = this.props.products.map(product => {
            // we need to make a single product presentational component to single out the products from the index 
            // therefore, we iterating through
            // debugger 
            return(<ProductIndexItem product={product} key={product.id}/>) 
        });

        return (
          <div>
            <nav className="product-category">
              <div className="productindex-buttons-container">
                        <button className='product-index-buttons' onClick={this.handleGetProducts}>
                            SHOP ALL
                        </button>
                        <button className='product-index-buttons' onClick={this.handleCategory} value="105">
                            COFFEE
                        </button>
                        <button className='product-index-buttons' onClick={this.handleCategory} value="100">
                            BREWING
                        </button>
                        <button className='product-index-buttons' onClick={this.handleCategory} value="250">
                            SEASONAL
                        </button>

                        <div className="search-box">search here o.O</div>
                    </div>  
            </nav>
            <ul className="product-index-item">{productIdx}</ul>
            {/* <button className='product-index-buttons' onClick={this.handleGetProduct}></button> */}
          </div>
        );
    }
}

export default ProductIndex;

// todo:
// ask about warning = unique key in render 

