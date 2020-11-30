export const getAllCartItems = () => {
    return $.ajax({
        url: '/api/cart_items',
        method: 'GET'
    })
}

export const getCartItem = (cartItem) => {
    return $.ajax({
        url: `/api/cart_items/${cartItemId}`,
        method: 'GET'
    })
}

export const createCartItem = cartItem => {

    return $.ajax({
        url: `/api/cart_items`,
        method: 'POST',
        data: {cart_item: cartItem.cart_item}
    })
}

export const deleteCartItem = cartItemId => {
    return $.ajax({
        url: `/api/cart_items/${cartItemId}`,
        method: 'DELETE'
    })
}