import React from 'react';
import ProductIndexItem from './product_index_item';
// import ProductIndex from './product_index_container'
import { Link } from "react-router-dom";
import SearchContainer from '../search/search_container'


class ProductIndex extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            products: null,
            searchTerm: '',
            // category: null,
        }


    //     // let's bind our helper functions
        // THIS BIND handles all categories
        this.handleGetProducts = this.handleGetProducts.bind(this);
        this.handleCategory = this.handleCategory.bind(this);
        // this.updateIndex = this.updateIndex.bind(this);

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
            // this.props.fetchProducts(id) // this works
            this.props.fetchProduct(id)
        )         
    }


    handleCategory(e) {
        e.preventDefault()
        let category_id = e.currentTarget.value
        this.props.clearSearch();
        
        return (
            this.props.fetchProductsByCategory(category_id)
            )
    }

    handleAllProduct(e) {
        e.preventDefault()
        return this.props.fetchProducts();
    }

    render () {
        console.log(this.props.results)
        if (!this.props.products) return null
    
        let productIdx;
        if (this.props.results.length === 0) {
            
            productIdx = this.props.products.map(product => {
                return(<ProductIndexItem product={product} key={product.id}/>) 
            });
        } else {
            productIdx = this.props.results.map(product => {
                return(<ProductIndexItem product={product} key={product.id}/>) 
            });
        }

        // const renderComponent = () => {
        //     if (this.props.results.length === 0) {
        //         return 
        //     }
        // }


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

                        {/* <div className="search-box">search here o.O</div> */}
                        <div onClick={this.props.clearSearch} className='searchbar-icon-nav'>                                  
                            {/* <SearchContainer updateIndex={this.updateIndex}/> */}
                            <SearchContainer/>
                        </div>
                    </div>  
            </nav>
            <ul className="product-index-item">{productIdx}</ul>
            {/* <button className='product-index-buttons' onClick={this.handleGetProduct}></button> */}
          </div>
        );
    }
}

export default ProductIndex;

// Todo:
// ask about warning = unique key in render 

