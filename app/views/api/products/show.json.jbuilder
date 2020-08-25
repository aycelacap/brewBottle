json.products do 
    json.set! @product.id do 
        json.partial! 'api/products/product', product: @product
        json.photoUrls @product.photos.map { |file| url_for(file) }
    end
end

# json.partial! 'api/products/product', product: @product
# json.photoUrls @post.photos.map { |file| url_for(file) }