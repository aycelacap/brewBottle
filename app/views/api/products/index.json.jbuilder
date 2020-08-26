# json.array! @products do |product|
#   json.extract! product, :category_id, :name, :description, :item_type, :price
#   json.photoUrls product.photos.map { |file| url_for(file) }
# end


@products.each do |product|
    json.set! product.id do 
        json.extract! product, :id, :category_id, :name, :description, :item_type, :price 
        json.photoUrls product.photos.map { |file| url_for(file) }
    end
end