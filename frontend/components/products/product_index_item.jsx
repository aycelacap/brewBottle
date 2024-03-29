import React from 'react'
import { Link } from 'react-router-dom'

const ProductIndexItem = ({ product }) => {
    // debugger
    if (!product) return null;
    
    console.log(product.photoUrls)
    return (
            <li className='whole-page-wrapper'>
            <div className='whole-content-wrapper'>
                    <div className='product-index-item-container'>
                        <Link to={`/products/${product.id}`}>
                            <div className='product-index-item-picture'>
                                <img className='show-pic' src={product.photoUrls[0]}/>
                            </div>
                        </Link>
                    </div>

                    <div className='product-item-text'>
                        <div className='product-item-name'>
                            {product.name}
                        </div>
                        <div className='product-item-price'>
                            ${product.price}
                        </div>
                    </div>
                </div>
            </li>
    )
}

export default ProductIndexItem;

