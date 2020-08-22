import *  as ProductApiUtil from '../util/product_api_util'

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT'
export const RECEIVE_PRODUCT_ERRORS = 'RECEIVE_PRODUCT_ERRORS'

// actions POJOs

export const receiveProducts = products => {
    return {
        type: RECEIVE_PRODUCTS,
        products
    }
}

export const receiveProduct = product => {
    return {
        type: RECEIVE_PRODUCT,
        product
    }
}

export const receiveProductErrors = errors => {
    return {
        type: RECEIVE_PRODUCT_ERRORS,
        errors
    }
}

// thunk action creators

export const fetchProducts = () => dispatch => {
    return ProductApiUtil.fetchProducts() 
        .then(products => dispatch(receiveProducts(products))),
        error => dispatch(receiveProductErrors(error.responseJSON))
}

export const fetchProductsByCategory = (category_id, name) => dispatch => {
    return ProductApiUtil.fetchProductsByName(category_id, name)
        .then(products => dispatch(receiveProducts(products))),
        error => dispatch(receiveProductErrors(error.response.JSON)))
} 

export const fetchProduct = id => dispatch => {
    ProductApiUtil.fetchProduct(id)
    .then(product => dispatch(receiveProduct(product)),
    error => dispatch(receiveProductErrors(error.responseJSON)))
}