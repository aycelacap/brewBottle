json.array! @products do |product|
  json.extract! product, :category_id, :name, :description, :item_type, :price
  json.photoUrls product.photos.map { |file| url_for(file) }
end


# json.products do 
#     json.set! @product.id do 
#         json.partial! 'api/products/product', product: @product
#         json.photoUrls @product.photos.map { |file| url_for(file) }
#     end
# end