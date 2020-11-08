import React from 'react';
import { Link } from 'react-router-dom';

class CoffeeIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      products: null
    };
  };

  handleGetCoffeeProducts(e) {
    e.preventDefault();
    const category_id = e.currentTarget.value
    return(
      this.props.fetchProductsByCategory(category_id)
    )
  }

    handleAllCoffeeProducts(e) {
        e.preventDefault()
        return this.props.fetchProducts();
    }

  render () {

    if (!this.props.products) return null;

    // iterate over all coffee products
    let coffeeProductIdx = this.props.products.map(product)

    return (

      <div className="coffee-index">

      </div>
    )
  }

};

export default CoffeeIndex;