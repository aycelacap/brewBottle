import React from 'react'

class Product extends React.Component {
    constructor(props) {
        super(props)
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
                        <img className='show-pic' src={product.photoUrls[1]} />
                        {/* <img className='show-pic-show-page' src={`${product.photos}`} alt="" /> */}
                    </div>

                    <div className='right-side-whole-container'>
                        <div className='main-product-description'>
                            <h1 className='product-name'>{product.name}</h1>
                            <div className='product-price'>{product.price} USD</div>
                            <p className='product-description'>{product.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;