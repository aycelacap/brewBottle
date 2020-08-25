import React from 'react'

class Product extends React.Component {
    constructor(props) {
        this(props)   
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.id)
    }

    render() {
        let product = this.props.product;

        return (
            <div>
                <div className='main-product-description'>
                    <h1 className='product-name'>{product.name}</h1>
                    <div className='product-price'>{product.price}USD</div>
                    <p className='product-description'>{product.description}</p>
                </div>
            </div>
        )
    }
}

export default Product;