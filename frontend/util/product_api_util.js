export const fetchProducts = () =>
    $.ajax({
        url: '/api/products',
        method: 'GET'
    })

export const fetchProduct = id =>
    $.ajax({
        url: `/api/products/${id}`,
        method: 'GET'
    })

export const fetchProductsByName = (category_id, name) => {
    return $.ajax({
        method: 'GET',
        url: `/api/products`,
        data: { category_id: category_id, name: name }
    })
}