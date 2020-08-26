
json.extract! @product, :id, :category_id, :name, :description, :item_type, :price
json.photoUrls @product.photos.map { |file| url_for(file) }


# json.partial! 'api/products/product', product: @product
# json.photoUrls @post.photos.map { |file| url_for(file) }